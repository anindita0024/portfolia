import { axiosInstance } from '../../utils'
import React , { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError(false);
        try {

            
            const res = await axiosInstance.post("/auth/register",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login")
            
        } catch (error) {

            setError(true)
            
        }
        
        

    }


    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className="registerFrom" onSubmit ={handleSubmit}>
                <label>Username</label>
                <input type="text"
                 className='registerInput' 
                 placeholder='Enter your name..' 
                 onChange ={e =>setUsername(e.target.value)}
                 />

                <label>Email</label>
                <input type="text" 
                className='registerInput' 
                placeholder='Enter your email..' 
                onChange ={e =>setEmail(e.target.value)}
                />
                <label>Passwoard</label>
                <input type="password"
                 className ='registerInput'
                 placeholder='Enter your passwoard..' 
                 onChange ={e =>setPassword(e.target.value)}
                 />
                <button type ="submit" className="registerBtn">Register</button>
            </form>
            <button className="registerLog">
                <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>Login</Link>
            </button>

             {error && <span style={{color:"brown", margin: "12px"}}>Something is wrong</span>}


        </div>
    )
}

