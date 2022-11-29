import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function CreateAccount({fun1}) {
    const[name,setName]=useState("")
    const[hobbies,setHobbies]=useState("")
    
    const[used,setUsed]=useState(false)

    var addUser=()=>{
        axios.post("http://localhost:5000/createAccount",{"nameuser":name,"hobbiesuser":hobbies})
        .then((response,err)=>{
            //console.log(response);
            fun1(name,hobbies);
        }).catch(err => {
            alert(`${name}   already exists CHANGE YOUR NAME PLS`)
            setUsed(true)
        })
    }

  return (
    <div>
        <center><h1>WELCOME</h1></center>
        <center><h1>Create an Account so you can enter :</h1></center>
        <center><input placeholder='Pick a name' onChange={(changes)=>{setName(changes.target.value)}}/></center>
                        {used?<span id="span1">this value is used u cant log in!</span>:null}
       <center> <input placeholder='Pick a Hobbies' onChange={(changes)=>{setHobbies(changes.target.value)}} /></center>
       
       <center><button onClick={()=>{console.log(name,hobbies)
                            
                                    addUser();
                }}> Click me to make Enter / sign in </button></center>

    </div>
  )
}
