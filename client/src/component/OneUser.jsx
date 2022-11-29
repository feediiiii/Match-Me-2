import React from 'react'

export default function OneUser({element}) {
  return (
    <div class="onePost">
                 <h3> Name : {element.nameuser}</h3>
                   <center> <h4> Hobbies :  {element.hobbiesuser} </h4></center>
                   <center> <h4> His id :  {element.iduser} </h4></center>
    </div>
  )
}
