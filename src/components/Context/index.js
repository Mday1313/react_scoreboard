import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {

    state = {
        players: [
          {
        id: 1,
        name: "Melissa",
        score: 0,
       
      },
      {
        id: 2,
        name: "Ian",
        score: 0,
     
      },
      {
        id: 3,
        name: "Tom",
        score: 0,
        
      },
      {
        id: 4,
        name: "James",
        score: 0,
        
      }
        ]
      }

      prevPlayerId = 4;

      handleHighestScore = () => {
        const scores = this.state.players.map( player => player.score);
        const highScore = Math.max(...scores);
        if(highScore){
          return highScore;
        } 
        return null;
    
      }
      
      handleScoreChange = (index, delta) => {
        this.setState( prevState => {
         return {
          score: prevState.players[index].score += delta,
          
        }; 
        }); 
      }
    
      handleAddPlayer = (name) => {
        
        this.setState( prevState => {
          return{
            players: [
              ...prevState.players,
              {
                name,
                score: 0,
                id: this.prevPlayerId += 1
              }
            ]
          }
          
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
        const highScore = this.handleHighestScore();
        return(
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  changeScore: this.handleScoreChange,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer,
                 
                },
                highScore: highScore
        
              }}>
               {this.props.children}
            </ScoreboardContext.Provider>
        );
    }
}
export const Consumer = ScoreboardContext.Consumer;

