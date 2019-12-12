import { isModuleDeclaration } from "@babel/types";
const jsCheck =require('./Classes/Check.js'); 
const Check = jsCheck.Check;

/* quiero que cada mesa sea un objeto, que contenga el numero de mesa, la lista de productos
y la cuenta.*/

class Table  {
    constructor(num,products){
        this.num= num;
        this.check = new Check;
    }
    
}



module.exports = {
    Table

}