import React, { Component } from 'react';
import './App.css';
class App extends Component {
  
  constructor(props){
    super(props)
    this.state = { value:0 }
    this.clickHandler = this.clickHandler.bind(this)
}
clickHandler(){
    console.log("prevState", this.state.value)
    this.setState({ value: this.state.value + 1 })
}
render(){
    return (
        <div>
        <button id ="inc" onClick= {this.clickHandler}>Incrementa</button>
        <span className = "value">{this.state.value}</span>
        </div>
    )
}
}
export default App;