import React from 'react'
import axios from 'axios'

export default function OnePost({element}) {
  var deleteThisPost=()=>{
    var idUser = element.idpost;
    console.log(idUser)
    axios.delete(`http://localhost:5000/deletePost/${idUser}`)
    .then(()=>{
      window.location.reload();
    })
  }
  return (
    <div class="onePost">
      <span id="x" onClick={()=>deleteThisPost()}>✖️</span>
                 <h3> {element.nameuser}</h3>
                   <center> <h4> {element.content} </h4></center>
    </div>
  )
}
