import React,{Component} from 'react';
import Counter from "./Counter"

class Item extends Component{

    constructor(props) {
        super(props);
        this.state = {ref :{}};
    }

    render(){
        return(
            <div className="item">
                <div className="item-info">
                    <span className="item-name">{this.props.item.name}</span>
                    <span className="item-price">{this.props.item.price}元/{this.props.item.unit}</span>
                </div>
                <Counter ref={(ref) => this.state.ref = ref}/>
            </div>
        )
    }

    getCount(){
        return this.state.ref.state.count;
    }
}

export default Item;