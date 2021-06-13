import React from 'react'
import './Todo.css'

function Todo(props) {
    return (
        <div className='app__todo'>
            {props.text}
            
        </div>
    )
}

export default Todo
