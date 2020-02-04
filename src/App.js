import React, {Component} from 'react';
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Route} from 'react-router-dom';
import Project from "./components/project/Project";

class App extends Component {
  render() {
    return(
        <Route>
            <div>
                <Navbar/>
                <Dashboard/>
                <Project/>
            </div>
        </Route>
    )
  }
}

export default App;
