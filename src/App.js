import React, {PureComponent} from "react";
import {loadAllItems, loadPromotions} from "./database";
import ItemList from "./ItemList";
import ShoppingCart from "./ShoppingCart";


class App extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            items: loadAllItems(),
            promotions: loadPromotions(),
            listPage: true,
            cart: [],
        };
    }

    onCountChange(item){
        if (this.state.cart.filter(cur => cur.barcode === item.barcode).length > 0) {
            this.state.cart.forEach(cur => {
                if(cur.barcode === item.barcode){
                    cur.count = item.count;
                }
            });
            this.setState({cart: this.state.cart});
        } else {
            this.setState({cart: [...this.state.cart, item]});
        }
    };

    logCart(){
        const result = [];
        this.state.cart.forEach(item => {
            result.push(`${item.barcode}-${item.quantity}`);
        });
        alert(result);
        this.setState({cart: []});
    };


    render() {
        return (
            <div>
                {this.state.listPage ?
                    (<ItemList
                        items={this.state.items}
                        promotions={this.state.promotions}
                        changePage={() => {this.setState({listPage: false})}}
                        onCountChange={this.onCountChange.bind(this)}
                    />)
                    :
                    (<ShoppingCart
                        items={this.state.cart}
                        changePage={() => this.setState({listPage: true})}
                        logCart={this.logCart.bind(this)}
                    />)
                }
            </div>
        );
    }
}

export default App;
