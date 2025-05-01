// 1.Primitive  (These are generally call by value and generally the copy of these values is given to us.)

// 7 Types:  String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100     //Number
const score1=100.3  //Number, whether decimal or integers,In JS both are treated as Number only

const cond=false    //Boolean
const temp=null     //null
let userEmail;      //undefined, is stored in userEmail

const id=Symbol('123')
const anotherId=Symbol('123')
// console.log(id===anotherId);   //false, Though both appear to be same but Output is false because Symbol takes everything uniquely

const BigNum=123456789987654n;    //bigint
// console.log(typeof BigNum)



// 2.Reference (or Non-primtive)

// Arrays, Objects, Functions 

const heros=["Dhoni","Virat","Rohit"];    //Array

// console.log(typeof heros)


let myObj = {                  //Object
    name: "Kishore",
    age: 22,
}

console.log(typeof myObj)


const myFunction = function(){       //Function
    console.log("Hello world");
}

