import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component {

    constructor () {
        super()
        this.state = {count: 0}
    }

    handleInputValueChange(event){
        const inputText = event.target.value;
        const result = /\d/.test(inputText) ? parseInt(inputText, 10) : 0;
        this.setState({count: result});
        this.updateData(result);
    }

    handleCountDecrease(){
        const result = this.state.count >= 1 ? this.state.count - 1: 0;
        this.setState({count: result});
        this.updateData(result);
    };

    handleCountIncrease(){
        const result = parseInt(this.state.count, 10) + 1;
        this.setState({count: result});
        this.updateData(result);
    }

    updateData(result){
        this.props.onCountChange(result);
    }

    render() {
        return (
            <div>
                <div className="counter"/>
                <button className="minusButton" onClick={this.handleCountDecrease.bind(this)}>-</button>
                <input type="text" value={this.state.count} onChange={this.handleInputValueChange.bind(this)} />
                <button className="plusButton" onClick={this.handleCountIncrease.bind(this)}>+</button>
            </div>
        )
    }
}

export default Counter