import React from 'react'
import { useDispatch } from 'react-redux'
import {toggle} from './toDoSlice'
function ToDo({data}) {
    let dispatch = useDispatch()
  return <div className='todo-list-wrapper'>
        <ul className='todo-ul'>
            {
                data.map((e,i)=>{
                    return <li key={i}> 
                        <input type='checkbox' checked={e.isDone} readOnly onClick={()=>{
                            dispatch(toggle({id:e.id}))
                        }}/> 
                        {e.isDone?<s>{e.name}</s>:<>{e.name}</>}
                        </li>
                })
            }
        </ul>
    </div>
}

export default ToDo