import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <div className = "navbar">

            <Link to = "/"  className ="home">Home</Link>
            <Link  to = '/like' className = "like-nav">Like</Link>
        </div>
    )
}

export default Navbar
