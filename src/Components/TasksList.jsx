import React from 'react'
import './Task.css'
import Tooltip from '@mui/material/Tooltip';
export default function TasksList(props) {
    // console.log(props.id);
    // console.log(props.deletefunc);
    return (
    <div className='list'>
      <Tooltip title="Delete Task">
      <button onClick={()=>{props.deletefunc(props.id); }} id={props.id} >x</button>
      </Tooltip>
    <li>{props.comp_data}</li>
    </div>
  );
}