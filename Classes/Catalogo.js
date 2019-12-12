//lista de productos 

class Catalogo {
    constructor(){
        this.catalog = [];
    }

    deleteProduct(){

    }

    addProduct(name, price){
        let product = new Product (name, price);
        this.catalog.push(product);
    }

    modifyProduct(name, newPrice){
        name.price=newPrice;
        //si ya lo pushee no se modifica en el array, no?
    }
}


module.exports = {
    Catalogo

}