
 try {
    const jsProducto = require('./Classes&Objects/Product.js'); 
    const jsTable = require('./Classes&Objects/Table.js');
    const jsTableProduct = require('./Classes&Objects/TableProduct.js');
    const jsCheck = require('./Classes&Objects/TableProduct.js'); 
    const jsCarta = require('./Classes&Objects/Carta.js');
    const jsRestaurant = require('./Classes&Objects/Restaurant.js')
    const Check = jsCheck.Check;
    const Product = jsProducto.Product;
    const Table = jsTable.Table;
    const carta = jsCarta.carta;
    const restaurant = jsRestaurant.restaurant;
    const TableProduct= jsTableProduct.TableProduct;
 } catch (e) {}


const selectProdsPerTable = document.querySelector("#selectProdsPerTable");

const seeTableProducts = event => {
    const ul = document.querySelector("#prodsPerTableList");
    ul.innerHTML=`<header>
        <span>Producto</span>
        <span>Cantidad</span>
        <span>Precio</span>
        <span>Eliminar</span>
    </header>`;

    if (selectProdsPerTable.value != -1) {
        let tableNumber = selectProdsPerTable.value;
        let table=restaurant[tableNumber];
        let tableProductList = restaurant[tableNumber].products;
        

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

            let spanDelete = document.createElement("span");
            let deleteProd = document.createElement("button");
            deleteProd.type="button";
            deleteProd.id="deleteProd";
            deleteProd.innerHTML="Eliminar"
            deleteProd.addEventListener("click", ()=>{
                let li = spanDelete.parentElement;
                li.parentNode.removeChild(li);
                table.deleteProduct(spanName.innerHTML, item.cant);

            });
            spanDelete.appendChild(deleteProd);
            li.appendChild(spanDelete);
            
            ul.appendChild(li);
       
        }
    }
}

selectProdsPerTable.addEventListener("change", seeTableProducts);
