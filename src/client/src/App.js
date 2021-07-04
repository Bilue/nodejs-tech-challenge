import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Card, Container, CardHeader, CardContent } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const useStyles = theme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3)
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -theme.spacing
    }
  }
});

class App extends Component {
  state = {
    auctions: [],
  };

  componentDidMount() {
    axios.get('/auctions/')
    .then(res => {
      this.setState( { auctions: res.data })
    })
  }

  render() {
    const { auctions } = this.state;
    const listItems = auctions.map((d) => {
      const products = d.products.map((product) => <CardContent key={product.id}>{product.title}</CardContent>)
      return <Card key={d.id} > 
        <CardHeader key={d.id} title={`Auction ${d.id}`} />
        {products}
      </Card>
    });
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Oz Bid Auction</p>
        </header>

        <Container maxWidth="sm" theme={theme}>
        <div>{listItems }</div>
        </Container>
        
      </div>
    );
  }
}

export default withStyles(useStyles)(App);
