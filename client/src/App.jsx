import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './table'
import { Users } from './user'
const App = () => {
  const [query,setQuery] = useState("")
  const [data,setData] = useState([])
  useEffect(()=>{
    const fetchUsers = async ()=>{
      const res = await axios.get(`http://localhost:9999?q=${query}`)
      setData(res.data)
    }
    fetchUsers()
  },[query])
  return (
    <div className='app'>
      <input type="text" placeholder='search' className='search' 
      onChange={e=>setQuery(e.target.value)} />
      <Table data={data}/>
    </div>
  )
}

export default App