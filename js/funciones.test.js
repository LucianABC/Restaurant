
    const jsTableProduct = require('./Classes/TableProduct.js');
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const TableProduct = jsTableProduct.TableProduct;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    

//CARTA
beforeEach(() => {
   carta.menu = [];
  });
  
test('agregar prods a la carta',()=>{
    carta.addProduct("Cafe",50);
    carta.addProduct("Medialuna", 20);

    expect(carta.menu.length).toBe(2)
});

test('eliminar prods de la carta',()=>{
    carta.addProduct("Cafe",50);
    carta.addProduct("Medialuna", 20);
    carta.deleteProduct("Cafe");
    expect(carta.menu.length).toBe(1);
});

//TABLE

test('agregar prod nuevo a la mesa',()=>{
    carta.addProduct("Cafe",50);
    let table = new Table(2);
    table.addProduct("Cafe", 2);

    expect(table.products.length).toBe(1);
});

test('agregar prods existente a la mesa',()=>{
    carta.addProduct("Cafe",50);
    let table = new Table(2);
    table.addProduct("Cafe", 2);
    table.addProduct("Cafe", 3)

    expect(table.products[0].cant).toBe(5);
});

test('borrar prods de la mesa',()=>{
    carta.addProduct("Cafe",50);
    carta.addProduct("Medialuna", 20);

    let table = new Table(2);
    table.addProduct("Cafe", 2);
    table.addProduct("Medialuna", 2);
    
    table.deleteProduct("Cafe", 1);
    expect(table.products[0].cant).toBe(1);
});

test('borrar toda la cantidad de un item de la mesa',()=>{
    carta.addProduct("Cafe",50);
    carta.addProduct("Medialuna", 20);

    let table = new Table(2);
    table.addProduct("Cafe", 2);
    table.addProduct("Medialuna", 2);

    table.deleteProduct("Medialuna", 2);
    expect(table.products.length).toBe(1);
});