import React,{Component} from 'react';
import Item from "./Item"

class ItemList extends Component{

    constructor(props) {
        super(props);
        this.state = {ref:[]}
    }

    render(){
        const items = this.props.items;
        return(
            <div>
                {items.map(item =>
                    <Item ref={(ref) => this.state.ref[item.barcode] = ref} key={item.barcode} item={item}/>)}
                <button className="addToShoppingCart" onClick={this.getSubmitCount.bind(this)}>submit</button>
            </div>
        )
    }

    getSubmitCount(){
        const itemCounts = this.props.items.map(item => {
            item.count = this.state.ref[item.barcode].getCount();
            return item;
        });

    }
}

export default ItemList