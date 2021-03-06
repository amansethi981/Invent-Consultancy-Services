import React,{useState,useEffect}from "react";
import TodoList from './Todolist';
import {getalltodo} from "../action/apicall"
const Todo=()=>{
    const [data, setData] = useState([]);
    const loadAllProduct=async()=>{
        try{
            let resdata=await getalltodo();
            console.log(resdata);
            setData(resdata);
        }
        catch(err){
            console.log(err);
        }
    }
  
    useEffect(() => {
      loadAllProduct();
    }, []);
    return(
    <TodoList  items={data}/>
    )
}
export default Todo;