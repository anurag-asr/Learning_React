import React, { useReducer } from 'react'

const reducer=(state,action)=>{
switch(action.type){
    case "increase" : {
        return state+action.payload
    }
    case "decrease" : {
        return state-action.payload
    }
    default:{return state}
}
}

const UseReducer = () => {
    const [counter,dispatch]=useReducer(reducer,0)
    // dispatch is the function which is uded to call initial function
    // 0=> zero is the initial condition 
    // reducer is the function name which is called with the help of dispatch 
    // counter is the state which we can set with the helo of initaial starte

  return (
    <div>
        <h1>useReducer</h1>
        <h2>counter:{counter}</h2> 
     <div>
            <button onClick={()=>dispatch({type:"decrease",payload:100})}>-</button>
            <button onClick={()=>{dispatch({type:"increase",payload:100})}}>+</button>
        </div> 


    </div>
  )
}

export default UseReducer


