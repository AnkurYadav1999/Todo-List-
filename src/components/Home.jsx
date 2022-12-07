import React,{useState,useEffect} from "react";
import "./Home.css";
import Task from "./Task";

const Home = () => {
  const initialState=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[]
  const [tasks,setTasks]=useState(initialState)
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  let present=new Date()
  let CurrentDate=present.getDate();
  let CurrentMonth=present.getMonth()<10?`0${present.getMonth()}`:`${present.getMonth()}`;
  let CurrentYear=present.getFullYear();

  let hours = present.getHours();
  let minutes = present.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;

  let taskDate=`${CurrentDate}/${CurrentMonth}/${CurrentYear}`
  let taskTime = `${hours}:${minutes} ${ampm}`;

  
  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])
  
  const submitHandler=(e)=>{
      e.preventDefault()
      setTasks([...tasks,{title,description}])
      setTitle("")
      setDescription("")
      }

  const deleteTask=(index)=>{
     const filterdArray=tasks.filter((val,i)=>{
       return i!==index
     })
     setTasks(filterdArray)
  }

  return (
    <div className="main-container">
      <div className="container">
        <h3>Add Your Task</h3>
        <form onSubmit={submitHandler}>
          <input 
          type="text" 
          placeholder="enter task heading" 
          value={title} 
          onChange={(e)=>setTitle(e.target.value)} 
          />
          <textarea 
          placeholder="enter task details" 
          value={description} 
          onChange={(e)=>setDescription(e.target.value)}
          />
          <button type="submit" disabled={title==""}>Add Task</button>
        </form>
      </div>

      <div className="task-collection">
       {tasks.map((task,index)=>{
        return <Task 
        key={index} 
        title={task.title} 
        description={task.description}
        deleteTask={deleteTask} 
        index={index}
        Tdate={taskDate}
        time={taskTime}
        />
       })}
      </div>  
    </div>
  );
};

export default Home;
