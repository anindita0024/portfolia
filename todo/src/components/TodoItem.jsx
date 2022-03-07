import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';

function TodoItem({ todo }) {
    const [edit,setEdit] =useState(false);
    const [name,setName] = useState(todo.name);

    let dispatch = useDispatch();


    return (
        <div>

            <div className='row m-2 align-items-center' >
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>



                <div className='col'>
                    {edit ? <input type ='text' className='from-control' onChange={(e) => setName(e.target.value)} value={name} /> : <h4>{todo.name}</h4>}
                </div>




                <button onClick ={()=> {
                    console.log('update');
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name: name
                        }
                    ))
                    if (edit) {
                        setName(todo.name);
                    }
                    setEdit(! edit);
                }}className='btn btn-primary m-2'>{edit ? "Update" : "Edit" }</button>




                <button className='btn btn-danger m-2'onClick = {()=> dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
