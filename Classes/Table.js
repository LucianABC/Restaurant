const jsProducto =require('./Classes/Product.js'); 
const jsCheck =require('./Classes/Check.js'); 
const jsCatalogo = require('./Classes/Catalogo.js');
const Check = jsCheck.Check;
const Product = jsProducto.Product;
const Catalogo = jsCatalogo.Catalogo;

/* quiero que cada mesa sea un objeto, que contenga el numero de mesa, la lista de productos
y la cuenta.*/

class Table  {
    constructor(num,products){
        this.num= num;
        this.check = new Check;
    }
    
}



module.exports = {
    Table

}