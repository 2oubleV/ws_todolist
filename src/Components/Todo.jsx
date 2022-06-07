import React, {useState} from 'react';
import "./Todo.css"

function Todo(props) {
    const [isDone, setIsDone] = useState(false);

    return (
        <div className={"todo"}>
            <li key={props.key}>{props.text}</li>
            <label className={"box"}>
                <input type="checkbox" />
                <span className="checkmark"></span>
            </label>


            <button> <i className={"fa-solid fa-trash-can"}></i></button>
        </div>
    );
}

export default Todo;