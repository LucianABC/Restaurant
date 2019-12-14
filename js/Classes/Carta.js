try {

    const jsProducto =require('./Product.js'); 
    const Product = jsProducto.Product;

} catch (e) {}



//lista de productos 
const carta = { 
     menu: [],
 

    deleteProduct(name){
        let index = this.menu.findIndex((producto)=>{
            return producto.name == name;
        });
        this.menu.splice(index, 1);
    },

    addProduct(name, price){
        let id= this.menu.length;
        let product = new Product (id, name, price);
        this.menu.push(product);

        return product
    }, 

    modifyProduct(name, newPrice, newName){
        for (let producto of this.menu){
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