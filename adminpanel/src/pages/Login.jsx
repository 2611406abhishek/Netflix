import { useContext, useState } from 'react'
import '../style/Login.css'
import { AuthContext } from '../context/authContext/AuthContext';
import { login } from '../context/authContext/apiCalls';


const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {isFetching,dispatch} = useContext(AuthContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    login({email,password},dispatch);
    
  }
  return (

    <div className="login">
       <form className="loginForm">
          <input type="text" placeholder="email" className="loginInput" onChange={(e) => setEmail(e.target.value)}/>
          <input  type="password" placeholder='password' className='loginInput' onChange={(e) =>setPassword(e.target.value)}/>
          <button className='loginButton' disabled={isFetching} onClick={handleLogin}>Login</button>
       </form>

    </div>
  )
}

export default Login