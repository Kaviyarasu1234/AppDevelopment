import { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, signin } from '../Redux/UserSlice';
function Login() {
  const navigate = useNavigate();
  const users = useSelector(selectUser);
  const dispatch = useDispatch();
    const [login,setLogin] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Login = (e) => {
      dispatch(signin(login));
      navigate('/dashboard');
      e.preventDefault();
      console.log("Logging in with username:", login.username);
      console.log("Password:", login.password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prevLogin) => ({
        ...prevLogin,
        [name]: value
      }));
    };
    
    return (
      
      <div className="LoginBorder">
        <div className='LoginBox'>
          <div className='LoginBoxTop'>
            <div className='LoginBoxTitle'>
              <p>Welcome to </p><h2>RecipeHub</h2>
              <p>Continue with where you left
                without any disturbance
              </p>
            </div>
            <form className="LoginForm" onSubmit={Login}>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="input"
                placeholder="Enter the username"
                required
              />
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Enter the password"
                required
              />
              <button type="submit">
              <span>Login</span>
                </button>
            </form>
          </div>
          <div className='LoginBoxBottom'>
            <p>Don't have an account? <span onClick={()=>navigate("/signup")}>Signup</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;