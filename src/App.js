import React from "react";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<Navigate to = '/sign-in'/>}/>
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
