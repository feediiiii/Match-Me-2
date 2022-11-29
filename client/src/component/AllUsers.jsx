import React from 'react'
import OneUser from './OneUser'

export default function AllUsers({data}) {
  return (
    <>
    <center><h1>Users : </h1></center>
    {data.map((e)=>{
        console.log(data)
        return (
        <OneUser element={e}/>
        )
    })}
    </>
  )
}
