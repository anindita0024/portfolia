import React from 'react'
import { remove } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {
    const product = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (prod) =>{
        dispatch(remove(prod))
    }


    return (
        <div>
           <h3>cart</h3>
           <div className="cardWarraper">
               {
                   product.map( (prod) =>(
                       <div className="cartCard">
                           <img src={prod.image} alt="" />
                           <h5>{prod.title}</h5>
                           <h5>{prod.price}</h5>
                           <button onClick = {() => handleRemove(prod.id)} className ="btn">Remove</button>
                       </div>
                   )) 
               }
           </div>
        </div>
    )
}

export default Cart
