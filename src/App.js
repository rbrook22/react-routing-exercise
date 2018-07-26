import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Puppies</a></li>
        </ul>

        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/puppies" component={Puppies} />

      </div>
    );
  }
}

const Home = (props) => {
  return(
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

const About = (props) => {
  return(
    <div>
      <h1>I'm Rick! Nice to meet you!</h1>
    </div>
  );
}

const Puppies = (props) => {
  return(
    <div>
      <h1>Puppies are awesome!</h1>
    </div>
  );
}

export default App;
