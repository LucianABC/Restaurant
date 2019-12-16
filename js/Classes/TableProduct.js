try {
    const jsProducto =require('./Product.js'); 
    const jsCarta = require('./Carta.js');
    const Product = jsProducto.Product;
    const carta = jsCarta.carta;
 } catch (e) {}


class TableProduct {
    constructor(product,cant){
        this.product;
        for(let item of carta.menu){
            if (product==item.name) {
                this.product=item;
            }
        }
        this.cant=cant;
    }
}


try {
    module.exports = {
    TableProduct
    }
 } catch (e) {}

