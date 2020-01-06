try {
    
    const jsProducto = require('./Classes&Objects/Product.js'); 
    const jsTable = require('./Classes&Objects/Table.js'); 
    const jsCheck = require('./Classes&Objects/TableProduct.js'); 
    const jsCarta = require('./Classes&Objects/Carta.js');
    const jsRestaurant = require('./Classes&Objects/Restaurant.js')
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const restaurant = jsRestaurant.restaurant;
 } catch (e) {}


const tableList = document.querySelector("#tablesList");
const addTableNum = document.querySelector("#tableName");

const createTicket = (table) => {
    let modal = document.querySelector("#ticketModal");
    modal.style.display= "block";
    
    let close = document.querySelector("#closeTicket");
    close.onclick = function() {
      modal.style.display = "none";
      ul.innerHTML="";
      mesaH4.parentNode.removeChild(mesaH4);
    }

    const printButton = document.querySelector("#printButton");
    printButton.addEventListener("click", () => {
        print();
    });

    let ul = document.querySelector("#modalUl");
    let ticket = document.querySelector("#ticket");
    let tableProductList = table.products;
    let mesaH4 = document.createElement("h4");
    mesaH4.innerHTML = `Mesa ${table.num}`;

    const header = document.querySelector("#modalHeader");
    header.appendChild(mesaH4);

    for (let item of tableProductList) {
        let li = document.createElement("li");
        let spanName = document.createElement("span");
        spanName.innerHTML= item.product.name;
        li.appendChild(spanName);

        let spanQuant = document.createElement("span");
        spanQuant.innerHTML = item.cant;
        li.appendChild(spanQuant);

        let spanPrice = document.createElement("span");
        spanPrice.innerHTML=(item.product.price * item.cant);
        li.appendChild(spanPrice);

        ul.appendChild(li);
    }
    const totalH3 = document.querySelector("#ticketTotal");
    totalH3.innerHTML = table.check;

    let checkSpan = document.querySelector(`#table${table.num}-checkSpan`);
    checkSpan.innerHTML = table.check;
};

const addTableToTableList = (table) => {
    let li = document.createElement("li");
    li.classList.add("table");

    let tableNumSpan = document.createElement("span");
    tableNumSpan.innerHTML=table.num;
    li.appendChild(tableNumSpan);

    let checkSpan = document.createElement("span");
    checkSpan.id=`table${table.num}-checkSpan`;
    let ticket = table.check;
    checkSpan.innerHTML= ticket;
    li.appendChild(checkSpan);

    let closeSpan = document.createElement("span");
    let closeButton = document.createElement("button");
    closeButton.type="button";
    closeButton.id="closeButton";
    closeButton.innerHTML="Cerrar";
    closeButton.addEventListener("click", ()=>{
        createTicket(table);
    });
    closeSpan.appendChild(closeButton);
    li.appendChild(closeSpan);

    let deleteSpan = document.createElement("span");
    let deleteButton = document.createElement("button");
    deleteButton.type="button";
    deleteButton.id="deleteButton";
    deleteButton.innerHTML="Eliminar"
    deleteButton.addEventListener("click", ()=>{
        let li = deleteSpan.parentElement;
        li.parentNode.removeChild(li);
        let option = document.querySelector(`#selectTable > #option${tableNum}`);
        option.parentNode.removeChild(option);

        option= document.querySelector(`#selectProdsPerTable > #option${tableNum}`);
        option.parentNode.removeChild(option);

    });
    deleteSpan.appendChild(deleteButton);
    li.appendChild(deleteSpan);

    tableList.appendChild(li);
};

const addTableToSelect = (tableNumber) => {
    let selectMenu = document.querySelector("#selectTable");
    let tableOption = document.createElement("option");
    tableOption.value=tableNumber;
    tableOption.id=`option${tableNumber}`
    tableOption.innerHTML=tableNumber;
    selectMenu.appendChild(tableOption);

    let selectAddProdsPerTable = document.querySelector("#selectProdsPerTable");
    tableOption = document.createElement("option");
    tableOption.value=tableNumber;
    tableOption.id=`option${tableNumber}`
    tableOption.innerHTML=tableNumber;
    selectAddProdsPerTable.appendChild(tableOption);
};

const newTable = event => {
    let tableNum = addTableNum.value;
    const table = new Table(tableNum);
    restaurant[tableNum] = table;
    
    addTableToTableList(table);
    addTableToSelect(tableNum);
};

const addTableButton = document.querySelector("#addTableButton");
addTableButton.onclick=newTable;


