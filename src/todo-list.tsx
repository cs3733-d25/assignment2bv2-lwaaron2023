import {Todo} from "./types.ts";
import {createPopUp} from "./pop-up.tsx";


type TodoItemsProps = {
    todos: Todo[]
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export function TodoList({onDelete, onToggle, todos}: TodoItemsProps){

    function setUpPopUp(){
        const e = document.getElementById("root")
        //document.writeln("Trying to create pop-up")
        if(e!=null){
            if(e.firstChild != null) {
                //document.writeln("Creating pop-up")
                createPopUp({parent: e, removed: e.removeChild(e.firstChild)})
            }
        }
    }

    return (
        <ul className={"todo-list"}>
            {/* for every todo, render a list item */}
            {todos.map(todo => (
                // they key attribute tells react which element to re-render.
                // your code will often work without it, but sometimes you will get very
                // nasty bugs if you do not include it. the key must be unique
                <li className={todo.completed ? "completed" : ""} key={todo.id}>
                    <span onClick={setUpPopUp}>{todo.description}</span>
                    <button onClick={() => onToggle(todo.id)}>O</button>
                    <button onClick={() => onDelete(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    )
}