//va a tener un array de productos y el total
class Check {
    constructor(){
        this.products = [];
    }
    
    get ticket (){
        let ticket=0;
        for (let product of products){
            ticket += product.price;
        }
        return `$${ticket}`
    }

    addProducts(products){
        this.products.push(products)
    }
}




module.exports = {
    Check

}