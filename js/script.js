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

/**
* Hacer un sistema para restaurant.
* Para esto necesitamos.
* 1. Lista de mesas - agregar, eliminar
* 2. Lista de productos con precio - Agregar, eliminar, modificar
* 
* Y que nos permita obtener
* 3. Una cuenta por mesa (la mesa se abre, se cargan los productos, y 
* se cierra pidiendo el total consumido. Lista de cuentas con objetos)
* 4. Obtener el producto mas vendido
* 
* Las funciones deben tener validaciones correspondientes.
* 
* Y esto debe estar todo accesible desde una pagina web.
* TESTS de las funciones que no requieran DOM
* 
* En el GUI (graphical user interface, o interfaz grafica de usuario), o sea
* la pagina, vamos a tener varias acciones relacionadas a inputs.
* Resetear el valor de los inputs cada vez que hago click en el boton que le 
* corresponde al input. O sea, si agrego un nuevo numero de mesa, el input
* debe quedar vacio una vez agregado.
* 
* Por ultimo, puede hacerse con objetos o con clases.
*/




const tableList = document.querySelector("#tablesList");
const addTableNum = document.querySelector("#tableName");
const addTableButton = document.querySelector("#addTableButton");

const newTable = event => {
    const table = new Table;
    let li = document.createElement("li");
    li.classList.add="table";

    let tableNum = document.createElement("span");
    table.num= addTableNum.value;
    tableNum.innerHTML=table.num;
    li.appendChild(tableNum);

    let check = document.createElement("span");
    check.innerHTML=table.check.ticket;

    let close = document.createElement("span");
    let closeButton = document.createElement("button");
    closeButton.type="button";
    closeButton.id="closeButton";
    closeButton.innerHTML="Cerrar";
    closeButton.addEventListener("click", ()=>{

    });
    close.appendChild(closeButton);
    li.appendChild(close);

    let remove = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.type="button";
    deleteButton.id="deleteButton";
    deleteButton.innerHTML="Eliminar"
    deleteButton.addEventListener("click", ()=>{
        let li = remove.parentElement;
        li.parentNode.removeChild(li);        
    });
    remove.appendChild(deleteButton);
    li.appendChild(remove);

    tableList.appendChild(li);
};

addTableButton.onclick=newTable;
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
