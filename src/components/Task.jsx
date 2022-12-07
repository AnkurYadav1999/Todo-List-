import React from 'react'
import './Task.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



const Task = ({title,description,deleteTask,index,Tdate,time}) => {
  return (
    <div className="task">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className='extra-info'>
    <h5>{`${Tdate} - ${time}`}</h5>
    <button className='remove-task' onClick={()=>deleteTask(index)} ><FontAwesomeIcon icon={faTrash} /></button>
    </div>
  </div>
  )
}

export default Task