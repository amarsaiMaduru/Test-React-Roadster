import React,{useState} from 'react'
import Todolist from './todolist';

function  TodoPractice() {
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([])
  const changeHandler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task]
    setTodos(newTodos);
    setTask("");
  }
    const deleteHandler=(indexValue)=>{
      const newTodos=todos.filter((todo,index)=>index!==indexValue);
      setTodos(newTodos);
    }
  
  return (
    <div>
      <center>
        <div className='card'>
            <div className='card-body'>
                <h4 className='card-title'>ToDo Management Application </h4>
                <form onSubmit={submitHandler}>
                    <input  size="30" type="text" name="task"  value={task} onChange={changeHandler} /> &nbsp;&nbsp;
                    <input type="submit" value="Add" name="Add"/>
                </form>
                <Todolist todolist={todos} deleteHandler={deleteHandler}/>
            </div>
        </div>
      </center>
    </div>
  )
}

export default  TodoPractice
