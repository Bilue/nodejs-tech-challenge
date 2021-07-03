import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    auctions: [],
  };

  componentDidMount() {
    axios.get('/auctions/')
    .then(res => {
      console.log(res)
      this.setState( { auctions: res.data })
    })
  }

  render() {
    const { auctions } = this.state;
    const listItems = auctions.map((d) => {
      const products = d.products.map((product) => <ul> {product.title}</ul>)
      return <ul key={d.id}>
        <h4>Auction {d.id}</h4><hr></hr>
        {products}
      </ul>
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Oz Bid Auction</p>
        </header>
        <div>{listItems }</div>
      </div>
    );
  }
}

export default App;
