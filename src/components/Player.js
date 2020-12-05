import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';
import PropTypes from 'prop-types';
import HighestScore from './HighestScore';
import Counter from './Counter';

const Player = ({ index, isHighestScore }) => {
    const { players, actions } = useContext(ScoreboardContext);

    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>x</button>
                <HighestScore
                    isHighestScore={isHighestScore}
                />
            {players[index].name}
            </span> 
            <Counter 
                index={index}
            />
        </div>
    ); 
} 

Player.propTypes = {
    index: PropTypes.number,
  };

export default Player;