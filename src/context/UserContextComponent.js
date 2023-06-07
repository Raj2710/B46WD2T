import React,{useState} from 'react'
export const UsersContext = React.createContext()

function UserContextComponent({children}) {
    let [users,setUsers] = useState([
        {
          name:"Anoop",
          email:"anoop@gmail.com",
          mobile:"919100201",
          dob:"1993-01-23"
        },
        {
          name:"Ajith",
          email:"ajith@gmail.com",
          mobile:"8919989291",
          dob:"1998-08-20"
        },
        {
          name:"Ganesh",
          email:"ganesh@gmail.com",
          mobile:"80989019801",
          dob:"2000-12-12"
        },
        {
          name:"Gokul",
          email:"gokul@gmail.com",
          mobile:"782718189",
          dob:"2001-09-09"
        }
      ])
  return <>
    <UsersContext.Provider value={{users,setUsers}}>
        {children}
    </UsersContext.Provider>
  </>
}

export default UserContextComponent