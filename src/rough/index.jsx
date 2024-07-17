import React, { useState } from 'react'

function rough() {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=>setCount+1}>click</button>
    </div>
  )
}

export default rough
