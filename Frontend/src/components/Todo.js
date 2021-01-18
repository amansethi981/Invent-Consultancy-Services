import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { Link,NavLink } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { removeTodo } from "../action/todo";

const Todo = ({ todos, markComplete }) => {
  return (
    <div className="row">
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          {todo.title}

         
          <div className="col-4">
          <NavLink className="nav-link" to="/childlist">
            Child-List
          </NavLink>
          </div>
          <div className="col-4" onClick={() => markComplete(todo.id)}>
            <IconButton
              edge="end"
              aria-label="delete"
              style={{ marginRight: "90px" }}
            >
              <NavLink to="/edit">
              <EditIcon />
              </NavLink>
            </IconButton>
          </div>
          <div className="col-4">
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
              </div>

        </ListItem>
      ))}
    </List>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
