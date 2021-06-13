import React, {useState, useEffect} from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../firebase'
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


function Todo(props) {

    const [open, setOpen] = useState(false)
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

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
                
                >
                  <div style={modalStyle} className={classes.paper}>
                    <h1>This is a modal</h1>
                    <Input type='text'  />
                    <Button type='submit'>Add Changed Todo</Button>
                  </div>
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
