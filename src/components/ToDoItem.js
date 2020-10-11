import React from 'react';


function ToDoItem(props) {
    const handleOnClick = () => {
        props.deleteItem(props.todo)
    }
    return (
        <div className="to-do-item">
            <h1>{props.todo.title}</h1>
            <div>{props.todo.content}</div>
            <button onClick={handleOnClick}>Delete</button>
        </div>
    )
}

export default ToDoItem