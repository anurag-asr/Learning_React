import React from 'react'

export const ChildForward = React.forwardRef((props,ref) => {
    return (
      <div>
        <input type="text" ref={ref}/>
      </div>
    )
  }
  )