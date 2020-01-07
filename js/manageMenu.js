 
 try {
    const jsProducto = require('./Classes&Objects/Product.js'); 
    const jsTable = require('./Classes&Objects/Table.js');
    const jsCheck = require('./Classes&Objects/TableProduct.js'); 
    const jsCarta = require('./Classes&Objects/Carta.js');
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const TableProduct= jsTableProduct.TableProduct;
 } catch (e) {}

const addToMenuButton = document.querySelector("#addToMenuButton");

const addToProductList = (product) => { 
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
};

const newProduct = event => {
    let nameInput = document.querySelector("#productName");
    let name = nameInput.value;
    let priceInput = document.querySelector("#productPrice");
    let price= priceInput.value;
    const product = carta.addProduct(name,price);

    addToProductList(product);
    seeMenu();
    nameInput.value = "";
    priceInput.value="";
}


addToMenuButton.onclick=newProduct;




