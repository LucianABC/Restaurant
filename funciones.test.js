
const jsProducto = require('./Classes/Product.js'); 
const jsTable = require('./Classes/Table.js'); 
const jsCheck = require('./Classes/Check.js'); 
const jsCatalogo = require('./Classes/Catalogo.js');
const Check = jsCheck.Check;
const Product = jsProducto.Product;
const Table = jsTable.Table;
const Catalogo = jsCatalogo.Catalogo;

//CATALOGO 

test('agregar prods al catalogo',()=>{
    let catalogo1 = new Catalogo;
    catalogo1.addProduct("cafe",50);
    catalogo1.addProduct("capuccino", 75);

    expect(catalogo1.catalog.length).toBe(2)
});

test('modificar prods del catalogo',()=>{
    
    let catalogo1 = new Catalogo;
    catalogo1.addProduct("cafe",50);
    catalogo1.addProduct("capuccino", 75);
    //solo precio
    expect(catalogo1.modifyProduct("cafe",80)).toStrictEqual(catalogo1.catalog[0])
    //solo nombre AAAA Y ACA COMO HAGO NOSIERTO
    expect(catalogo1.modifyProduct("capuccino"))
    //todo
});