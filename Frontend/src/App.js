import React from "react"
import Routes from "./Routes"
import store from "./Store"
import { Provider } from "react-redux";
const App=()=>{
  return(
<Provider store={store} >
  <Routes />
</Provider>
  )
}
export default App;