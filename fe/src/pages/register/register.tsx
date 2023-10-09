import './register.css';
import { User } from '../../interface/auth';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { postRegister } from '../../api/authorize';

const Register = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" })
  const [tempPassword, setTempPassword] = useState("")
  const navigate = useNavigate();

  const handleChangeUsername = (e: any) => {
    setUser({ ...user, username: e.target.value })
  }

  const handleChangePassword = (e: any) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleChangePasswordAgain = (e: any) => {
    setTempPassword(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    let register = await postRegister(user)
    register = register.data
    
    if (tempPassword !== user.password)
      alert("The password is not the same !!!")

    if (register.isSuccess !== true) 
      alert(register.message)
    else 
      alert("Register successfully !!")
      navigate("/")
    setUser({ username: "", password: "" })
    setTempPassword("")
  }

  return (
    <div className="register-container">
      <h2 className="register-title">Question Game</h2>
      <form className="register-box" onSubmit={handleSubmit}>
        <h3 className="register-box_title">SIGN UP</h3>
        <input type="text" placeholder="Enter username" className="register-box_item" onChange={handleChangeUsername} value={user.username} />
        <input type="password" placeholder="Enter password" className="register-box_item" onChange={handleChangePassword} value={user.password} />
        <input type="password" placeholder="Enter password again" className="register-box_item" onChange={handleChangePasswordAgain} value={tempPassword}/>
        <button className="register-box_submit">SIGN UP</button>
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