 try {
    const jsProducto = require('./Classes&Objects/Product.js'); 
    const jsTable = require('./Classes&Objects/Table.js');
    const jsTableProduct = require('./Classes&Objects/TableProduct.js');
    const jsCarta = require('./Classes&Objects/Carta.js');
    const jsRestaurant = require('./Classes&Objects/Restaurant.js')
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const restaurant = jsRestaurant.restaurant;
    const tableProduct= jsTableProduct.TableProduct;
} catch (e) {}


const seeMenu = event => {
    let index = carta.menu.length -1;
    let product = carta.menu[index];

    let ul = document.querySelector("#tableProductsList");
    
    let li = document.createElement("li");
    li.classList.add("menuItem");
    li.id=product.name;
    let productSpan = document.createElement("span");
    productSpan.innerHTML=product.name;
    li.appendChild(productSpan);

    let cantSpan=document.createElement("span");
    let input = document.createElement("input");
    input.type="text";
    input.value=0;
    
    input.classList.add("cantProd");
    cantSpan.appendChild(input);
    li.appendChild(cantSpan);

    ul.appendChild(li);
};

const addToTable = event => {
    let products = document.querySelectorAll(".menuItem");
    let tableSelect = document.querySelector("#selectTable");
    let table= restaurant[tableSelect.value];

    for (let menuItem of products){
        let spans = menuItem.children;
        let product = spans[0].innerHTML;
        let cant = spans[1].children;
        cant = cant[0];
        table.addProduct(product,cant.value);
        cant.value=0;
    }
    tableSelect.value=-1;
};

const addToTableButton = document.querySelector("#addToTableButton");
addToTableButton.onclick=addToTable;


try {
    module.exports = {
        seeMenu,
    }
 } catch (e) {}