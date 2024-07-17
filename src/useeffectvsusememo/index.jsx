import React, { useState ,useEffect, useMemo} from 'react'

const Comparision = () => {
    useEffect(()=>{console.log('from useEffect'+effect)},[effect]);
    useMemo(()=>{console.log('from usememo'+memo)},[memo]);
 
    const[effect,setEffect]=useState(0);
    const[memo,setMemo]=useState(0);
  return (
    <div>
      <button onClick={()=>setEffect(effect+1)}>useEffectIncreament</button>
      <button onClick={()=>setMemo(memo+1)}>useEffectIncreament</button>
    </div>
  )
}

export default Comparision
