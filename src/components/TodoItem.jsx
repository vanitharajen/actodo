function TodoItem(props){
    const activityArr=props.activityArray
    const setActivityArr=props.setActivityArray
    function handleDelete(Deletedid){
        var temparr=activityArr.filter(function(item){
            if(item.id === Deletedid){
                return false
            }
else{
    return true
}
})
setActivityArr(temparr)
    }
    return(
        <div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-500" onClick={()=>handleDelete(props.id)}>Delete</button>
        </div>
    )
}
export default TodoItem