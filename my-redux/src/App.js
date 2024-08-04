import './App.css';
import AddTask from './components/AddTask.js';
import ListTask from './components/ListTask.js';
import { useSelector } from "react-redux";


//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const tasks = useSelector(state => state.taskReducers.tasks)
    console.log(tasks);
  return (
    <div className="App">
      <h1> Checkpoint Redux</h1>
      <AddTask />
      <ListTask tasks={tasks} />
      
      </div>
  
  );
}

export default App;
