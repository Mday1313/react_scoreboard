import React, { Component } from 'react';
import Header from './Header';
import Player from './Player'; 
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
    id: 1,
    name: "Melissa",
    score: 0
  },
  {
    id: 2,
    name: "Ian",
    score: 0
  },
  {
    id: 3,
    name: "Tom",
    score: 0
  },
  {
    id: 4,
    name: "James",
    score: 0
  }
    ]
  }

  prevPlayerId = 4;
  
  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
     return {
      score: prevState.players[index].score += delta
    }; 
    }); 

  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  } 

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter( p => p.id !== id)
      }
      
    })
  }
  
  render() {
    return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        players={this.state.players} 
      />
    
    {this.state.players.map( (player, index) => 
       <Player 
        key={player.id.toString()}
        name={player.name}
        id={player.id}
        index={index}
        removePlayer={this.handleRemovePlayer}
        score={player.score}
        changeScore={this.handleScoreChange}
      />
    ) }
    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
  );
  }
  
}

export default App;