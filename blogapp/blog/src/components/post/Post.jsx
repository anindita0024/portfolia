import React from 'react'
import {Link} from 'react-router-dom';
import "./post.css"

export const Post = ({post}) => {

    const publicFold = "https://fullblogg.herokuapp.com/image/"


    return (
        <div className ="post">
            {post.photo && (

                   <img  className ="postImg"src ={publicFold + post.photo} alt =""/>

            )}
            
            <div className="postInfo">
                <div className="postCats">

                    {post.catagories.map((c) =>(

                         <span className="postCat">{c.name}</span>

                    ))}

                </div>

                <Link to = {`/post/${post._id}`}  style={{textDecoration:"none",color:"inherit"}}>

                <span className="postTitle">{post.title}</span>

                </Link>
                
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>

            </div>

            <p className="postDescribtion">{post.describtion}</p>
        </div>
    )
}
