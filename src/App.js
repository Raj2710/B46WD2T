import Sidebar from "./component/Sidebar";
import Dashboard from "./component/Dashboard";
import AddUser from "./component/AddUser"
import Profile from './component/Profile'
import PendingRequest from './component/PendingRequest'
import Task from "./component/Task";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ProfileDetails from "./component/ProfileDetails";
import ResetPassword from "./component/ResetPassword";
import { useState } from "react";
function App() {
  let [users,setUsers] = useState([
    {
      name:"Anoop",
      email:"anoop@gmail.com",
      mobile:"919100201",
      dob:"27/1/1993"
    },
    {
      name:"Ajith",
      email:"ajith@gmail.com",
      mobile:"8919989291",
      dob:"20/3/1998"
    },
    {
      name:"Ganesh",
      email:"ganesh@gmail.com",
      mobile:"80989019801",
      dob:"12/12/2000"
    },
    {
      name:"Gokul",
      email:"gokul@gmail.com",
      mobile:"782718189",
      dob:"9/9/2001"
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
        <Sidebar/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
          <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path="/edit-user/:id" element={<AddUser users={users} setUsers={setUsers}/>}/>
          <Route path="/profile" element={<Profile/>}>
              <Route path='details' element={<ProfileDetails/>}/>
              <Route path='reset-password' element={<ResetPassword/>}/>
          </Route>
          <Route path="/pending-request" element={<PendingRequest/>}/>
          <Route path="/task" element={<Task/>}/>
          <Route path="*" element={<Navigate to='/dashboard'/>}/>
        </Routes>
    </div>
  </BrowserRouter>
  </>
}

export default App;
