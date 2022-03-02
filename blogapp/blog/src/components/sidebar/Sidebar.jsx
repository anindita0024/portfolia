import { axiosInstance } from '../../utils'
import React ,{ useEffect, useState} from 'react'
import './sidebar.css';
import {Link } from "react-router-dom"

export default function Sidebar() {

    const [cate,setCate] = useState([]);




    useEffect(() => {
        const getCate = async () =>{
            const res = await axiosInstance.get("/categories")
            setCate(res.data)
        }

        getCate()
    }, [])


    return (
        <div className ="sidebars">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img  className ="sidebarImg"src="https://images.pexels.com/photos/10259249/pexels-photo-10259249.jpeg?cs=srgb&dl=pexels-nida-10259249.jpg&fm=jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit animi nostrum quae saepe beatae explicabo laudantium magnam dolor quam deserunt. Cum, eaque? Earum, adipisci ex. </p>
            </div>
            <div className ="sidebarItem">
                <span className="sidebarTitle">Catagories</span>
                <ul className="sidebarList">

                    {cate.map(c =>(

                         <Link to = {`/?cate=${c.name}`} style={{textDecoration:"none",color:"inherit"}}>

                                 <li className="sidebarListItem">{c.name}</li>

                         </Link>

                    ))}


                    
                </ul>
            </div>
            <div className="sidebarItems">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-pinterest-p"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                </div>
            </div>
        </div>
    )
}
