import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent, {FunctionalComponent2} from './functionalcomponent';
import ClassComponent from './classComponent';

class App extends Component {
  constructor() {
    super();
    this.name = 'Hello React';
    this.state = {
      value: 1,
      name: 'something',
      userName: 'satish kumar',
    };
  }

  componentWillMount() {
    setTimeout(() => {
      // call backend API's .... response data
    }, 10000);
  }

  render() {
    setTimeout(() => {
      this.setState({userName: 'Donthu Satish'});
    }, 1000);
    const getName = () => {
      return 'React';
    }
    return (
      <div className="App">
       <h1> {this.state.userName}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hi this {getName()}</h1>
        <h1>Hi this {this.getOustSideFunction()}</h1>
        <h2>{this.name}</h2>
        <FunctionalComponent2/>
        <FunctionalComponent/>
        <ClassComponent name={'something new data..'} userName={this.state.userName}/>
        <p>{this.state.name} & value is: {this.state.value}</p>
      </div>
    );
  }
  getOustSideFunction = () => {
    return 'World';
  }
}

export default App;

