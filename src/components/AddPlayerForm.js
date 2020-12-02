import React from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';

const AddPlayerForm = () => {

    return(
        <Consumer>
            { context => {
            let playerInput = React.createRef();

            let handleSubmit = (e) => {
                    e.preventDefault();
                    context.actions.addPlayer(playerInput.current.value);
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
                )
            }}
        </Consumer>
       
    ); 
}

AddPlayerForm.propTypes = {
    addPlayer: PropTypes.func
}

export default AddPlayerForm;