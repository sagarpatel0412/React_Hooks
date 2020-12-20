import React, { Component } from 'react';

class ExampleState extends Component {
    constructor(props){
        super(props);
        this.state={
            letter1:'Lets Start Learning'
        }
        this.onChangeState = this.onChangeState.bind(this)
    }
    onChangeState(){
        this.setState({
            letter1:'Lets Rock!.....'
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.letter1}</p>
                <button className="button1" onClick={this.onChangeState}> Click me!..</button>
            </div>
        )
    }
}

export default ExampleState;
