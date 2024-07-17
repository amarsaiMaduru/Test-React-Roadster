import React, { useEffect, useState } from 'react'

const UseContaxt = () => {
const [count, setCount]=useState(0)
useEffect(()=>{
    document.title=`you visited${count}`;
},[count])
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>click{count} times</button>
    </div>
  )
}

export default UseContaxt
