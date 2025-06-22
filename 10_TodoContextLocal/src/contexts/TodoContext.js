import {useContext} from 'react';
import { createContext } from 'react';

export const TodoContext=createContext({
    todo:[{
        id:1,
        todo:"Learn React",
        completed:false
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    removeTodo: (id) => {},
    toggleCompleted: (id) => {},
});


export const useTodo =()=>{
    return useContext(TodoContext);}
  

export const TodoProvider=TodoContext.Provider;