try {
    const jsAddToTable = require('./addToTable.js')
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsCheck = require('./Classes/TableProduct.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const addToTable = jsAddToTable.showProductList;
    const showMenu = jsAddToTable.showMenu;
 } catch (e) {}

const addToMenuButton = document.querySelector("#addToMenuButton")
const newProduct = event => {
    let name = document.querySelector("#productName");
    name = name.value;
    let price = document.querySelector("#productPrice");
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
    priceSpan.innerHTML= `$${product.price}` 
    li.appendChild(priceSpan);

    let deleteButtonSpan = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.type="button";
    deleteButton.class="deleteButton";
    deleteButton.innerHTML="Eliminar";
    deleteButton.addEventListener("click", ()=>{
        let li = deleteButtonSpan.parentElement;
        li.parentNode.removeChild(li)
        carta.deleteProduct(product.name);

        li = document.querySelector(`#${product.name}`);
        li.parentNode.removeChild(li)
    });
    deleteButtonSpan.appendChild(deleteButton);
    li.appendChild(deleteButtonSpan);

    ul.appendChild(li);
    
}


addToMenuButton.onclick=newProduct;
showMenu.addEventListener("click", showProductList);



