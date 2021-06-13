import React from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../firebase'
import { Button, Input } from '@material-ui/core';




function Todo(props) {
    return (
        <div className='app__todo'>
            {props.todo.todo}
            <Button onClick={e => db.collection('todos').doc(props.todos.id).delete()}>Delete</Button>
        </div>
    )
}

export default Todo
