
import './App.css';
import {useState, useEffect} from 'react'
import Form from './component/form';
import ToDoList from './component/ToDoList';

function App() {
  const [inputTxt, setInputTxt] = useState('')
  const [todos, setToDose] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTd, setFilteredTd] = useState([])
  useEffect(()=>{
    FilterHn()
  },[todos, status])
  const FilterHn = () =>{
    switch(status){
        case "completed":
          setFilteredTd(todos.filter((todo)=>todo.completed === true))
          break
        case "uncompleted":
          setFilteredTd(todos.filter((todo)=>todo.completed === false)) 
          break
        default:
          setFilteredTd(todos)
          break     
    }
  }
  
  return (
    <div className="App">
      <header>

              <h1>To Do List</h1>
      </header>
      <Form todos={todos} inputTxt={inputTxt} setStatus={setStatus}
       setToDose={setToDose} setInputTxt={setInputTxt} />
     
     
     
     
      <ToDoList todos={todos} setToDose={setToDose} 
      
      filteredTd={filteredTd}
      />

    </div>
  );
}

export default App;
