try {
    
    const jsProducto = require('./Classes/Product.js'); 
    const jsTable = require('./Classes/Table.js'); 
    const jsCheck = require('./Classes/TableProduct.js'); 
    const jsCarta = require('./Classes/Carta.js');
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
 } catch (e) {}

const restaurant = {

};

const tableList = document.querySelector("#tablesList");
const addTableNum = document.querySelector("#tableName");

const newTable = event => {
    
    let li = document.createElement("li");
    li.classList.add("table");

    let tableNum = addTableNum.value;
    
    const table = new Table(tableNum);
    restaurant[tableNum] = table;

    let tableNumSpan = document.createElement("span");
    tableNumSpan.innerHTML=table.num;
    li.appendChild(tableNumSpan);

    let checkSpan = document.createElement("span");
    let ticket = table.check;
    checkSpan.innerHTML= ticket;
    li.appendChild(checkSpan);

    let closeSpan = document.createElement("span");
    let closeButton = document.createElement("button");
    closeButton.type="button";
    closeButton.id="closeButton";
    closeButton.innerHTML="Cerrar";
    closeButton.addEventListener("click", ()=>{

        
        let modal = document.querySelector("#ticketModal");
        let ul = document.querySelector("#modalUl");
        let ticket = document.querySelector("#ticket");
        let tableProductList = table.products;
        let mesaH4 = document.createElement("h4");
        mesaH4.innerHTML = `Mesa ${table.num}`;

        let header = document.querySelector("#modalHeader");
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
        let div = document.createElement("div");
        div.style.display="flex"
        let span = document.createElement("span");
        let h3 = document.createElement("h3");
        h3.innerHTML="TOTAL:"
        span.appendChild(h3);
        div.appendChild(span);
        let spanTotal = document.createElement("span");
        let totalH3=document.createElement("h3");
        totalH3.innerHTML = table.check;
        spanTotal.appendChild(totalH3);
        div.appendChild(spanTotal);
        ticket.appendChild(div);

        modal.style.display= "block";

        let close = document.querySelector(".close");
        close.onclick = function() {
          modal.style.display = "none";
          ul.innerHTML="";
          mesaH4.parentNode.removeChild(mesaH4);
          div.parentNode.removeChild(div);
        }
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

    let selectMenu = document.querySelector("#selectTable");
    let tableOption = document.createElement("option");
    tableOption.value=tableNum;
    tableOption.id=`option${tableNum}`
    tableOption.innerHTML=tableNum;
    selectMenu.appendChild(tableOption);

    let selectAddProdsPerTable = document.querySelector("#selectProdsPerTable");
    tableOption = document.createElement("option");
    tableOption.value=tableNum;
    tableOption.id=`option${tableNum}`
    tableOption.innerHTML=tableNum;
    selectAddProdsPerTable.appendChild(tableOption);

};

const addTableButton = document.querySelector("#addTableButton");
addTableButton.onclick=newTable;





try {
    module.exports = {
        restaurant
    }
 } catch (e) {}
