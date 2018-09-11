import React,{Component} from 'react';
import Counter from "./Counter"

class Item extends Component{

    constructor(props) {
        super(props);
    }

    onCountChange(result){
        this.props.item.quantity = result;
        this.props.onCountChange(this.props.item);
    }

    render(){
        return(
            <div className="item">
                <div className="item-info">
                    <span className="item-name">{this.props.item.name}</span>
                    <span className="item-price">{this.props.item.price}元/{this.props.item.unit}</span>
                </div>
                <Counter
                    onCountChange={this.onCountChange.bind(this)}
                />
            </div>
        )
    }

}

export default Item;