function Card(props){
    return(
    <div   style={{backgroundColor:props.bgcolor}} className="p-10 mt-2 border-width:0 rounded-md text-center flex-grow">
  <h1 className="font-medium text-2xl">{props.title}</h1>
  <p>{props.subtitle}</p>
</div>)
}
export default Card