import React from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';


function Todo(props) {
    return (
        <div className='app__todo'>
            {props.todo.todo}
            <DeleteIcon />
        </div>
    )
}

export default Todo
