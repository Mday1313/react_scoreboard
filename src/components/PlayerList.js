import React from 'react';
import { Consumer } from './Context';
import Player from './Player';


const PlayerList = () => {

    return(
        <Consumer>
            { ({ players, highScore}) => {
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
            }}
        </Consumer>
    )
}

export default PlayerList;
