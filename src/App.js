import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//components
import Navbar from './components/layout/Navbar';
import Home from './components/Home';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact-path="/" component={Home}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
