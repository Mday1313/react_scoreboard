import React, { Component } from 'react';

class Stopwatch extends Component {

state = {
    isRunning: false,
    elapsedTime: 0,
    prevTime: 0

};

handleStopWatch = () => {
    this.setState( prevState => ({
        isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
        this.setState({
            prevTime: Date.now()
        });
    }
};

handleReset = () => {
    this.setState({
        elapsedTime: 0,
    })
}

componentDidMount() {
    this.intervalId = setInterval(() => this.tick(), 100)
}

tick = () => {
 if(this.state.isRunning) {
    const now = Date.now();
    this.setState( prevState => ({
        prevTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.prevTime)
    }))
 }
    
}

    render() {
        const seconds = Math.floor(this.state.elapsedTime / 1000);

        return(
            <div className="stopwatch" >
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopWatch}>{ this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;