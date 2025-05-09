// truthy and falsy values

// const userEmail="h@hitesh.ai"      //true (any non empty string is taken as true)   // Got the user Email
// const userEmail=""               //false (empty string is taken as false)    //Dont have user Email
const userEmail=[]                 //true         //empty array is taken as true

if(userEmail) console.log("Got the user Email");
else console.log("Dont have user Email");




//FALSY VALUES
// false, 0, -0, 0n (in BigInt we write 0n), "", null, undefined, NaN


//TRUTHY VALUES
//"0", 'false', " ", [], {}, function(){}, 


//to check if array is empty
const arr=[]
// if(arr.length===0) console.log("Array is empty")


// to check empty object
const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty")      //Object.keys(obj_name) gives array of all the keys present in the object  
// }                                       // using .length to it , we can get it


// console.log(false==0);    //true
// console.log(0=='')        //true
// console.log(false=='')    //true

//-------------------------//-----------------------//---------------------//-----------------//----------------------//---

//Nullish Coalescing Operator (??) : null  undefined
// Its is generally used, when there is a chance of getting a null or undefined value to a variable, but we dont want that, so 
// keep a value for safety rather than assigning a null or undefined value

let val1;
// val1= 5 ?? 10      //val1=5

// val1=null ?? 10      //val1=10

// val1=undefined ?? 15    //val1=15

// val1 =undefined ?? 5 ?? 11     // it takes the first non-null or non-defined value   // so, val1=5

console.log(val1);


//TERNARY Operator 
// condition ? true_statement : false_statement         //syntax of ternary operator

const price=100

price>80 ? console.log("Price strictly greater than 80") : console.log("Price less than or equal to 80")

