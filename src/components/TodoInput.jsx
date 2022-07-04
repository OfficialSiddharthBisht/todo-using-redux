import React from "react";
import {getTodos} from "../redux/action";
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid";


const TodoInput = ()=>{
    const [input , setInput] = React.useState("");
    const dispatch = useDispatch();

    const getAllTodo =()=>{
        fetch(`http://localhost:8080/todos`)
        .then((response)=>{
            response.json();
        })
        .then((response)=>{
            dispatch(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleAdd=()=>
    {
        let payload={
            title:input,
            status:false,
            id:uuid()
        }
        fetch(`http://localhost:8080/todos`,{
            method:'POST',
            body:JSON.stringify(payload),
            headers:{"Content-type":"Application/json"}
        })
        getAllTodo();
       
        setInput("");
    }

    return(
        <>
            <h1>Add Todo</h1>
            <input type = "text"
                value = {input}
                placeholder = "Todo Add"
                onChange={(event)=>{
                    setInput(event.target.value)
                }} />
            <button onClick={handleAdd}>Add</button>
        </>
    )
}


export {TodoInput};