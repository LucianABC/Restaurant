try {
    
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsCheck = require('./Classes/Check.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
 } catch (e) {}
/*-----------------------M E N U----------------------------------------------*/
const addToMenuButton = document.querySelector("#addToMenuButton")
const newProduct = event => {
    const name = document.querySelector("#productName");
    name = name.value;
    const price = document.querySelector("#productPrice");
    price= price.value;
    const product = carta.addProduct(name,price);

    let ul = document.querySelector("#menu");
    let li = document.createElement("li");
    
    let idSpan = document.createElement("span");
    idSpan.innerHTML=product.id;
    li.appendChild(idSpan);

    let prodNameSpan = document.createElement("span");
    prodNameSpan.innerHTML = product.name;
    li.appendChild(prodNameSpan);

    let priceSpan = document.createElement("span");
    priceSpan.innerHTML=product.price;
    li.appendChild(priceSpan);

    let deleteButtonSpan = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.type="button";
    deleteButton.class="deleteButton";
    deletteButton.addEventListener("click", ()=>{
        let li = deleteButtonSpan.parentElement;
        li.parentNode.removeChild(li)
    });
    deleteButtonSpan.appendChild(deleteButton);
    li.appendChild(deleteButtonSpan);

    ul.appendChild(li);

}

addToMenuButton.onclick=newProduct;
