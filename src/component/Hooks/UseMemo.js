import React,{useMemo, useState} from 'react'

function UseMemo() {
    let [value,setValue] = useState(0)
    let [name,setName] = useState('')

    let doubleValue = useMemo(()=>{
        return expensiveCalculation(value)
    },[value])
    

  return <>
    <h2>useMemo</h2>
    <p>It will always return a value</p>
    <div>
        <label>Name</label>
        <input type='text' onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
    </div>
    <div>
        <label>Age</label>
        <input type='number' onChange={(e)=>setValue(e.target.value)} placeholder='Number'/>
    </div>
    <div>Entered Name is {name} and Fake Age is {doubleValue}</div>

    <h2>useCallback</h2>
    <p>It will always return a function</p>
  </>
}

export default UseMemo


function expensiveCalculation(value)
{
    for(let i =0;i<1000000000;i++){}

    return value*2
}