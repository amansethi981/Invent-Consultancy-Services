import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Todo from "./Components/Todo"
import ChildTodo from "./ChildComponents/Child"
import TodosForm from "./Components/TodosForm"
import Edit from "./Components/Updated"
import ChildForm from "./ChildComponents/ChildForm"
import ChildUpdated from "./ChildComponents/Childupdated"
const Routes=()=>{
  return(
      <Router>
        <Switch>
        <Route path='/home' exact >
          <TodosForm />
        </Route>
        <Route path='/todo' exact>
          <Todo />
        </Route>
        <Route path='/todo/:todoId' exact>
          <Edit />
        </Route>
        <Route path='/todo/child/edit/:todoId/:childId' exact>
        <ChildUpdated />
        </Route>
        <Route path='/todos/view/:todoId' exact>
          <ChildTodo />
        </Route>
        <Route path='/todo/child/:todoId' exact >
          <ChildForm />
          </Route>
        </Switch>
      </Router>
  )
}

export default Routes;