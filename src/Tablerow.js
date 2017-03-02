import React, { Component } from 'react';
import './Tablerow.css';

class Tablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.num}</td>
        <td className='tdLeft'><img src={this.props.data.img} width='50' role='presentation'/> {this.props.data.username}</td>
        <td>{this.props.data.recent}</td>
        <td>{this.props.data.alltime}</td>
      </tr>
    );
  }
};

export default Tablerow;
