import {FormEvent, useState} from "react";

type AddTodoProps = {
    onAdd: (description: string) => void,
}

export function TodoForm({onAdd}: AddTodoProps) {
    // the state of the text inside the input element
    const [text, setText] = useState("")

    function handleAdd(e: FormEvent<HTMLFormElement>){
        e.preventDefault(); // prevents default behavior of a form, which is to refresh the page
        onAdd(text) // call the handleAdd function in app.tsx
        setText("") // clears the input field
    }

    return (
        <form className={"todo-form"} onSubmit={handleAdd}>
            <input
                // if we didn't do this, the text inside the input field would never clear when we submit the form
                value={text}
                // e.target.value is where the contents of the input element is
                onChange={(e) => setText(e.target.value)}
                placeholder={"Add a new task..."}
                required={true}
            />
            {/* type="submit" is how the parent form element knows to trigger the onSubmit callback*/}
            <button type="submit">Add</button>
        </form>
    )
}