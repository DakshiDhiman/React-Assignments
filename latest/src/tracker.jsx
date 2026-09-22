import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./tracker.css"
export default function Tracker(){
  let [task,setTask] = useState([{ta:"20 DSA Questions",id:uuidv4(),isdone:false}])
  let [newtask,setnewTask] = useState("") 


  let addtask = () => {
    setTask([...task,{ta:newtask,id:uuidv4(),isdone:false}])
    setnewTask("")
  }
 let deltask = (id)=>{
    setTask(task.filter((tasks)=>(tasks.id !== id)))
 }

  let markall = () => {
       setTask(task.map((tasks)=>{
        return{...tasks,isdone:true}
       }))
    }
    let mark = (id)=>{
        setTask(task.map((tasks)=>{
            if(tasks.id == id){
                return{...tasks,isdone:true}
            } 
            else{
                return tasks
            }
        }))
    }
    

        return <div className='container'>
            <h1>Interview Preparation Tracker</h1>
            <hr></hr>
            <h3>Add Task to Crack the interview</h3>
            <input type='text' placeholder='Enter your Task' value={newtask} onChange={(e) =>setnewTask(e.target.value)}></input>
                <button className="add-btn" onClick={addtask}> Add A task</button>
                <hr></hr>
                <ul>
                    {task.map((tasks)=>(
                        <li key={tasks.id}>
                        <span style={tasks.isdone ? {textDecoration:"line-through"}:null}> {tasks.ta}</span>
                        <button className="delete-btn" onClick={()=>deltask(tasks.id)}>Remove Task</button>
                        <button className='add-btn' onClick={()=>mark(tasks.id)}>Mark As Done</button></li>
                    ))}
                </ul>
                <button className="all-btn" onClick={markall}>Mark As All Done</button>
                </div> 
    }