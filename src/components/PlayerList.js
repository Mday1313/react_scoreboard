import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';
import Player from './Player';


const PlayerList = () => {
    const { players, highScore } = useContext(ScoreboardContext)
    const highestScore = highScore;
    
    return(
        <React.Fragment>
            {players.map( (player, index) => 
                <Player 
                    key={player.id.toString()}
                    index={index}
                    isHighestScore={highestScore === player.score}
                />
            ) }
        </React.Fragment>
              
    )   
}

export default PlayerList;
