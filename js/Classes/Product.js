
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name= name;
        this.price=parseInt(price);
    }

}

try {
    module.exports = {
      Product
    }
} catch (e) {}