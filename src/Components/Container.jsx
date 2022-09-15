import React, {useState} from 'react';
import Todo from "./Todo";
import "./Container.css";

function Container() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit =(e)=> {
        e.preventDefault();
        // setTodo(todo =>({...todo, input}));
        setTodo([...todo, input]);
        setInput('');
    }

    const handleRemove = (id) => {
        const newTodo = [...todo]
        newTodo.splice(id, 1)
        setTodo(newTodo)
    }

    return (
        <div className={"container"}>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="input" value={input} onChange={event => setInput(event.target.value)}/>
                {input ? <button className={"btn-add"} type={"submit"}> <i className="fa-solid fa-plus"></i> </button> : <button type={"submit"} className={"btn-add"} disabled>  <i className="fa-solid fa-plus"></i> </button>}
            </form>
            <ul>
                {todo.map((n, i) => <Todo text={n} key={i} handleRemove={handleRemove}/>)}
                {/*{todo && todo.map((n, i) => <li key={i}>{n}</li> )}*/}
            </ul>
        </div>
    );
}


export default Container;