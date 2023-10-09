import './login.css';
import { User } from '../../interface/auth';
import {FcGoogle} from 'react-icons/fc';
import {useState} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getLogin } from '../../api/authorize';

const Login = () => {
  const [user, setUser] = useState<User>({username: "", password: ""});
  const navigate = useNavigate()
  
  const handleChangeUsername = (e: any) => {
    setUser({...user, username: e.target.value})
  }
  
  const handleChangePassword = (e: any) => {
    setUser({...user, password: e.target.value})
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    
    let login = await getLogin(user)
    login = login.data

    if (login.isSuccess !== true)
      alert(login.message)
    else 
      navigate("/")
    setUser({username: "", password: ""})
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Question Game</h2>
      <form className="login-box" onSubmit={handleSubmit}>
        <h3 className="login-box_title">Login</h3>
        <input type="text" placeholder="Username" className="login-box_item" onChange={handleChangeUsername} value={user.username}/>
        <input type="password" placeholder="Password" className="login-box_item" onChange={handleChangePassword} value={user.password}/>
        <button className="login-box_submit">Login</button>
        <div className="login-google">
          <h3 className="login-google_title">OR</h3>
          <FcGoogle className="login-google_button"/> 
        </div>
      </form>
      <div className="login-sign-up_line">
        <h3 className="login-sign-up_title">Not have account?</h3>
        <Link to='/register' className="login-sign-up_button">Sign Up</Link>
        <Outlet />
      </div>
    </div>  
  );
}

export default Login;