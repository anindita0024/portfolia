import React,{useState} from 'react'

function Assign() {
    const[number1,setNumber1]=useState()
    const number2=20;
    const [total,setTotal]=useState(number1+number2)
    const [subtraction,setSubtraction]=useState(number1-number2);

    function add(){
        setTotal(number1+number2)
    }
    function sub(){
        setSubtraction(number1-number2)
    }


    return (
        <div className =" App">
            <h1 className ="my-5">Addition And Subtraction </h1>

            <div className = "number-input  ">
                <input type ="number" className="form-control" value={number1} onChange={e => setNumber1 (+e.target.value)}/>
             <div className="input-group ">
                 <button className="btn " onClick={add} type = "button" id = "button-addon1 btn">Addition</button>
                 <input type="number" className="from-control" placeholder="" value={total} aria-label="Example text with  button addon" aria-describedby ="button-addon1"/>
             </div>  
             <div className="input-group mb-3">
                 <button className="btn  " onClick={sub}  type="button" id ="button-addon1 btn">Subtraction</button>
                 <input type ="number" clasName="from-control" placeholder="" value={subtraction} aria-label ="Example text with button addon" aria-describedby="buton-addon1"/>




            </div> 
            </div>
            
            
        </div>
    )
}

export default Assign
