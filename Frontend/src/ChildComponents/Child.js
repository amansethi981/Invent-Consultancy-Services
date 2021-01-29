import React,{useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Childlist from "./Childlist";
import {getalltodo} from "../action/apicall"
const Child=()=>{
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
const todoId=useParams().todoId;
console.log(todoId)
console.log(data);
const loadeditem=data.filter(todo=>todo._id===todoId)
console.log(loadeditem)
return(
    <Childlist items={loadeditem} />
)
}
export default Child