import React from 'react'
import './singlecard.css'

function Singlecard({ like, setLike, item }) {

    console.log(" item here" , like,item)
    return (
        <div className='single-card'>
            <div className="flip-card">
                <div className="flip-inner">
                    <div className="flip-front">
                        <img src={item.image} alt=""/>
                    </div>
                    
                        <div className="flip-back">
                            <h1>{item.name}</h1>
                            <p>{item.gender}</p>
                            <p>{item.species}</p>
                            <p>{item.status}</p>
                        </div>
                    
                </div>
                {like.includes(item) ? (
                   <button 
                   onClick ={() =>{setLike(like.filter((c)=> c.id !== item.id ))}} 
                   className = 'dislike-btn'>
                       Dislike</button>
                ): 

                <button 
                onClick ={() =>{setLike([...like, item])}}
                className ="like-btn"
                >like</button>

                }

            </div>
        </div>
    )
}

export default Singlecard
