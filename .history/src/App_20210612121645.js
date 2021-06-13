import React, {useState, useEffect} from 'react'
import { Button, Input } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import './App.css';
import Todo from './components/Todo';
import {db} from './firebase'
import firebase from 'firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
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

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [date, setDate] = useState(new Date());


  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const onChange = () => {
    setDate(date)
  }

  return (
    <div className="app">
      <h1 className='app__header'>Best To Do App</h1>
      <button onClick={e => setOpen(true)} className='app__button'>ADD YOUR TODO</button>
         <Modal
            open={open}
            onClose={e => setOpen(false)}
          >
            <div style={modalStyle} className={classes.paper}>
              <form className='app__form'>
                <h1 className='app__headerModal'>Add todo</h1>
                <Input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Write to do'/>
                <Button type='submit' disabled={!input} onClick={addTodo} color="primary" variant="contained" size='small'>ADD TO DO</Button>
                <Calendar onClick={(date) => alert('New date: ', date)} value={date}/>
                {console.log(date)}
                {date.toString()}
              </form>
            </div>
          </Modal>
      <ul className='app__list'>
        {todos.map((todo) => (
          <>
            <Todo todo={todo}/>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;

