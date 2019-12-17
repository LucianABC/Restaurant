try {
    const jsTableProduct =require('./TableProduct.js'); 
    const TableProduct = jsTableProduct.TableProduct;
} catch (e) {}



class Table  {
    constructor(num){
        this.num= num;
        this._check;
        this.products=[];
    }

    get check() {
        let check = 0;
       for (let tableProduct of this.products) {
           let cant = tableProduct.cant;
           let price = tableProduct.product.price;
            check += price*cant;
       }
       this._check=check;
        return `$${check}`
    }

    addProduct(producto,cant) {
        let productTable=new TableProduct(producto, cant)
        this.products.push(productTable)
    }
    
    deleteProduct(producto){
        let index = this.products.findIndex((item)=>{
             return item.product.name == producto;
         });
        this.products.splice(index, 1);
     }
    
}



try {
    module.exports = {
        Table
    }
 } catch (e) {}