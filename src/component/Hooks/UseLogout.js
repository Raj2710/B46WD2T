import { useNavigate } from "react-router-dom"

export function UseLogout(value,fun) {
    let navigate = useNavigate()
  return ()=>{
    navigate('/')
  }
}