import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.top30 = this.top30.bind(this);
    this.alltime = this.alltime.bind(this);
  }

  top30() {
      this.setState({url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'});
  }

  alltime() {
    this.setState({url: 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'});
  }

  render() {
    return (
      <div>
        <button className='Buttons' onClick={this.top30}>Last 30 Days</button>
        <button className='Buttons' onClick={this.alltime}>All time</button>
      </div>
    );
  }
}


export default Buttons;
