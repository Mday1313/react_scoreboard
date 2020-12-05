import React, { useContext } from 'react';
import { ScoreboardContext } from './Context';
import PropTypes from 'prop-types';

const AddPlayerForm = () => {
    const { actions } = useContext(ScoreboardContext);

    let playerInput = React.createRef();

    let handleSubmit = (e) => {
            e.preventDefault();
            actions.addPlayer(playerInput.current.value);
            e.currentTarget.reset();
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                ref={playerInput}
                placeholder="Enter a player's name"
            />
            <input 
                type="submit"
                value="Add Player"
            />
        </form>
    );
             
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}

export default AddPlayerForm;