const jsProducto =require('./Classes/Product.js'); 
const jsCatalogo = require('./Classes/Catalogo.js');
const Check = jsCheck.Check;
const Product = jsProducto.Product;
const Catalogo = jsCatalogo.Catalogo;

class Check {
    constructor(){
        this.products = [];
        this._ticket;
        for (let product of products){
            _ticket += product[0]*(product[1].price);
        }
    }
    
    get ticket (){     
        return `$${ticket}`
    }

    addProduct(cant, productName){
        //como sé en qué catalogo buscar? 
        //cuando y donde se crea el catalogo? esta bien asumir que es una variable global?
        let product = [cant]
        for (let i =0; i++; i<catalog.length){    
            if (productName == catalog[i].name) {
                product.push(catalog[i]);
            }
        }
        
        this.products.push(product)
    }
    
}




module.exports = {
    Check

}