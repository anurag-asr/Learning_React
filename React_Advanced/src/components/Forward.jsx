import React from 'react'
import { useRef } from 'react'
import { ChildForward } from './ChildForward';

export const Forward = () => {
    const ref=useRef();
  return (
    <div>
        <ChildForward ref={ref}/>
        <button onClick={()=>ref.current.focus()}>Press it</button>
    </div>
  )
}
