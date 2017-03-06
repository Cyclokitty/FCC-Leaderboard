import React, { Component } from 'react';
import axios from 'axios';
import Tablerow from './Tablerow';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
    }
    this.top30 = this.top30.bind(this);
    this.alltime = this.alltime.bind(this);
  }

  top30() {
    axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => {
        const data = res.data;
        this.setState({data});
    });
  }

  alltime() {
    axios
      .get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
      .then(res => {
        const data = res.data;
        this.setState({data});
    });
  }

  componentDidMount() {
      axios
        .get(this.state.url)
        .then(res => {
          const data = res.data;
          this.setState({data});
        });
      }

  render() {
    return (
      <div>
        <button className='Buttons' onClick={this.top30}>Last 30 Days</button>
        <button className='Buttons' onClick={this.alltime}>All time</button>
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
      </div>
    );
  }
}

export default Table;
