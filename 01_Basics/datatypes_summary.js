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

// console.log(typeof myObj)


const myFunction = function(){       //Function
    console.log("Hello world");
}


//-------------------------------------------------------------------------------------------------------------------

//memory is of two types: Stack (used in Primitive datatypes), Heap (used in Non-Primitive datatypes)

let myName="Unique Brain"

let anotherName=myName
anotherName="chaiaurcode"

console.log(anotherName)    //so, here from the above example, anotherName had a copy of myName, but when we changed anotherName
console.log(myName)         // it did not change the myName which was original...(Here, Stack memory is used..)


//HEAP MEMORY
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Unique@gmail.com"

console.log(userOne.email);     // So, here we will find that both will have same output because userTwo had the reference of
console.log(userTwo.email);     // userOne, which when changed in userOne, automatically changed in userOne. (--Heap Memory--) 
