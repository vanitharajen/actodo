import AddtodoForm from "./AddtodoForm"
import TodoList from "./TodoList"
import { useState } from "react"
function TodoContainer() {
    
     const [activityArr, setActivityArr]=useState([
        {
            id:1,
            activity:"Go for a walk"
        },
        {
            id:2,
            activity:"Take a Breakfast"
        },
        {id:3,
            activity:"snacks time"
        }
    ])
    return (
        <div className="mt-5">
        <div className="flex  gap-5 flex-wrap">
            <AddtodoForm activityArr={activityArr} setActivityArr={setActivityArr}/>
            <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
        </div>
        </div>
    )
}
export default TodoContainer