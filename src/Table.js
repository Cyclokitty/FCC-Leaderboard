import React, { Component } from 'react';
import axios from 'axios';
import Tablerow from './Tablerow';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }



  componentDidMount() {
      axios
        .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(res => {
          const data = res.data;
          this.setState({data});
        });
      }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Camper Name</th>
            <th>Points in last 30 days</th>
            <th>All time points</th>
          </tr>
            {this.state.data.map((name, index) =>
              <Tablerow key={index} num={index + 1} data={name}/>
            )}
        </tbody>
      </table>
    );
  }
}

export default Table;
