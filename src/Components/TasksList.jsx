import React from 'react'
import './Task.css'
export default function TasksList(props) {
    // console.log(props.id);
    // console.log(props.deletefunc);
    return (
    <div className='list'>
      <button onClick={()=>{props.deletefunc(props.id); }} id={props.id} >x</button>
    <li>{props.comp_data}</li>
    </div>
  );
}