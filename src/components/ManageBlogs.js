import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import { API_URL } from '../index';
import { useNavigate } from 'react-router-dom';
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

  useEffect(()=>{
    getData()
  },[])
  return <>
    <div>
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
            <td>{`${e.active_flag}`}</td>
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
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate reprehenderit ex quaerat iure consequuntur ipsum animi eius et quam! Consequuntur, quaerat officiis! Fuga iure fugit in! Dolor commodi dignissimos officiis!
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