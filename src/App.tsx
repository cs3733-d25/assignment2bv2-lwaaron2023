import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Todo} from "./types.ts"
import {TodoForm} from "./todo-form.tsx";
import {TodoList} from "./todo-list.tsx";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>([]); //<> tells useState that the type of array is Todo
    const generatedKeys = new Set();
    const maxTasks = 1000;
    const [curTasks, setCurTasks] = useState(0);
    function handleAdd(description: string){
        if(curTasks < maxTasks) {
            const tempID = generateID();
            const newTodo: Todo = {
                id: tempID,
                description: description,
                completed: false
            }
            setCurTasks(curTasks + 1);
            setTodos([...todos, newTodo])
            generatedKeys.add(tempID);
        }
    }

    function generateID(){
        let temp = Math.random()*maxTasks
        while(generatedKeys.has(temp)){
            if(temp < maxTasks-1){
                temp++
            }
            else{
                temp = 0
            }
        }
        return temp
    }

    function handleDelete(id: number){
        if(curTasks > 0) {
            setTodos(todos.filter(todo => todo.id !== id))
            setCurTasks(curTasks - 1)
            generatedKeys.delete(id)
        }
    }

    function handleToggle(id: number){
        setTodos(todos.map(todo =>
            todo.id === id ? {... todo, completed : !todo.completed} : todo))
    }

    return (
    <div className={"app"} id = "root">
        <div className={"mainContainer"}>
            <h1> Simple Todo App</h1>
            <TodoForm onAdd={handleAdd}></TodoForm>
            <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete}></TodoList>
        </div>
    </div>
    )
}


