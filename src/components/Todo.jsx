import React from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

const Todo = ()=>{
    return(
        <div>
            <TodoInput />
            <TodoItem />
        </div>
    )
}

export {Todo};