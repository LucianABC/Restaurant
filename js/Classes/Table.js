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
        let index = this.products.findIndex((item)=>{
            return item.product.name == producto;
        });
        
        if (index == -1) {
            let productTable=new TableProduct(producto, cant)
            this.products.push(productTable)
        } else {
        this.products[index].cant += cant;
        }
    }
    
    deleteProduct(producto, cant){
        let index = this.products.findIndex((item)=>{
             return item.product.name == producto;
        });
        
        if (this.products[index].cant == cant) {
        this.products.splice(index, 1);
        } else {
        this.products[index].cant -= cant;
        }
    }
    
}



try {
    module.exports = {
        Table
    }
 } catch (e) {}