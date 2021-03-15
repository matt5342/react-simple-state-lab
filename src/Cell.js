import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props){
        // debugger
        super()
        this.state = {
            color: props.value
        }
    }
    clickme = () => { this.setState({
        color: '#333'
    })}
    render()  {
        // debugger
        return (
            <div className='cell' style={{backgroundColor: `${this.state.color}`}} onClick={this.clickme}></div>
        )
    }
}