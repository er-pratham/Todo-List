import React , {useState} from 'react';
import './App.css';
import TasksList from './Components/TasksList';

function App() {
  const [task,setTask]=useState([]);
  const[warn,setWarn]=useState("");
  const [input_data,setInput_data]=useState("");
// Function For Input Changes 
  const input_change=(event)=>{
    setInput_data(event.target.value);
    setWarn("");
  }
  // Function for add task in task array (local Memory)
  const addTask=()=>
  {
    let non_space_data=0;
    for(let i=0;i<input_data.length;i++)
    {
      if(input_data[i]!==" ")
      {
        non_space_data++;
      }
    }
    if(input_data.length>0 && non_space_data>0)
    {
    setTask((oldData)=>
    {
      return [...oldData,input_data]
      
    })
    setInput_data("");
    }
    else
    {
      setWarn("Empty tasks can not be added!");
      setInput_data("");
    }
    
  
  }
  // Function For Clear All Tasks
  const clearAll=()=>
  {
    setTask([]);
  }
  // Function for delete a particular Index
   const deleteTask=( taskid)=>{
    console.log("Deleted!")
    console.log(taskid);
    setTask((prevData)=>{
     return prevData.filter((elementData,elementIndex)=>{
        return taskid!==elementIndex
      })
    })
  }

  return (
    <div className="App">
    <div className="container">
      <h1>ToDo List</h1>
      <div className="warn"><h4>{warn}</h4></div>
      <div className="input">
        <input type="text" name="" id="" autoComplete='off' value={input_data} placeholder='Add Your New Task' onChange={input_change}/>
        <button onClick={addTask}>+</button>
      </div>
      <div className="displayTasks">
      <ul>
          {task.map((eachTask,index)=>{
            return <TasksList comp_data={eachTask} key={index} id={index} deletefunc={deleteTask}/>
          })}         
      </ul>
      </div>
      <div className="taskindex">
      <span>You have {task.length} pending task</span>
      <button onClick={clearAll}>Clear All</button>
      </div>
    </div>
    <footer>
      ©️ Todo List Web App. All rights reserved by Pratham Saxena.
    </footer>
    </div>
  );
}

export default App;
