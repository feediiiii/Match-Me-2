import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function CreatePost({fun2}) {
    const [content,setContent]=useState("")
    const [iduser,setIduser]=useState(0)

    var postThisPost=()=>{
        axios.post("http://localhost:5000/createPost",{"content":content,"user_iduser":iduser})
        .then(()=>{
            console.log("yeeeey worked")
            fun2()
        })
    }

  return (
    <div>
        <center><h1>Create your post</h1></center>
        <center><input placeholder='Whats in your mind' onChange={(changes)=>{setContent(changes.target.value)}}/></center>
        <center><input id="sghira" placeholder='id' onChange={(changes)=>{setIduser(changes.target.value)}}/></center>
       
       
       <center><button onClick={()=>{console.log(content,iduser)
                            
                                    postThisPost();
                }}> Post This Post </button></center>

    </div>
  )
}
