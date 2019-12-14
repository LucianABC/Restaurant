try {
    const jsProducto =require('./Product.js'); 
    const jsCarta = require('./Carta.js');
    const Product = jsProducto.Product;
    const carta = jsCarta.carta;
 } catch (e) {}




class Check {
    constructor(){
        this.products = [];
        this._ticket=0;
        for (let product of this.products){
            _ticket += product[0]*(product[1].price);
        }
    }
    
    get ticket (){     
        return `$${this._ticket}`
    }

    addProduct(cant, productName){
        //si el producto ya esta, sumar la cantidad
        //cuando y donde se crea el catalogo? 
        let item = {cantidad: cant}
        for (let i =0; i++; i<carta.carta.length){//como sé en qué catalogo buscar? 
            if (productName == carta.carta[i].name) {
                item.producto=carta.carta[i]; //aca me crea el indice, no?
            }
        }
        this.products.push(item)
    }

    deleteProduct(){
       let index = this.products.findIndex((item)=>{
            return item.producto.name == name;
        });
        this.products.splice(index, 1);
    }
    
    modifyProduct(){

    }
}



try {
    module.exports = {
    Check
    }
 } catch (e) {}

