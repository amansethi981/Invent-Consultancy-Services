import React ,{useState,useEffect}from "react"
import Cards from "../common/Cards";
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button"
import {deleteTodo,getalltodo} from "../action/apicall"
const Todoitem=(props)=>{
  const [todo, setTodo] = useState([]);
  const preload = () => {
    getalltodo().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setTodo(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisTodo = async()=> {
    try {
      const resdata=await deleteTodo(props.id);
      console.log(resdata);
    } catch (error) {
      console.log(error);
    }
    
  };
    console.log(props);
    return(
        <li className="user-item">
        <Cards className="user-item__content">
          
            <div className="user-item__info">
              <h2>{props.title}</h2>
            </div>
            
          <Link to={`/todo/${props.id}`}>
          <Button variant="contained" color="primary" style={{marginLeft:"2rem"}}>
                     Edit
          </Button>
          </Link>
          
          <Button variant="contained" color="secondary" style={{marginLeft:"2rem"}}
          
          onClick={() => {
            deleteThisTodo();
          }}
          >
                  Delete
        </Button>
        
        </Cards>
        
      </li>
        
    )
}
export default Todoitem