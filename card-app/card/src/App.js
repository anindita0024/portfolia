import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Like from './components/Like';



function App() {
  const [like,setLike] =useState([])

  return (
    <div className="App">
      

      <Router>
         <Navbar like ={like}/>
          
         <Routes>
           <Route path = '/' element = {<Home results like={like} setLike ={setLike} />}/>
           <Route path = '/like' element = {<Like like ={like} setLike ={setLike}/>}/>

         </Routes>
      </Router>
    
      
      
    </div>
  );
}

export default App;
