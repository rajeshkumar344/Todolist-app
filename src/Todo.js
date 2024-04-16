
import {useState} from "react"


export function Todo(){

    const [myTask, setMyTask] = useState()
    function collectTheTask(event){
      setMyTask(event.target.value)
    }
    
    return (
      <div>
        Enter Task : <input type = "text" onChange ={collectTheTask}     />
        <button>submit</button>
        <h1>{myTask}</h1>
      </div>
    )
}