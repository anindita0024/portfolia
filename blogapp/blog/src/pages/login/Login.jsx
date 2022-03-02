import { axiosInstance } from '../../utils'
import React,{useRef,  useContext} from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

export default function Login() {

    const userRef = useRef()
    const passwordRef = useRef()
    const {dispatch, isFecthing} = useContext(Context)

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axiosInstance.post("/auth/login", {
                username : userRef.current.value,
                password : passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESSFULL", payload:res.data})
        } catch (error) {
            dispatch({type:"LOGIN_FAILURE"})
        }
    }







    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginFrom" onSubmit = {handleSubmit}>
                <label>Username</label>
                <input type="text" 
                className='loginInput' 
                placeholder='Enter your name..'
                ref ={userRef}
                 />
                <label>Passwoard</label>
                <input type="password" 
                className ='loginInput'
                placeholder='Enter your passwoard..' 
                ref ={passwordRef}
                />
                <button type = "submit" className="loginBtn" disabled ={isFecthing}>Login</button>
            </form>
            <button className="loginReg">
                <Link style={{textDecoration:"none",color:"inherit"}} to="/register">Register</Link>
            </button>
        </div>
    )
}
