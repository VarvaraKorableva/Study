import {useState} from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import {addTodo} from './store/todoSlice'

import TodoList from './components/TodoList'
import InputField from './components/InputField'

function App() {

  const [text, setText] = useState('')

  const dispath = useDispatch();

  const addTask = () => {
    dispath(addTodo({text}))
    setText('')
  }

  return (
    <div className="App">

      <InputField
        handleInput={setText}
        text={text}
      />
      <TodoList/>

    </div>
  );
}

export default App;
