import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
const HomePage = () => {
    const [input,setInput]=useState("")
    const navigate=useNavigate()

    const submitHandler=() =>{
        navigate(`/room/${input}`);
    }

  return (
    <div className='HomePage'>
        <div style={{fontSize:"1.2vw"}}>
            <input type="text" spellCheck="false" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter your name (No Space) '/>
            <button onClick={submitHandler} style={{cursor:"pointer"}}>Join</button>
        </div>
    </div>
  )
}

export default HomePage
