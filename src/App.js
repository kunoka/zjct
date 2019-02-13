import React, { PureComponent } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import {Globalstyle} from "./style";
import Header from './common/header';
import Footer from './common/footer';
import Home from './pages/home';
import Login from './pages/login';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Provider className="App" store={store}>
        <Globalstyle />
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
