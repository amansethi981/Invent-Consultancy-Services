import React from "react"
import Todoitem from "./Childitem"
import Cards from "../common/Cards"
const Todolist=(props)=>{
  console.log(props);
    if (props.items.length === 0) {
        return (
          <div className="center">
            <Cards>
              <h2>No Todo found.</h2>
            </Cards>
          </div>
        );
      }
   return(
    <ul style={{marginTop:"2rem"}}>
    {props.items[0].children.map(todo=>(
        <Todoitem 
        mainid={props.items[0]._id}
        id={todo._id}
        title={todo.name}
        />
    ))}
</ul>
   )
}

export default Todolist;