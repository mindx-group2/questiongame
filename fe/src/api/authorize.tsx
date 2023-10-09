import { axiosClient } from "./axiosConnect";
import { User } from '../interface/auth';

async function getLogin(data: User)  {
  return await axiosClient.get('/authorize/login', data)
}

async function postRegister(data: User) {
  return await axiosClient.post('/authorize/register', data)
}

export { getLogin, postRegister }