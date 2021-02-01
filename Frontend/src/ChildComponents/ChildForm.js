import React, { useState } from "react";
import {useParams} from "react-router-dom"
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {createchild} from "../action/apicall";
// import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [success,setsucces]=useState(false);
  const [error,seterror]=useState(false);
  const params= useParams()
  const handleSubmit=async(e)=>{
    try{
      const todo={
        title,
        id:params.todoId,
      };
      console.log(todo);
      let res=addTodo(todo);
      console.log(res);
      console.log(todo.title);
      let resdata=await createchild(todo);
      console.log(resdata);
      setTitle("");
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
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="standard-adornment-amount">
            Add Todo..
          </InputLabel>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            Save
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);