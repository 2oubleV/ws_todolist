import React, {useState} from 'react';
import "./Todo.css"

function Todo(props) {
    const [isDone, setIsDone] = useState(false);

    return (
        <div className={"todo"}>
            <li key={props.key}>{props.text}</li>
            <label className={"box"}>
                <input  className="checkmark" type="checkbox" />
                {/*<span></span>*/}
            </label>
            <button onClick={() => props.handleRemove(props.key)}> <i className={"fa-solid fa-trash-can"}></i></button>
        </div>
    );
}

export default Todo;