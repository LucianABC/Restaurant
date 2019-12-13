
const jsCheck =require('./Check.js'); 

const Check = jsCheck.Check;

class Table  {
    constructor(num){
        this.num= num;
        this.check = new Check;
    }
}



module.exports = {
    Table

}