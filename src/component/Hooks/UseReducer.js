import React,{useReducer, useState} from 'react'
import { Button } from 'react-bootstrap'
const initialState = {
    count:0,
    name:""
}
const actions = {
    increment:'INC',
    decrement:'DEC',
    changeName:'name'
}

function reducer(state,action){
    switch(action.type)
    {
        case actions.increment:return {
                                ...state,
                                count:state.count+1
                                }
                    
        case actions.decrement:return {
                                ...state,
                                count:state.count-1
                                }
        case actions.changeName:return{
            ...state,
            name:action.payload.name
        }
    }
}
function UseReducer() {
    let [state,dispatch] = useReducer(reducer,initialState)

  return <>
    <h2>useReducer</h2>
    <div style={{display:"flex"}}>
        <Button variant='primary' onClick={()=>dispatch({type:actions.decrement})}>-</Button>
        <div style={{margin:"10px"}}>{state.count}</div>
        <Button variant='primary' onClick={()=>dispatch({type:actions.increment})}>+</Button>
    </div>
    <div>
        <input type='text' placeholder='Name' onChange={(e)=>{
            dispatch({
                type:actions.changeName,
                payload:{
                    name:e.target.value
                }
            })
        }}/>
    </div>
    {state.name?`The entered Name is ${state.name}`:<></>}
  </>
}

export default UseReducer