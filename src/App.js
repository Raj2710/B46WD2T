import React,{useState,useEffect} from "react";
import ToDo from "./ToDo";
import { useSelector, useDispatch } from 'react-redux'
import {create,clear} from './toDoSlice'
function App() {
  let [task,setTask] = useState("")
  let dispatch = useDispatch()
  let todo = useSelector(state=>state.todo.task)
  let [data,setData] = useState([])
  let [currentPage,setCurrentPage]=useState("All")

  let handleClick = ()=>{
      dispatch(create({
        name:task,
        isDone:false,
      }))
      setTask("")
  }

  let filterData = ()=>{
    let filteredData = []
    switch(currentPage){
      case "All":{
        filteredData = [...todo]
        setData(filteredData.reverse())
        break;
      }
      case "Todo":{
        filteredData = todo.filter((e)=>!e.isDone)
        setData(filteredData.reverse())
        break;
      }
      case "Completed":{
        filteredData = todo.filter((e)=>e.isDone)
        setData(filteredData.reverse())
        break;
      }
      default:{
        filteredData = [...todo]
        setData(filteredData.reverse())
        break;
      }
    }
  }
/*eslint-disable*/
  useEffect(()=>{
    filterData()
  },[currentPage,todo])
/*eslint-enable*/

  return <div className="main-wrapper">
  <h1>To Do App</h1>
  <div>
    <input type="text" placeholder="Add Todo" className="add-todo" value={task} onChange={(e)=>setTask(e.target.value)}/>
    <button className="add-todo-button" onClick={()=>handleClick()}>Add</button>
  </div>
  <div className="section-wrapper">
    <ul>
      <li className={currentPage==="All"?"active":""} onClick={()=>setCurrentPage("All")}>All</li>
      <li className={currentPage==="Todo"?"active":""} onClick={()=>setCurrentPage("Todo")}>To do</li>
      <li className={currentPage==="Completed"?"active":""} onClick={()=>setCurrentPage("Completed")}>Completed</li>
    </ul>
  </div>
  <div>
    <ToDo data={data}/>
  </div>
  <button className="add-todo-button" onClick={()=>{
            dispatch(clear())
        }}>Clear</button>
  </div>
}

export default App;
