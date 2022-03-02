import { axiosInstance } from '../../utils'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';


import './singlepost.css'

export default function Singlepost() {


    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const publicFold = "https://fullblogg.herokuapp.com/image/"
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [describtion, setDecribtion] = useState("");
    const [updateMode, setUpdateMode] = useState(false);




//////for deleteclick func ////
    const handleDelete = async () => {

        try {
            await axiosInstance.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (error) {

        }

    }

 //....for update click func..////  
     const handleUpdate = async () =>{

        try {
            await axiosInstance.put(`/posts/${post._id}`, {
                  username: user.username, title, describtion ,
            });
            setUpdateMode(false)
            // window.location.reload()
        } catch (error) {

        }

     }


    useEffect(() => {

        const getPost = async () => {
            const res = await axiosInstance.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDecribtion(res.data.describtion);

        }

        getPost()

    }, [path])




    return (
        <div className='singlepost'>
            <div className="singlepostWarraper">
                {post.photo && (

                    <img
                        className="singlepostImg"
                        src={publicFold + post.photo}   ////////......for single post image upload...///
                        alt="" />

                )}  

                {/* ////////......for text update...///            */}


                {
                    updateMode ? (<input  
                        className="singlepostInput" 
                        type="text" 
                        value={title} 
                        autoFocus
                        onChange={(e) =>setTitle(e.target.value)}
                        />) : (

                        <h1 className="singlepostTitle">       
                            {title}
                            {post.username === user?.username && (

                                <div className="singlepostEdit">
                                    <i className=" singlepostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className=" singlepostIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>

                            )}

                        </h1>

                    )
                }


                <div className="singlepostInfo">
                    <span className="singlepostAuthor">Author:
                        <Link to={`/?user=${post.username}`} style={{ textDecoration: "none", color: "inherit" }}>

                            <b>{post.username}</b>

                        </Link>

                    </span>

                    <span className="singlepostDate"> {new Date(post.createdAt).toDateString()} </span>
                </div>

                {/* .....for update text..... */}

                {updateMode ? 
                (<textarea 
                    className="singlepostText" 
                    value={describtion} 
                    onChange={(e) =>setDecribtion(e.target.value)}
                    /> 
                    ):(
                    <p className='singlepostDecribe'> {describtion} </p>
                )
                
                }

                {updateMode && (

                   <button className="singlepostBtn" onClick={handleUpdate}>Update</button>  

                )}
                
                
            </div>
        </div>
    )
}
