
import React,{ useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Input from './Component/Input';




function App() {
  const [customername,setCustomerName]= useState([

    
  ])
  const [totaltip, setTip] = useState([0])

    const AddCustomerName=(link)=>{
      setCustomerName([...customername,link])
    }

    const AddTip=(link)=>{
      setTip([...totaltip,link]);
      console.log(setTip);
      
    }
    console.log(AddTip);
  return (
    <>
    <div className="container  my-2 banner">
      <div className ="inner">
    <Header/>
    <Input customername={customername} AddCustomerName={AddCustomerName} totaltip={totaltip} AddTip={AddTip} />
    <Footer/>
    </div>
    </div>
   
    
    </>
  );
}

export default App;
