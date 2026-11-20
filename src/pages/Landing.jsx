import Header from '../components/Header'
import Card from '../components/Card'
import TodoContainer from '../components/TodoContainer'
import { useLocation } from "react-router-dom"
function App() {
        const data=useLocation()
  return (

    <div className="bg-black p-16">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <Header name={data.state.user}/>
        <div className="flex justify-between gap-7 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December 23"} subtitle={"14:23:00"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />

           </div>
            <TodoContainer />
          

      

      </div>
    </div>
  )
}

export default App
