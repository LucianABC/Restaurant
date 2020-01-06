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

const addTableToSelect = () => {

};
