import React, {Component} from 'react';
import Item from "./Item"
import {getItemByBarcode} from "./database"

class ItemList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="itemContainer">
                <h2>ITEMLIST</h2>
                {this.props.items.map(item =>
                    <Item
                        onCountChange={this.props.onCountChange.bind(this)}
                        key={item.barcode}
                        item={item}
                    />)}
                <div className="promotion">
                    <h3>PROMOTIONS</h3>
                </div>
                {this.props.promotions[0].barcodes.map(barcode => {
                        return (
                            <table key={"p" + barcode}>
                                <tbody>
                                <tr>
                                    <td>{getItemByBarcode(barcode).name}</td>
                                    <td>{this.props.promotions[0].type}</td>
                                </tr>
                                </tbody>
                            </table>
                        )
                    }
                )}
                <button
                    className="addToShoppingCart"
                    onClick={this.props.changePage}>
                    GO TO SHOPPING CART
                </button>
            </div>
        )
    }
}

export default ItemList