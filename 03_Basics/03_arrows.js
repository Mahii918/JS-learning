//arrows

const user={
    username:"Unique",
    price:"999",

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`) //when we are referring to current context,so we write this.username
//                                                            here, the current context is the user object
        // console.log(this);  // to see what 'this' means //this will print the user object when the function is called (line 14)
    }
}

// user.welcomeMessage()     //Unique ,welcome to website

// user.username="Khan"          // here, we have changed the username to Khan
// user.welcomeMessage()    //Khan ,welcome to website

// console.log(this); //here we will see what 'this' means in node region //{} //because in node environment, this refers to 
//                   empty object because there is no context in global   // whereas if we do the same thing in inspect/browser
//                   it will show up window object because when we an run on browser, the most global object is window object..


// function chai(){
//     let username="Unique"

//     console.log(this.username);
    
// }

// chai()   //undefined // because this only works on objects but not on functions or any other

//-------------------------------------------------------------------------------------------

// const chai=function(){
//     let username="Unique"

//     console.log(this.username);
// }

// chai()    //undefined

//------------------------------------------------------------------------------------------------

// const chai=() => {                         //Arrow function       //remove keyword 'function' and add an arrow
//     let username="Unique"

//     console.log(this.username);
// }

// chai()     //undefined        //the result remains the same

//--------------------------------------------------------------------------------------------------------------

// () => {}                  //basic syntax of arrow fxn    //it can also be stored in a variable

// const addTwo= (num1,num2) => {         //implicit return , when we are using return keyword
//     return num1+num2
// }

// console.log(addTwo(3,4));    //7

//-----------------------------------------------------------------------------------------------

// const addTwo = (num1,num2) => num1 + num2      // for one line statement, we can directly write the arrow fxn like this      
// //              or (both are same)             // with curly braces , return keyword is must, but with small brackets (), 
// const addTwo = (num1,num2) => (num1 + num2)    //return statement should not be there    //implicit return     

// console.log(addTwo(3,4));    //7
