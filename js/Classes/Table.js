try {
    const jsCheck =require('./Check.js'); 
    const Check = jsCheck.Check;
} catch (e) {}



class Table  {
    constructor(num, productos=[]){
        this.num= num;
        this._check=0;
        this.productos=productos;
    }

    get check() {
        const check = new Check(this.productos);
        this._check = check;

        return check
    }
    
}



try {
    module.exports = {
        Table
    }
 } catch (e) {}