// function

function sayMyName(){
    console.log("U")
    console.log("N");
    console.log("I");
    console.log("Q");
    console.log("U");
    console.log("E");
}

// sayMyName     // this is reference of the function
// sayMyName()      // this is execution of fxn

// function addTwoNumbers(num1,num2){      //we dont give the datatype of num1 and num2  //here num1 and num2 are called parameters
//     console.log(num1+num2)
// }

// addTwoNumbers(3,4)     //7       //here 3,4 are arguments   //difference between parameters and arguments
// addTwoNumbers(3,"4")   //34    //34 is string here      //here, js uses its brain and tries to find the output on its own 
// addTwoNumbers(3,"a")   //3a

// const result=addTwoNumbers(5,1); //6 // here, result does not store the value of fxn because the fxn is not returning the value
// console.log("result: ",result);      //undefined        //because no value was stored in result


function addTwoNumbers(num1,num2){      //we dont give the datatype of num1 and num2  //here num1 and num2 are called parameters
    // let result=num1+num2
    // return result

    //or 
    
    return num1+num2       //both are same
}

const result=addTwoNumbers(5,1);      //here, now nothing is printed, because we have returned the result
// console.log("result: ",result);       // result: 6


function loginUserMessage(username){
    if(username === undefined){                             // or if(!uername)    both are same
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Mr.Khan"))       //Mr.Khan just logged in
// console.log(loginUserMessage(""))                 // just logged in    //as empty string was passed, so empty string is printed
// console.log(loginUserMessage())                   //undefined just logged in    //as no argument was given, so undefined
//                                                  Therefore we added if else statements to the fxn


function calculateCartPrice(...number1){            //...n1 is rest operator, looks like spread operator, but both are not same
    return number1                                                //we use this rest operator to pass multiple values
}

// console.log(calculateCartPrice(1,2,3,4))              //[ 1, 2, 3, 4 ]


const user={
    username:"Unique",
    price:"199"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  //as the required object is in the argument
}

// handleObject(user)      //Username is Unique and price is 199

//or we can also the arguments as given below

// handleObject({               //therefore, we saw that, we also pass object to the functions
//     username:"Khan",
//     price:"399"
// })                                            // Username is Khan and price is 399


const myNewArray=[200,300,400,100]

function returnSecondValue(arr){
    return arr[1];
}

// console.log(returnSecondValue(myNewArray))      //300 //so here we saw that we can also an array to a function

// or we can also pass the array as shown below

// console.log(returnSecondValue([1,4,3,3]))     //4    // here, we directly gave the array to the function

