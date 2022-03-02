import React, { useContext , useState} from 'react'
import './sitting.css'
import Sidebar from '../../components/sidebar/Sidebar';
import { axiosInstance } from '../../utils'
import { Context } from '../../context/Context'

export default function Sitting() {

    const {user,dispatch} = useContext(Context)
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [done,setDone] = useState(false);
    const publicFold = "https://fullblogg.herokuapp.com/image/";



////.....for update user photo, name. etc.../////

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updateUser = {
            userId: user._id,
            username,
            email,password
        };

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updateUser.profilePicture = filename;


            try {
                await axiosInstance.post("/upload", data);
            } catch (error) {
                
            }

        }

        try {
             const res = await axiosInstance.put("/users/" + user._id, updateUser);
             setDone(true);
             dispatch({type:"UPDATE_SUCCESSFULL", payload:res.data});

        } catch (error) {
            dispatch({type:"UPDATE_FAILURE",});
        }
        
    }









    return (
        <div className='sitting'>
            <div className="sittingWarraper">
                <div className="sittingTitle">
                    <span className="sittingUpdate">Update your account</span>
                    <span className="sittingDelete">Delete account</span>
                </div>

                <form className="sittingForm" onSubmit={handleSubmit}>
                    
                    <label>Profile picture</label>
                    <div className="sittingProfile">

                        <img 
                        src={file ? URL.createObjectURL(file) : publicFold+ user.profilePicture} 
                        alt=""
                         />

                        <label htmlFor="fileInput">
                        <i className="sittingIcon fas fa-user-circle"></i>
                        </label>

                        <input 
                        type="file" 
                        id ='fileInput' 
                        style={{display:"none"}}
                        onChange={e => setFile(e.target.files[0])}
                        />

                    </div>
                    <label>Username</label>

                    <input 
                    type="text"
                     placeholder={user.username}
                     onChange={e => setUsername(e.target.value)}
                     />

                    <label>Email</label>

                    <input 
                    type="email" 
                    placeholder={user.email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <label>Passwoard</label>

                    <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button className="sittingBtn" type = "submit">Update</button>
                    {done && <span style= {{color:"navy", textAlign:"center" , marginTop:"25px"}} >Profile Update!</span>}
                </form>
            </div>
            <Sidebar/>
            
        </div>
    )
}
