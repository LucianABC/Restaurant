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



const tableList = document.querySelector("#tablesList");
const addTableNum = document.querySelector("#tableName");

const newTable = event => {
    
    let li = document.createElement("li");
    li.classList.add="table";

    let tableNum = document.createElement("span");
    const table = new Table(addTableNum.value);
    // el objeto que creo tiene uqe ser global?
    //hay alguna forma de que se cree con el valor del input?
    //(x ej const 2 = new Table(2) o algo asi)
    tableNum.innerHTML=table.num;
    li.appendChild(tableNum);

    let check = document.createElement("span");
    let ticket = table.check.ticket;
    check.innerHTML= ticket;
    li.appendChild(check);

    let close = document.createElement("span");
    let closeButton = document.createElement("button");
    //no me queda claro qué tiene que hacer este boton
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

const addTableButton = document.querySelector("#addTableButton");
addTableButton.onclick=newTable;