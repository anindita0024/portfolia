import { axiosInstance } from '../../utils'
import React,{useContext, useState} from 'react'
import './write.css'
import { Context } from '../../context/Context';
export default function Write() {

    const [title,setTitle] = useState("");
    const [describtion,setDesribtion] = useState("");
    const [file,setFile] = useState(null);
    const {user} = useContext(Context);







    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            describtion,
        };

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;


            try {
                await axiosInstance.post("/upload", data)
            } catch (error) {
                
            }

        }


        try {
            const res = await axiosInstance.post("/posts", newPost)
            window.location.replace("/post/" + res.data._id)
        } catch (error) {
            
        }
        
    }







    return (
        <div className='write'>
            {file && (
                <img  className="writeImg" src={URL.createObjectURL(file)} alt=""/>
            )}
            
            <form className='writeFrom' onSubmit={handleSubmit}>
                <div className="writeGroup">
                    <label htmlFor="fileInput">
                    <i className=" writeIcon fas fa-plus"></i>
                    </label>

                    <input type='file' 
                    id ="fileInput" 
                    style ={{display:"none"}} 
                    onChange={e => setFile(e.target.files[0])}
                    />

                    <input type='text' 
                    placeholder='Title'
                     className="writeInput" 
                     autoFocus={true}
                     onChange ={e => setTitle(e.target.value)}
                     />
                </div>

                <div className="writeGroup">
                    <textarea 
                    placeholder="Tell your thoughts.." 
                    type="text" 
                    className="writeInput writeText"
                    onChange ={e => setDesribtion(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeBtn" type ="submit">Post</button>
            </form>
        </div>
    )
}
