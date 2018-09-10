import React, { Component } from 'react';
import './App.css';
import ItemList from './ItemList'
import database from "./datbase"

class App extends Component {
  render() {
    return (
      <div>
        <ItemList items={database.loadAllItems()}/>
      </div>
    );
  }
}


export default App;
