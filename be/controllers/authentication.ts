import express from "express";

import { getUserByUserName, getUserByEmail, createUser } from "../db/users";
import { authentication, random } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.json({
        isSuccess: false,
        message: "Email or password are missing",
      });
    }

    const user = await getUserByUserName(username).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      return res.json({
        isSuccess: false,
        message: "Incorrect username or password",
      });
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash) {
      return res.json({
        isSuccess: false,
        message: "Incorrect username or password",
      });
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie("123abc", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    return res.status(200).json({
      isSuccess: true,
      message: "Login successful",
      user: user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      isSuccess: false,
      message: "Internal server error",
    });
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
