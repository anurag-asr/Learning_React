import React, { useState } from 'react'
import {flushSync,startTransition} from "react-dom"


const AuthBatching = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    function updateone(){
        setName("raghu");
        // setEmail("ragju@gmail.com");
        // setPassword("12121212121")

        // if you want to render everyone like the previous version
        // flushSync(()=>{
        //     setName("raghu");
        // })
        // flushSync(()=>{
        //     setEmail("raghu");
        // })
        // flushSync(()=>{
        //     setPassword("raghu");
        // })

        // startTransition(()=>{
        // setEmail("ragju@gmail.com");
        // })
        // Here it will uppdate the setName value then setEmail value  

    }
   console.log(name,email,password)
  return (
    <div>
        <button onClick={()=>updateone()}>Update</button>
    </div>
  )
}

export default AuthBatching