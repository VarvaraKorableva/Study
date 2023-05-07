import { useDispatch } from 'react-redux'
import {removeTodo, toggleTodoComplete} from '../store/todoSlice'

function TodoItem({id, text, completed}) {

    const dispath = useDispatch();

    const deleteTodo = () => {
      dispath(removeTodo({id}))
    }

    const toggleTodo = () => {
        dispath(toggleTodoComplete({id}))
      }

  return (
    <li className="app__todo" key={id}>
    <input className="app__todo-checkbox" type='checkbox' checked={completed} onChange={() => toggleTodo(id)}/>
    <span>{text}</span>
    <span className="app__todo-delete-btn" onClick={() => deleteTodo(id)}>&times;</span>
  </li>
  );
}

export default TodoItem;