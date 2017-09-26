import React, { Component } from 'react';


import SeatList from '../containers/seat-list';
import SeatDetail from '../containers/seat-detail';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div><Header/></div>
        <div>
          <div><SeatList /> </div>
          <div><SeatDetail /> </div>
        </div>   
        
        
      </div>
    );
  }
}
