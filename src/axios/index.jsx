import axios from 'axios'
import React, { useEffect,useState } from 'react'

const PracticeAxios = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>setData (response.data))
        .catch(error=>console.error("error fetching data:",error))
    },[])
    // const [table,setTable]= useState([])
  return (
    <div>
        {/* {data.map(item=><li key={item.id} >{item.title}</li>)} */}
      <h1>jsonData</h1>
      <table  className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>Title</th>
                <th>completed</th>
            </tr>
        </thead>
        <tbody>
            {data.map(item=>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed?"yes":"No"}</td>
                </tr>
            ))}
        </tbody>
      </table>
  
    </div>
    
  )
}

export default PracticeAxios
