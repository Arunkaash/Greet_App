import React, {Component, useState} from "react";
import './App.css';


function getCurrentTime(){
  const currentDate = new Date();
  return currentDate.toLocaleTimeString().toUpperCase();
}
class DigitalClock extends Component {
  constructor(props){
      super(props);
      this.state ={
          time: getCurrentTime(),
      };
  }
  componentDidMount(){
      this.intervalId = setInterval(() => {
          this.setState({time: getCurrentTime()})
      }, 1000);

  }

  componentWillUnmount(){
      clearInterval(this.intervalId);
  }
  render() {
    return(
          <>
          <h3 className="Clock" id="time">It's - {this.state.time}</h3>
          
          </>
      )
  }
}
export default DigitalClock;
