import React, { useId } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function Hooks() {
    let hooks = [
        {
            link:'useref',
            title:"UseRef"
        },
        {
            link:'usememo',
            title:"UseMemo"
        },
        {
            link:'usereducer',
            title:"UseReducer"
        }
    ]

  return <div style={{display:"flex",flexDirection:"column"}}>
    <h3>Hooks in React</h3>
    <div>
        <ul>
            {
                hooks.map((e,i)=>{
                    return <RenderList link={e.link} title={e.title}/>
                })
            }
        </ul>
    </div>
    <div className='container-fluid'>
        <Outlet/>
    </div>
  </div>
}

export default Hooks


function RenderList({link,title}){
    let navigate = useNavigate()
    let listItemId = useId()
    return <li onClick={()=>navigate(`${link}`)} style={{cursor:"pointer"}} id={listItemId}>
        {title}</li>
}