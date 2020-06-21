import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json";

class App extends Component {
  state = { cards };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.cards.map(card => (<Card key={card.id} name={card.name} image={card.image} />))}
        </header>
      </div>
    )
  }
};

export default App;
