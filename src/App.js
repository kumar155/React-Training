import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction, IncrementNumberAction, DecrementCountAction } from
 './actions/SimpleAction';

class App extends Component {  
 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
        <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload
        </p>
     <button onClick={this.simpleAction}>Test redux action</button>
      <pre>
        {
          JSON.stringify(this.props.data)
        }
      </pre>
      <br/>
      <br/>
      <button onClick={this.IncrementNumber}>Increment Count</button>
      <br/>
      <br/>
      Count: {this.props.Ic}
      <br/>
      <br/>
      <button onClick={this.DecrementCount}>Decrement Count</button>
      <br/>
      <br/>
      Count: {this.props.Dc}
   </div>
  );
 }
  simpleAction = () => {
    this.props.simpleAction();
  };
  IncrementNumber = () => {
    this.props.IncrementNumberAction(this.props.Ic);
  }
  DecrementCount = () => {
    this.props.DecrementCountAction();
  }
}

const mapStateToProps = state => ({
  Ic: state.incrementCountReducer,
  Dc: state.decrementCountReducer,
  data: state.simpleReducer,
 });

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  IncrementNumberAction: (value) => dispatch(IncrementNumberAction(value)),
  DecrementCountAction: () => dispatch(DecrementCountAction())
 });

 export default connect(mapStateToProps, mapDispatchToProps)(App);