import database from "./database"

class Model{
    constructor(){
        this.itemCount = database.loadAllItems().map( item => {
            return {key:item.barcode, count: 0};
        });
    }
}