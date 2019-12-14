try {

    const jsProducto =require('./Product.js'); 
    const Product = jsProducto.Product;

} catch (e) {}



//lista de productos 
const carta = {
    constructor(){
        this.carta= [];
    },

    deleteProduct(name){
        let index = this.carta.findIndex((producto)=>{
            return producto.name == name;
        });
        this.carta.splice(index, 1);
    },

    addProduct(name, price){
        let product = new Product (name, price);
        this.carta.push(product);
    },

    modifyProduct(name, newPrice, newName){
        for (let producto of this.carta){
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
        carta

    }
 } catch (e) {}