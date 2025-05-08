// IIFE - Immediately Invoked Function Expressions           //pronunciation:-  (e-fee)
// we use iife , when we want to execute the function, just after writing the function


// function chai(){                               // we can do this to execute the fxn just after writing it, but there is a 
//     console.log(`Database Connected`);         // that some global variable may affect the fxn.. so this might not always
// }                                              // work as expected.. So to get rid of global pollution, we use IIFE...
// chai()

// (function chai(){                                
//     console.log(`Database Connected`);         // here we put the complete fxn in a (), to make it a block (we saw in last class)
// })()                           // after the fxn, we put () which is execution call , to implement IIFE and execute immediately

// ()()     //syntax of IIFE     // 1st bracket is for writing a function and 2nd bracket is execution call


// (function chaiTwo(){                   // it is similar to above code, but shows error because the fxn does not  
//     console.log(`Second Database`)     //understand where to stop the context, so if we put semicolon at end, no error 
// }) ()                                  // will be there (as shown below) though sometimes code editor takes care of it..


// (function chaiTwo(){                    // NAMED IIFE     // this works correct
//     console.log(`Second Database`)
// }) ();


(() => {        // SIMPLE IIFE            // here, we used arrow function and this shows that IIFE workd for arrow fxns also
    console.log(`Database (using arrow function)`)
}) ();


((name) => {                      // here we have passed a argument
    console.log(`DB connected (used IIFE and passed a parameter) by ${name}`)     
}) ("Kishore");    // name is written in execution call //its same as when we calling a fxn //we write name of fxn then (argument)


