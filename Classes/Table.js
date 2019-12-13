try {
    const jsCheck =require('./Check.js'); 
    const Check = jsCheck.Check;
} catch (e) {}



class Table  {
    constructor(num){
        this.num= num;
        this.check = new Check;
    }
}


try {
    module.exports = {
        Table
    }
 } catch (e) {}