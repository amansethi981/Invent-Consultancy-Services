import React, { useState } from "react";

import {FormGroup,FormControl,InputLabel,Input,Button} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'

import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";;

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormControl>
                    <InputLabel htmlFor="standard-adornment-amount">Add Todo...</InputLabel>
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
        Update
      </Button>
                    </FormControl>

                </FormGroup>

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
