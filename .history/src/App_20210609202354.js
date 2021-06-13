import React, {useState, useEffect} from 'react'
import { Button, Input } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import './App.css';
import Todo from './components/Todo';
import {db} from './firebase'
import firebase from 'firebase'
import DeleteIcon from '@material-ui/icons/Delete';
import Modal from '@material-ui/core/Modal';



function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [open, setOpen] = useState(false)


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


  return (
    <div className="app">
      <h1 className='app__header'>Best To Do App</h1>
      <button onClick={e => setOpen(true)} className='todo__button'>   Edit your todo   </button>
         <Modal
            open={open}
            onClose={e => setOpen(false)}
          >
            <form className='app__form'>
              <Input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Write to do'/>
              <Button type='submit' disabled={!input} onClick={addTodo} color="primary" variant="contained" size='small'>ADD TO DO</Button>
            </form>
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

