import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Personal from './components/Personal';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Main}/>
          <Route exact path="/detail/:id" component={Detail}/>
          <Route exact path="/personal/:author" component={Personal}/>
        </div>
      </Router>
    );
  }
}

export default App;
