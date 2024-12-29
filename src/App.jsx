import React from 'react';
import {useState} from 'react'

export default function App() {

const [name,setName] = useState("");
const[list,setList] = useState([]);

const addElement = (event) => {
    event.preventDefault();

    var newTask = {
        name:name,
        id:list.length+1,
        visi:false
    }
    setList([...list,newTask])
    setName("");
}

const deleteElement = (ele) =>{

    console.log(ele);
    var updatedList = list.filter((task)=>{
        return task.id !== ele.id
    })

    setList(updatedList);
}

const updateElement = (event,ele) =>{

    var updatedList = list.map((task,ind) =>{
        return task.id === ele.id ? {...task, name:event.target.value}: task;
    })

    setList(updatedList);
}
const dispEdit = (ele) => {

    var updatedList = list.map((task,ind) =>{
        return task.id === ele.id ? {...task, visi:!ele.visi}: task;
    })
    return setList(updatedList); 
}
  return (
      <div id="app-container">
          <h1>Todo List</h1>
        <div id="list-container">
            <form onSubmit = {addElement}>
                <label name="task">Task : </label>
                <input 
                    placeholder="Enter task...." 
                    name="task"
                    required
                    value={name}
                    onChange = {(e) => {setName(e.target.value)}}
                /><br/>
                <input type="submit" style={{marginLeft:"20%", marginTop:"10px" }}/>
                
            </form>
            <ul className ="todo-list">
                {list.length === 0 && <span role={"note"}>List is Empty...</span>}
                {list.map((listEle,ind) => {

                    return( 
                            <li key = {ind}>
                            {listEle.name}
                            <button onClick = {(e) => deleteElement(listEle)}>Delete</button>
                            <button onClick = {(e) => dispEdit(listEle)} >Edit</button>
                            {listEle.visi && 
                            
                                <input value={listEle.name} onChange = {(e) => updateElement(e,listEle)} onBlur = {(e) => dispEdit(listEle)}/>
                            
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>
  )
}