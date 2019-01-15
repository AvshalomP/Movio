import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { configureStore } from './store';
//components
import Navbar from './components/layout/Navbar';
import Home from './components/Home';


const store = configureStore();

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
              <div className="App">
                <Navbar/>
                <Switch>
                  <Route exact-path="/" component={Home}/>
                </Switch>
              </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;
