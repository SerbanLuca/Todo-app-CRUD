import { Button, Input } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <form className='app__form'>
         <Input type='text' placeholder='Add to do'/>
         <Button type='submit'>ADD TO DO</Button>
      </form>
    </div>
  );
}

export default App;

