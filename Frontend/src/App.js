import React from "react";
import logo from "./logo.svg";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./Routes";

//importing components

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>

<Routes />
     
    </Provider>
  );
}

export default App;
