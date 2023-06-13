import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { API_URL } from '../index'
import Card from 'react-bootstrap/Card';

function Home() {
  let [blogs,setBlogs] = useState([])

  let getData = async ()=>{
    try {
      let res = await axios.get(`${API_URL}`)
      if(res.status===200)
      {
          let newBlogs = []
          newBlogs = res?.data?.filter((e)=>e.active_flag)
          const latestBlogs = newBlogs.reverse()
          setBlogs(latestBlogs)
      }
    } catch (error) {
      alert(error)
    } 
  }

  useEffect(()=>{
    getData()
  },[])
  return <>
    <div className='home-wrapper'>
      <h2 className='home-title'>Latest Blogs</h2>
      {
        blogs.map((e,i)=>{
          return <BlogItem blog={e} key={i}/>
        })
      }
    </div>
  </>
}

export default Home

function BlogItem({blog}){
  return <div className='blog-wrapper'>
      <div className='blog-title'>{blog.title}</div>

      <img src={blog.imageUrl} className='blog-image'/>

      <div className='blog-description'>{blog.description}</div>
  </div>
}