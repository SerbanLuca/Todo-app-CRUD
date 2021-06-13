import { Button, Input } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="app">
      <form className='app__form'>
         <Input type='text' placeholder='Write to do'/>
         <Button type='submit' color="primary" variant="contained>ADD TO DO</Button>
      </form>
    </div>
  );
}

export default App;

