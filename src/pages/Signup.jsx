import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) {
    const navigate=useNavigate()
    const users=props.users
    const setusers=props.setusers
    const[eusername,setEusername]=useState()
       const[epassword,setEpassword]=useState()
       function handleUInput(evt){
setEusername(evt.target.value)
    }
    function handlePInput(evt){
     setEpassword(evt.target.value)   
    }
    function addUser(){
        setusers([...users,{username:eusername,password:epassword}])
        navigate("/login")
    }
    return (
        <div className="bg-black p-5">
            <div className="bg-white p-5">
                <h1 className="text-2xl font-medium">Hey Hi?</h1>
                <p>You can SignUp here:)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleUInput}></input>
                        <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handlePInput}></input>
                        <input
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="confirm password"></input>
                        <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                        <p>Already have an account?<Link to={"/Login"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup