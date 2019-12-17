
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

/*
test('',()=>{
    let catalogo1 = new Catalogo;
    catalogo1.addProduct("cafe",50);
    catalogo1.addProduct("capuccino", 75);
    //solo precio
    expect(catalogo1.modifyProduct("cafe",80)).toStrictEqual(catalogo1.catalog[0])
    //solo nombre AAAA Y ACA COMO HAGO NOSIERTO
    //expect(catalogo1.modifyProduct("capuccino",""))
    //todo
});*/

//TABLE

test('agregar prods a la mesa',()=>{
    carta.addProduct("Cafe",50);
    let table = new Table(2);
    table.addProduct("Cafe", 2);

    expect(table.products.length).toBe(1);

});

test('borrar prods de la mesa',()=>{
    carta.addProduct("Cafe",50);
    carta.addProduct("Medialuna", 20);

    let table = new Table(2);
    table.addProduct("Cafe", 2);
    table.addProduct("Medialuna", 2);
    
    table.deleteProduct("Cafe", 1);
    expect(table.products[0].cant).toBe(1);

    table.deleteProduct("Medialuna", 2);
    expect(table.products.length).toBe(1);

});