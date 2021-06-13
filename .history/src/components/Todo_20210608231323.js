import React from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../firebase'
import { Button, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';




function Todo(props) {

    const handleOpen = () => {
        setOpen(true)
      }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className='app__todo'>
            {props.todo.todo}
            <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()}>
                <DeleteIcon size='small'/>
            </Button>
            <button type="button" onClick={handleOpen}>
                Open Modal
              </button>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <h1>This is a modal</h1>
              </Modal>
        </div>
    )
}

export default Todo
