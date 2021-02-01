import React, { useState} from "react";
import {useParams} from "react-router-dom"
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {childupdatetodo} from "../action/apicall";


//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const Updated = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const[data,setData]=useState("");
  const [success,setsucces]=useState(false);
  const[children,setchildren]=useState("");
  const [error,seterror]=useState(false);
  const params= useParams()
  const handleSubmit=async(e)=>{
    //console.log(params)
    try{
      const todo={
        title,
        children,
        id:params.todoId
      };
      let res=addTodo(todo);
      console.log(res);
      
      let resdata=await childupdatetodo(todo);
      setData(resdata);
      console.log(resdata);
      console.log(data);
      setTitle("");
      setchildren("")
      setsucces(true);
      seterror(true);

    }
    catch(err){
      console.log(err);
    }
  }

  const successMessage = () => {
    return (
      <div >
        <div >
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New todolist was created successfully
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div >
        <div >
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };


  return (
    <form onSubmit={handleSubmit} style={{marginTop:"12rem",width:"30rem",marginLeft:"25rem"}}>
      <FormGroup >
        <FormControl>
          <InputLabel htmlFor="standard-adornment-amount">
            Edit Todo...
          </InputLabel>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) =>{ setTitle(e.target.value)
            setchildren(e.target.value)
            }
          }
          />
        </FormControl>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleSubmit}
            startIcon={<SaveIcon />}
          >
            Updated
          </Button>
          
        </FormControl>
      </FormGroup>
      {successMessage()}
          {errorMessage()}
    </form>
    
  );
  
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Updated);