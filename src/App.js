import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Employees from "./components/Employees"

class App extends React.Component {
  render() {
    return (

    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/pets' component={Pets}/>
        <Route path='/employees' component={Employees}/>
      </Switch>
    </div>

    );
  }
}

export default App;
