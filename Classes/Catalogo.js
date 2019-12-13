try {

    const jsProducto =require('./Product.js'); 
    const Product = jsProducto.Product;

} catch (e) {}



//lista de productos 
class Catalogo {
    constructor(){
        this.catalog = [];
    }

    deleteProduct(name){
        let index = this.catalog.findIndex((producto)=>{
            return producto.name == name;
        });
        this.catalog.splice(index, 1);
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
                return producto
            }
        }
        //como hago si solo quiero modificar el precio o solo el nombre?
        //(aca lo hice pero me suena que hay alguna forma mas linda)
              
        
    }
}

try {
    module.exports = {
        Catalogo

    }
 } catch (e) {}