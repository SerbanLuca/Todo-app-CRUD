import React, {useState, useEffect} from 'react'
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {db} from '../firebase'
import { Button, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


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
    const [input, setInput] = useState(props.todo.todo)
    const [value, onChange] = useState(props.todo.timestamp);

    const handleOpen = () => {
        setOpen(true)
      }
    const handleClose = () => {
        setOpen(false)
    }

    const updateTodo = () => {
      db.collection('todos').doc(props.todo.id).set({
        todo: input,
        timestamp: value
      },{merge: true})
      setOpen(false)
    }

    return (
            <>
                <Modal
                    open={open}
                    onClose={e => setOpen(false)}
                
                >
                  <div style={modalStyle} className={classes.paper}>
                    <h1>Change your todo</h1>
                    <Input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder={props.todo.todo} />
                    <Button type='submit' disabled={!input} onClick={updateTodo} color="primary" variant="contained" size='small'>Add Changed Todo</Button>
                    <Calendar /*onClickDay={(value) => alert('New date: ', value)}*/ onChange={onChange} value={value}/>
                  </div>
                </Modal> 
                <div className='todo__todo'>
                    {props.todo.todo}
                    <Button onClick={e => db.collection('todos').doc(props.todo.id).delete()}>
                        <DeleteIcon size='small'/>
                    </Button>
                    <button onClick={e => setOpen(true)} className='todo__button'>   Edit your todo   </button>
                    <h5 className='todo__date'>Deadline: {const x = 1+1}</h5>
                </div>
            </>
    )
}

export default Todo
