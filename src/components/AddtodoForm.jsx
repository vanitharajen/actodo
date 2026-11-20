import { useState } from "react"

function AddtodoForm(props){
    const activityArr=props.activityArr
    const setActivityArr=props.setActivityArr
   const [newactivity, setNewactivity]=useState("")
   function handlechange(evt){
    setNewactivity(evt.target.value)
   }
   function addactivity(){
    setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setNewactivity("")
   }
    return(
    <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Acitivities</h1>
                <div>
                    <input value={newactivity} onChange={handlechange} className="border border-black bg-transparent p-1" placeholder="Next Activity?">
                    </input>
                    <button onClick={addactivity} className="border bg-black text-white p-1">Add</button>
                </div>
            </div>
            )
}
export default AddtodoForm