import React,{useMemo, useState} from 'react'

const UseMemoo = () => {
    const [count, setCount]=useState(0);
    const [number,setNumber]=useState(5);
    const Factorial =useMemo(()=>{fact(number)},[number]);
  return (
    <div>
        Factorial:{Factorial}<br/>
        <h4> count- {count}</h4>
        <button onClick={()=>setCount(count+1)}>counterIncrement</button>
        <button onClick={()=>setNumber(number+1)}>numberIncrement</button>
      
    </div>
  )
}
const fact=(n)=>{
    let answer=1;
    for(var i=n;i>=1;i--){
        answer=answer * i;
    }

console.log('factorial number calling');
return answer;
}

export default UseMemoo
