import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NavBar />
        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/puppies" component={Puppies} />

      </div>
    );
  }
}
const Landing = (props) => {
  return(
    <h1>This is the landing page, freaking awesome!</h1>
  );
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
