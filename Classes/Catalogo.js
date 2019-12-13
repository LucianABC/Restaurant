//lista de productos 
const jsProducto =require('./Product.js'); 
const Product = jsProducto.Product;

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

    modifyProduct(name, newPrice, newName){
        for (let producto of this.catalog){
            if (producto.name == name) {
                if (newPrice!=undefined && newName!=undefined){
                    producto.price=newPrice
                    producto.name=newName
                } else if (newName==undefined){
                    producto.price=newPrice

                } else if (typeof newPrice=="string"){
                    producto.name=newPrice

                }
                console.log(producto);
                return producto
            }
        }
        //como hago si solo quiero modificar el preio o solo el nombre?
              
        
    }
}


module.exports = {
    Catalogo

}