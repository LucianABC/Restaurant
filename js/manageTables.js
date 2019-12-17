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
    //no me queda claro qué tiene que hacer este boton
    closeButton.type="button";
    closeButton.id="closeButton";
    closeButton.innerHTML="Cerrar";
    closeButton.addEventListener("click", ()=>{
        //getCheck
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
        let option = document.querySelector(`#option${tableNum}`);
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
};



const addTableButton = document.querySelector("#addTableButton");
addTableButton.onclick=newTable;





try {
    module.exports = {
        restaurant
    }
 } catch (e) {}
