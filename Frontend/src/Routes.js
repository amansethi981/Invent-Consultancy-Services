import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Todo from "./components/Todo"
import Edit from "./components/Edit"
import Home from "./pages/HomePage"
import GetData from "./components/Getalltodo"
const Routes=()=>{
    return (
        <BrowserRouter>
        <Switch>
        {/* <Route path="/clients/edit" exact component={Edit} /> */}
        <Route path='/' exact component={Home} />
        <Route path="/childlist" exact component={Todo} />
        <Route path="/edit" exact component={Edit} />
        <Route path="/getalltodo" exact component={GetData} />
        </Switch>
        </BrowserRouter>
    )
}
export default Routes