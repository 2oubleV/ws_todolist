import React from 'react';

function Todo(props) {
    return (
        <>
            <li key={props.key}>{props.text}</li>
        </>
    );
}

export default Todo;