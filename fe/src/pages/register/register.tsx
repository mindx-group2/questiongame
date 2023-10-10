import './register.css';
import { UserRegister } from '../../interface/auth';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { postRegister } from '../../api/authorize';

const Register = () => {
  const [user, setUser] = useState<UserRegister>({email: "", username: "", password: "" })
  const [tempPassword, setTempPassword] = useState("")
  const navigate = useNavigate();

  const handleChangeEmail = (e: any) => {
    setUser({ ...user, email: e.target.value })
  }

  const handleChangeUsername = (e: any) => {
    setUser({ ...user, username: e.target.value })
  }

  const handleChangePassword = (e: any) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleChangePasswordAgain = (e: any) => {
    setTempPassword(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (user.password === "" || tempPassword === "" || user.email === "" || user.username === "")
      alert("Missing information")
    else if (tempPassword !== user.password)
      alert("The password is not the same !!!")
    try {
      let registerResponse = await postRegister(user)
      console.log(registerResponse)
      if (registerResponse.data.isSuccess !== true)
        alert(registerResponse.data.message)
      else {
        alert(registerResponse.data.message)
        navigate("/")
      }
    } catch (error) {
      console.error(error);
    }

    setUser({email: "", username: "", password: "" })
    setTempPassword("")
  }

  return (
    <div className="register-container">
      <h2 className="register-title">Question Game</h2>
      <form className="register-box" onSubmit={handleSubmit}>
        <h3 className="register-box_title">SIGN UP</h3>
        <input
          type="text"
          placeholder="Enter email"
          className="register-box_item"
          onChange={handleChangeEmail}
          value={user.email} />
        <input 
          type="text" 
          placeholder="Enter username" 
          className="register-box_item" 
          onChange={handleChangeUsername} 
          value={user.username} />
        <input type="password" 
          placeholder="Enter password" 
          className="register-box_item" 
          onChange={handleChangePassword} 
          value={user.password} />
        <input 
          type="password" 
          placeholder="Enter password again" 
          className="register-box_item" 
          onChange={handleChangePasswordAgain} 
          value={tempPassword} />
        <button className="register-box_submit">
            SIGN UP
        </button>
        <div className="register-google">
          <h3 className="register-google_title">OR SIGN UP WITH</h3>
          <FcGoogle className="register-google_button" />
        </div>
      </form>
      <div className="register-sign-up_line">
        <h3 className="register-sign-up_title">HAVE ACCOUNT? </h3>
        <Link to='/' className="register-sign-up_button">Sign In</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Register;