import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import HighestScore from './HighestScore';
import Counter from './Counter';

class Player extends PureComponent {

    static propTypes = {
        index: PropTypes.number
    }

    render() {

        const {
            index,
            isHighestScore
        } = this.props;

        return (
          
            <div className="player">
                <Consumer>
                    { ({ actions, players }) => (
                       <span className="player-name">
                       <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>x</button>
                       <HighestScore
                           isHighestScore={isHighestScore}
                       />
                       {players[index].name}
                     </span> 
                    )}
                </Consumer>
              
              <Counter 
                 index={index}
             />
           </div>
         ); 
    }

} 

export default Player;