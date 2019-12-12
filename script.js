
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


/* quiero que cada mesa sea un objeto, que contenga el numero de mesa, la lista de productos
y la cuenta.*/

class Table  {
    constructor(num,products=[]){
        this.num= num;
        this.products=products;
    }
    get check (){
        let check=0;
        for (let producto of products){
            check += producto.price;
        }
        return `$${check}`
    }
}

/* quiero que cada producto sea un objeto, que contenga el nombre y el precio*/
class Producto {
    constructor(nombre, precio) {
        this.nombre= nombre;
        this.precio=precio;
    }
  //  modificarPrecio():,
}


/* pero como carajos hago para que los objetos interactuen con el html/mostrarlos en la lista
o sea crear el objeto y al mismo tiempo el ul? */


const tableList = document.querySelector("#tableList");
const addTableNum = document.querySelector("#tableName");
const addButton = document.querySelector("#addButton");
const newTable = event => {
    //const table = new Table;
    let li = document.createElement("li");
    li.classList.add="table";

    let tableNum = document.createElement("span");
    tableNum.innerHTML= addTableNum.value;
    //tableNum.innerHTML=table.num;
    li.appendChild(tableNum);

    let check = document.createElement("span");
    //check.innerHTML=table.check;

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
    let removeButton = document.createElement("button");
    removeButton.type="button";
    removeButton.id="deleteButton";
    removeButton.innerHTML="Eliminar"
    removeButton.addEventListener("click", ()=>{

    });
    remove.appendChild(removeButton);
    li.appendChild(remove);

    tableList.appendChild(li);
};

addButton.onclick=newTable;
