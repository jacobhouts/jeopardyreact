  
import React from 'react'



class Points extends React.Component{
    constructor(props){
        super(props);
        this.state={
            points:0
        }
    }

    increment=() => {
        this.setState({
            points: this.state.points + this.props.quesValue
        });
    }
      decrement=() => {
        this.setState({
            points: this.state.points - this.props.quesValue
        });
    }
      resetPoints=() => {
        this.setState({
            points: this.state.points = 0 
        });
    }


    render(){
        return(
    
    <div className="points">Points: {this.state.points}
        <h2>
            <button id="dec-btn" onClick={this.decrement}>Decrease:</button>
            <button id="inc-btn" onClick={this.increment}>Increase:</button>
            <button id="reset-btn" onClick={this.resetPoints}>Reset</button>
        </h2>
    </div>
        )
    }
}

export default Points