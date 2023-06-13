import React from 'react'

function CheckBox({id,status,onStatusChange}){
    return <>
          <label className="switch">
            <input type="checkbox" checked={status} onChange={()=>onStatusChange(id,!status)}/>
            <span className="slider round"></span>
          </label>
    </>
  }

export default CheckBox