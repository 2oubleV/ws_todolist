import React, {useState} from 'react';
import "./Todo.css"

function Todo(props) {
    const [isDone, setIsDone] = useState(false);

    return (
        <div className={"todo"}>
            <input  className="checkmark" type="checkbox" />

            <li key={props.key}>{props.text}</li>
                <button onClick={() => props.handleRemove(props.key)}> <i className={"fa-solid fa-trash-can"}></i></button>
        </div>
    );
}

export default Todo;