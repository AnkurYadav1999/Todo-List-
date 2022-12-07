import React,{useState} from 'react'

const Try = () => {
    const [value,setValue]=useState([])
    const [text,setText]=useState("")

  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={()=>setValue([...value,text])}>Add Task</button>

        <ul>
            {value.map((val,index)=>{
                return <li key={index}>{val}</li>
            })}
        </ul>
    </div>
  )
}

export default Try;