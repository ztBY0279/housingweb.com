const { log } = require("console");

class Temp{
   a = 10;
    b = 20;
     c = 30;
    constructor(){
        console.log("Constructor is called");
    }

    getValue(){
     let b = 100;
     console.log('the value of b is ',b);
     return this.a + b;
    }
}

const obj = new Temp();
console.log(obj.a,obj.b,obj.c,obj.getValue());

const obj1 = {
    name:"bharat yadav",
    age:21,
    city:"indore",
    nationality:"Indian"
}
console.log('the value of obj1 is ',obj1)
