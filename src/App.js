import logo from './logo.svg';
import './App.css';
import { Todo } from './Todo';
import { Clock } from './Clocl';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
         {/* <Todo/> */}
       <Clock/>
       <TodoList/>


    </div>
  );
}

export default App;
