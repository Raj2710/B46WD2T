import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { API_URL } from '../index';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import CheckBox from './common/CheckBox';
import axios from 'axios';

function ManageBlogs() {
  let [blogs,setBlogs] = useState([])

  let getData = async ()=>{
    // let res = await fetch(`${API_URL}`)
    // let data = await res.json()
    // setBlogs(data)
    try {
      let res = await axios.get(`${API_URL}`)
      if(res.status===200)
      {
        setBlogs(res.data)
        // toast.success("Blogs fetched Successfully!")
      }
    } catch (error) {
      alert(error)
    } 
  }

  let handleDelete = async(id)=>{
    try {
      let res = await axios.delete(`${API_URL}/${id}`)
      if(res.status===200)
      {
        getData()
      }
    } catch (error) {
      alert(error)
    }
  }

  let handleStatusChange = async (id,status)=>{
    try {
      let res = await axios.put(`${API_URL}/${id}`,{
        active_flag:status
      })
      if(res.status===200)
      {
        getData()
      }
    } catch (error) {
      alert(error)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return <>
    <div className='main-content'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width:"5%"}}>#</th>
          <th style={{width:"15%"}}>Title</th>
          <th style={{width:"40%"}}>Description</th>
          <th style={{width:"10%"}}>Image</th>
          <th style={{width:"10%"}}>Status</th>
          <th style={{width:"10%"}}>Action</th>
        </tr>
      </thead>
      <tbody>
       {
        blogs.map((e)=>{
          return <tr key={e.id} style={{verticalAlign:"middle"}}>
            <td>{e.id}</td>
            <td>{e.title}</td>
            <td><Description content={e.description}/></td>
            <td><Image imageUrl={e.imageUrl}/></td>
            <td><CheckBox id={e.id} status={e.active_flag} onStatusChange={handleStatusChange}/></td>
            <td><Action id={e.id} onDelete={handleDelete}/></td>
          </tr>
        })
       }
        
      </tbody>
    </Table>
    </div>
  </>
}

export default ManageBlogs

function Image({imageUrl}){
  return<>
    <div style={{textAlign:"center",width:"100%"}}>
      <img src={imageUrl} alt={"BlogImage"} style={{width:"50px",height:"50px"}}/>
    </div>
  </>
}

function Description({content})
{
  return <div className='description-wrapper'>
    <div className='description'>
      {content}
    </div>
    </div>
}

function Action ({id,onDelete}){
  let navigate = useNavigate()
  return  <>
    <i className="fa-solid fa-pen" style={{color:"#052c65",cursor:"pointer"}}
    onClick={()=>navigate(`/edit/${id}`)}
    ></i>
      &nbsp;
      &nbsp;
  <i className="fa-solid fa-trash" style={{color:"#d1625a",cursor:"pointer"}}
    onClick={()=>onDelete(id)}
  ></i>
  </>
}