import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import HighestScore from './HighestScore';
import Counter from './Counter';

class Player extends PureComponent {

    static propTypes = {
        changeScore: PropTypes.func,
        removePlayer: PropTypes.func,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        score: PropTypes.number,
        index: PropTypes.number
    }

    render() {

        const {
            name,
            id,
            removePlayer,
            score,
            index,
            changeScore,
            isHighestScore
        } = this.props;

        return (
            <div className="player">
              <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
                <HighestScore
                    isHighestScore={isHighestScore}
                />
                {name}
              </span>
              <Counter 
                 score={score} 
                 index={index}
                 changeScore={changeScore}
             />
           </div>
         ); 
    }

} 

export default Player;