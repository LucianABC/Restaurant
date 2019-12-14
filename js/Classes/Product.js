
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name= name;
        this._price=price;
    }

    get price () {
        return `$${this._price}`
    }
}

try {
    module.exports = {
      Product
    }
} catch (e) {}