const navButtons = document.querySelectorAll(".navBttn");
const cards = document.querySelectorAll(".card");

const navTables = document.querySelector("#navTables");
const tablesCard = document.querySelector("#manageTables")

const navAddTableProd = document.querySelector("#navAddTableProd");
const tableProductsCard = document.querySelector("#tableProducts");

const navSeeTableProd = document.querySelector("#navSeeTableProd");
const prodsPerTableCard =document.querySelector("#prodsPerTable")

const navMenu = document.querySelector("#navMenu");

const menuProductsCard =document.querySelector("#products");


navTables.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navTables.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    tablesCard.classList.remove("hide");
});

navAddTableProd .addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navAddTableProd.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    tableProductsCard.classList.remove("hide");
});

navSeeTableProd.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navSeeTableProd.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    prodsPerTableCard.classList.remove("hide");
});

navMenu.addEventListener("click", ()=>{
    navButtons.forEach((button)=>{
        button.classList.remove("active");
    })
    navMenu.classList.add("active");

    cards.forEach((card)=>{
        card.classList.add("hide");
    })
    menuProductsCard.classList.remove("hide");
});

