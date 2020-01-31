import React, {Component} from 'react';
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return(
        <Router>
            <div>
                <Navbar/>
                <Dashboard/>
            </div>
        </Router>
    )
  }
}

export default App;
