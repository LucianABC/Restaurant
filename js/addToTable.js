try {
    
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsCheck = require('./Classes/Check.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    //const addToMenuButton = jsManageMenu.addToMenuButton;
    
 } catch (e) {}
 const showMenu = document.querySelector("#addToMenuButton")


const showProductList = event => {
    let index = carta.menu.length -1;
    let product = carta.menu[index];

    let ul = document.querySelector("#tableProductsList");

    let li = document.createElement("li");
    
    let productSpan = document.createElement("span");
    productSpan.innerHTML=product.name;
    li.appendChild(productSpan);

    let cantSpan=document.createElement("span");
    let input = document.createElement("input");
    input.type="text";
    input.id="cantProd";
    cantSpan.appendChild(input);
    li.appendChild(cantSpan);

    ul.appendChild(li);
}

showMenu.addEventListener("click", showProductList);

try {
    module.exports = {
        showProductList

    }
 } catch (e) {}