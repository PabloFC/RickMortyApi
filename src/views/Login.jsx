import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Login() {

    const {login, errorMessage } = useAuthContext();
    const navigate = useNavigate();



    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    function handleInputs(e){
        setUser({...user, [e.target.name] : e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        login(user);
        
        navigate('/');
    }

  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            id="email" 
            name="email" 
            onChange={handleInputs}
            value={user.email}
            autoComplete='off'
            placeholder="Email"
            required/>

            <input 
            type='password' 
            id="password" 
            name="password" 
            onChange={handleInputs}
            autoComplete='off'
            value={user.password}
            placeholder="Password"
            required/>

            <p className='error'>{errorMessage}</p>

            <button type='submit'>Log in</button>
        </form>

    </div>
  )
}

export default Login