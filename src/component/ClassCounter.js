import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0,
        }
        this.incrementCount=this.incrementCount.bind(this)
    }
    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementCount} >Click Me!!!!!!! </button>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default ClassCounter;
