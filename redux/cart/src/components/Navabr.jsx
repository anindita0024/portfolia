import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navabr = () => {

    const items = useSelector((state) =>state.cart)

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <span className="logo">Redux Store</span>
            <div>
                <Link className="navLink" to="/">Home</Link>
                <Link tclassName="navLink" to="/cart">Cart</Link>
                <span className="cartCount">Count Items : {items.length}</span>
            </div>

        </div>
    )
}

export default Navabr
