import React from "react"
import Todoitem from "./Childitem"
import Cards from "../common/Cards"
const Todolist=(props)=>{
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
    {props.items.map(todo=>(
        <Todoitem 
        id={todo._id}
        title={todo.title}
        />
    ))}
</ul>
   )
}

export default Todolist;