
class Product {
    constructor(name, price) {
        this.name= name;
        this.price=price;
    }
}

try {
    module.exports = {
      Product
    }
} catch (e) {}