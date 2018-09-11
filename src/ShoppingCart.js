import React, {Component} from 'react';
import {loadPromotions} from "./database";

export default class ShoppingCart extends Component {

    render() {
        const promotionCodes = loadPromotions()[0].barcodes;
        let totalPrice = 0;
        return (
            <div>
                <div className="itemContainer">
                    <h2>SHOPPING CART</h2>
                    {this.props.items.map(item => {
                        const promotionInfo = (promotionCodes.includes(item.barcode) ? "（优惠后）" : "");
                        const subPrice = item.price * (!promotionCodes.includes(item.barcode) ? item.quantity:
                            item.quantity - Math.floor(item.quantity / 3));
                        totalPrice += subPrice;
                        return (
                            <div className="item" key={item.barcode}>
                                <span className="item-name">{item.name}</span>
                                <span className="item-price">单价{item.price}元,共{item.quantity}{item.unit}</span>
                                <span>小计：{subPrice}元{promotionInfo}</span>
                            </div>
                        )
                    })}
                    <div className="promotion"><h3>TOTAL PRICE : {totalPrice}元</h3></div>
                    <button className="addToShoppingCart" onClick={this.props.changePage}>
                        BACK TO ITEMLIST
                    </button>
                    <button className="addToShoppingCart" onClick={this.props.logCart}>
                        SUBMIT
                    </button>
                </div>
            </div>
        )
    }
}