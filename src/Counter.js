import React, {Component} from 'react'
import './Counter.css'

class Counter extends Component {

    constructor () {
        super()
        this.state = { count: 0 }
    }

    static defaultProps = {
        leftButtonText: "-",
        rightButtonText: "+"
    }

    handleInputValueChange(event){
        const inputText = event.target.value;
        if(/\d/.test(inputText)) {
            this.setState({count: parseInt(inputText, 10)});
        }else{
            this.setState({count: 0});
        }
    }

    handleCountDecrease(){
        const result = this.state.count >= 1 ? this.state.count - 1: 0;
        this.setState({count: result});
    };

    handleCountIncrease(){
        const result = parseInt(this.state.count, 10) + 1;
        this.setState({count: result});
    }

    render() {
        return (
            <div>
                <div className="counter"/>
                <button className="minusButton" onClick={this.handleCountDecrease.bind(this)}>{this.props.leftButtonText}</button>
                <input type="text" value={this.state.count} onChange={this.handleInputValueChange.bind(this)} />
                <button className="plusButton" onClick={this.handleCountIncrease.bind(this)}>{this.props.rightButtonText}</button>
            </div>
        )
    }
}

export default Counter