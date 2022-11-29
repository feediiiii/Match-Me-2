import React from 'react'
import OnePost from './OnePost'

export default function AllPosts({data}) {
  return (
    <>
    <center><h1>Posts :</h1></center>
    {data.map((e)=>{
        return (
        <OnePost element={e}/>
        )
    })}
    </>
    
  )
}
