import {useContext} from 'react';
import { createContext } from 'react';

export const TodoContext=createContext({
    todo:[{
        id:1,
        todo:"Sample Todo",
        completed:false
    }],
    addTodo:(todo,id)=>{},
    updateTodo:(todo,id)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
});


export const useTodo =()=>{
    return useContext(TodoContext);}
  

export const TodoProvider=TodoContext.Provider;