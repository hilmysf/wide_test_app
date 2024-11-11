import { useEffect, useState } from "react"
import Navigation from "../components/Navigation";
import "../css/Todos.css";
const Todos = () => {

    const [todo, setTodo] = useState(null)

    async function fetchTodos() {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
        const json = await result.json();
        const data = json;
        setTodo(data)
    }
    useEffect(() => {
        fetchTodos();
    }, [])


    return <>
        <Navigation />
        <div className="container">
            <h1>{todo ? `Title: ${todo.title}` : "Loading...."}</h1>
            <h1>{todo ? `ID: ${todo.id}` : "Loading...."}</h1>
            <h1>{todo ? `Completed: ${todo.completed.toString()}` : "Loading...."}</h1>
            <h1>{todo ? `UserId: ${todo.userId}` : "Loading...."}</h1>
        </div>
    </>

}

export default Todos;