import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Login from './pages/login';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Provider className="App" store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
