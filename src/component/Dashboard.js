import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from './Card'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function Dashboard({users,setUsers}) {
    let [data,setData] = useState([{
        title:"Earnings (Monthly)",
        value:"$5000",
        color:"primary",
        icon:"fa-calendar",
        isProgress:false
    },
    {
        title:"Earnings (Annual)",
        value:"$60000",
        color:"success",
        icon:"fa-dollar-sign",
        isProgress:false
    },
    {
        title:"Task",
        value:"90",
        color:"info",
        icon:"fa-clipboard-list",
        isProgress:true
    },
    {
        title:"Pending Request",
        value:"18",
        color:"warning",
        icon:"fa-comments",
        isProgress:false
    }
])
    let navigate = useNavigate()
    // let handleDelete = (i)=>{
    //     let newArray = [...users]
    //     newArray.splice(i,1)
    //     setUsers(newArray)
    // }
  return <>
         <div id="content-wrapper" className="d-flex flex-column">
<div id="content">
    <div className="container-fluid">

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>

        <div className="row">
            {
                data.map((e,i)=>{
                    return <Card key={i}
                    input={e}
                    value = {10}
                    />
                })
            }
        </div>
        <div className='container-fluid'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
         {
            users.map((e,i)=>{
                return <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.dob}</td>
                    <td>
                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}>Edit</Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>{
                            let newArray = [...users]
                            newArray.splice(i,1)
                            setUsers(newArray)
                        }}>Delete</Button>
                    </td>
                </tr>
            })
         }
      </tbody>
    </Table>
        </div>
    </div>

</div>
</div>
  </>
}

export default Dashboard