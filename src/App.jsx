import React from 'react';
import {useState} from 'react'
import Button from './components/buttons';
import Input from './components/input';

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
      <div className='flex flex-col justify-center items-center' id="app-container">
          <h1 className='text-3xl pt-3'>Todo List</h1>
        <div className='flex flex-col justify-center' id="list-container">
            <form onSubmit = {addElement} role="todo">
                <label htmlFor="task">Task : </label>
                <Input 
                    name='task' 
                    id='task' 
                    value={name} 
                    required 
                    onChange = {(e) => setName(e.target.value)} 
                    placeholder="Enter task..."
                />
                <br/>
                <Input 
                    customClass='bg-gray-700 w-32 text-yellow-300 hover:text-rose-50 cursor-pointer hover:bg-gray-400 ml-10 mt-1 transition ease-in-out delay-200' 
                    type='submit' 
                    disabled={name.length > 0 ? false:true} 
                />
                
            </form>
            <ul className ="todo-list">
                {list.length === 0 && <span role={"note"}>List is Empty...</span>}
                {list.map((listEle,ind) => {

                    return( 
                            <li className='grid grid-cols-3 gap-4 space-y-2' key = {ind}>
                            <span className='text-xl font-bold capitalize' >{listEle.name}</span>
                            <Button 
                                customClass='bg-blue-500 text-white hover:text-black hover:bg-gray-100 transition ease-in-out delay-150' 
                                onClick = {(e) => deleteElement(listEle)} 
                                text="Delete"
                            />
                            <Button 
                                customClass='bg-blue-500 text-white w-10 hover:text-black hover:bg-gray-100 transition ease-in-out delay-150' 
                                onClick = {(e) => dispEdit(listEle)} 
                                text="Edit"
                            />
                            {listEle.visi && 
                            
                                <input autoFocus value={listEle.name} onChange = {(e) => updateElement(e,listEle)} onBlur = {(e) => dispEdit(listEle)}/>
                            
                            }
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>
  )
}