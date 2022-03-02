import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

import './topbar.css';

export default function Topbar() {

    const {user , dispatch} = useContext(Context);
    const publicFold = "https://fullblogg.herokuapp.com/image/";


    
    const handleLogout = () =>{
        dispatch({type:"LOGOUT"})
    }
     
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-twitter"></i>
            <i className="topIcon fab fa-pinterest-p"></i>
            <i className="topIcon fab fa-instagram"></i>
            </div>
            <div className="topCentre">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to='/' style={{textDecoration:"none",color:"inherit"}}>Home</Link>
                    </li>

                    <li className="topListItem">
                        <Link to='/about' style={{textDecoration:"none",color:"inherit"}}>About</Link>
                    </li>

                    <li className="topListItem">
                        <Link to='/conatct' style={{textDecoration:"none",color:"inherit"}}>conatct</Link>
                    </li>

                    <li className="topListItem">
                    <Link to='/write' style={{textDecoration:"none",color:"inherit"}}>Write</Link>
                    </li>

                    <li className="topListItem" onClick={handleLogout}>
                        {user && 'Logout'}
                    </li>
                </ul>
            </div>
            <div className="topRight">

                
               

                { user ? (
                    <Link to = "/sitting">
                        <img className ="topImg"
                          src ={publicFold + user.profilePicture}  
                          alt=""
                        />
                    </Link>
                    
                ):(
                    <ul className='topList'>
                        <li className='topListItem'>
                        <Link to='/login' style={{textDecoration:"none",color:"inherit"}}>Login</Link>
                        </li>

                        <li className='topListItem'>
                        <Link to='/register' style={{textDecoration:"none",color:"inherit"}}>Register</Link>
                        </li>
                
                    </ul>
                )
            }
                
                <i className=" topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
