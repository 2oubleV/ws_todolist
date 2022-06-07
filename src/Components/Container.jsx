import React, {useState} from 'react';
import Todo from "./Todo";

function Container() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('')

    const handleSubmit =(e)=> {
        e.preventDefault();
        // const {target}  = e;
        // setTodo(todo =>({...todo, input}));
        setTodo([...todo, input]);
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={event => {
                    setInput(event.target.value)
                    console.log(input)
                }}/>
                <button type={"submit"}> Ajouter </button>
            </form>
            <ul>
                {/*{todo.map((n, i) => <Todo text={n} key={i}/> )}*/}
                {todo && todo.map((n, i) => <li key={i}>{n}</li> )}
            </ul>
        </div>
    );
}


export default Container;