import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div classNmae ="header">
            <div className="headerTitle">
                <span className ="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src ="https://images.pexels.com/photos/10254830/pexels-photo-10254830.jpeg?cs=srgb&dl=pexels-igor-justo-10254830.jpg&fm=jpg" alt="" />
        </div>
    )
}
