import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inside2 from './component/textinside';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      message:"morning",
      type:""
    }
    //ผูกฟังชั่นกับ state
    this.Changemessage = this.Changemessage.bind(this)
  }
  //function เปลี่ยนค่า state
  Changemessage(){
    this.setState({message:"afternoon"})
   } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
        <Inside2/>
        <Footer/>
        <button onClick = {this.Changemessage}>{this.state.message}</button>
      </div>
    );
  }
}
//eslint-disable-next-line
class Footer extends Component{ 
  render() {
    return (
     <div>Footer Component</div>
    );
  }
}
export default App;
