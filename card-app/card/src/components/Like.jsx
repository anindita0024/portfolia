import React from 'react'
import Singlecard from './Singlecard'
import './like.css'

function Like({like,setLike}) {
    return (
        <div className ="like-item">
            {like.map(item =>(
                <Singlecard item ={item} like={like} setLike ={setLike}/>
            ))}
        </div>
    )
}

export default Like
