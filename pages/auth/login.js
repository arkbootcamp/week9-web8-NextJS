import axios from 'axios'
import React, {useState} from 'react'
import {useRouter} from 'next/router'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const router = useRouter()
  const handleLogin = ()=>{
    axios.post('http://localhost:4500/v1/users/login', {
      email,
      password
    }, { 
      withCredentials: true,
    })
    .then((res)=>{
      router.push('/main')
    })
    .catch((err)=>{
      console.log(err);
      alert('login gagal')
    })
  }
  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="passwrod" className="form-control" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login...</button>
    </div>
  )
}

export default Login
