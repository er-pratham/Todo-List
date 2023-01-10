import React from 'react'
import './Task.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
export default function TasksList(props) {
    // console.log(props.id);
    // console.log(props.deletefunc);
    return (
    <div className='list'>
      <Tooltip title="Delete Task">
      <button onClick={()=>{props.deletefunc(props.id); }} id={props.id} >
        <DeleteForeverIcon/>
      </button>
      </Tooltip>
    <li>{props.comp_data}</li>
    </div>
  );
}