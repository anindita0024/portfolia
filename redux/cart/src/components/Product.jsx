import React,{useState, useEffect}  from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Product = () => {
    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();



    useEffect(() => {
        const fatchItems = async () =>{
            const res =await fetch("https://fakestoreapi.com/products")
            const data = await res.json()
            setProducts(data)
            
        }
        fatchItems()
    }, [])

    const handleAdd = (prod) =>{
        dispatch(add(prod))
    }


    return (
        <div className  ="productsWrapper">
            {
                products.map((prod) =>(
                    <div className="card" key = {prod.id}>
                        <img src={prod.image} alt="" />
                        <h4>{prod.title}</h4>
                        <h5>{prod.price}</h5>
                        <button onClick = {() => handleAdd(prod)} className="btn">add to cart</button>
                    </div>
                )) 
            }
        </div>
    )
}

export default Product
