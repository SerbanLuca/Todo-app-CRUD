import React, {useState, useEffect} from 'react'
import { Button, Input } from '@material-ui/core';
import './App.css';

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="app">
      <form className='app__form'>
         <Input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Write to do'/>
         <Button type='submit' onClick={addTodo} color="primary" variant="contained" size='small'>ADD TO DO</Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <ul>{todo}</ul>
        ))}
      </ul>
    </div>
  );
}

export default App;

