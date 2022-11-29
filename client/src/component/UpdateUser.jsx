import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function UpdateUser({fun3}) {
    const[hobbies,setHobbies]=useState("")
    const[name,setName]=useState("")

    var updateOnClick=()=>{
        axios.put(`http://localhost:5000/updateUser/${name}`,{"hobbies":hobbies})
        .then(()=>{
            console.log("UPDATEDDD")
            fun3()
        })
    }

  return (
    <div>
        <center><h1>Update my hobbies :</h1></center>
        <center><input placeholder='write your new Name' onChange={(changes)=>{setName(changes.target.value)}}/></center>
        <center><input placeholder='write your new hobbies' onChange={(changes)=>{setHobbies(changes.target.value)}}/></center>
       
       
       <center><button onClick={()=>{console.log(hobbies,name)
                            
                            updateOnClick();             ;
                }}> Update my hobbies </button></center>

    </div>
  )
}
