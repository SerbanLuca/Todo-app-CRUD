import React, {useState, useEffect} from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../firebase'
import { Button, Input } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


function Todo(props) {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
      }
    const handleClose = () => {
        setOpen(false)
    }

    return (
            <>
                <Modal
                    open={open}
                    onClose={e => setOpen(false)}
                    className='todo__modal'
                >
                    <h1>This is a modal</h1>
                </Modal> 
                <div className='app__todo'>
                    {props.todo.todo}
                    <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()}>
                        <DeleteIcon size='small'/>
                    </Button>
                    <button onClick={e => setOpen(true)}>Edit</button>
                </div>
            </>
    )
}

export default Todo
