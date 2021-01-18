import React from "react";
import Todo from "../components/Todo";
import TodoForm from "../components/TodoForm";
import { Container } from "reactstrap";
const Homepage = () => {
    return (<>
     <Container fluid>
        <Todo />
        <TodoForm />
      
      </Container></>)
}
export default Homepage;