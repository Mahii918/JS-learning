//singleton
// Object.create 

//object literals

const mySymbol=Symbol("Key1");

const jsUser={
    name:"Unique", // the letter name is taken as string, so we should see it as "name" //it can accessed through dot(shown below)
    "full name":"Unique Brain",      // it cannot be accessed through dot but only by string
    [mySymbol]:"myKey1",    //the syntax of using symbol is this..
    age:18,
    location:"Vizag",
    email:"unique@gmail.com",
    isLoggedIn:false,
    lastLogInDays:["Monday","Wednesday"]
}

// console.log(jsUser.email);        //one way to reach the value is thorugh key
// console.log(jsUser["email"]);     //other way through key.  //as email is string, so written as string

// console.log(jsUser.full name);    //wrong, as space cannot be there
// console.log(jsUser["full name"]);    //correct way

// console.log(jsUser[mySymbol]);      //syntax to access a symbol

jsUser.email = "unique@brain.com"     //to over ride the values

// Object.freeze(jsUser)     //freeze will not allow to make any changes to the values of the object.
jsUser.email="Unique@changed.com"   //this change will not be propagated or applied to email.   //also it will not show any error

// console.log(jsUser);      //here will see, after freeze, not changes were applied to the object
//                             also for key1, it will mentioed as [Symbol(key1)], because it is a symbol

// Adding a function into a object
jsUser.greeting = function(){
    console.log("Hello JS user")     // Before running this, the object should be unfreezed
}

// console.log(jsUser.greeting()) 

// console.log(jsUser.greeting)    // [Function (anonymous)] // it means fxn is not executed, but the reference of fxn is returned


jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)      // "this" means the current object which is mentioned before name of fxn
}

console.log(jsUser.greeting()) 
console.log(jsUser.greetingTwo())
