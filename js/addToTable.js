try {
    const jsManageTables = require('./manageTables.js')
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsTableProduct = require('./Classes/TableProduct.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const TableProduct= jsTableProduct.TableProduct;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const restaurant = jsManageTables.restaurant;
    //const addToMenuButton = jsManageMenu.addToMenuButton;
    
 } catch (e) {}
 const showMenu = document.querySelector("#addToMenuButton");


const showProductList = event => {
    let index = carta.menu.length -1;
    let product = carta.menu[index];

    let ul = document.querySelector("#tableProductsList");
    //no me esta agregando la clase
    let li = document.createElement("li");
    li.class="menuItem";
    let productSpan = document.createElement("span");
    productSpan.innerHTML=product.name;
    li.appendChild(productSpan);

    let cantSpan=document.createElement("span");
    let input = document.createElement("input");
    input.type="text";
    //no me esta agregando la clase
    input.classList.add="cantProd";
    cantSpan.appendChild(input);
    li.appendChild(cantSpan);

    ul.appendChild(li);
}

const addToTableButton = document.querySelector("#addToTableButton");

const addToTable = event => {
    let products = document.getElementsByClassName(".menuItem");
    for (let menuItem of products){
        let spans = menuItem.children;
        let product = spans[0].value;
        let cant = spans[1].children;
        cant = cant[0].value;
        
        let tableNum = document.querySelector("#selectTable");
        tableNum =tableNum.value;
        restaurant[tableNum].addProduct(product,cant);
    }
    //quiero un array con los productos ?
    
};

addToTableButton.onclick=addToTable;


try {
    module.exports = {
        showProductList,
        showMenu
    }
 } catch (e) {}