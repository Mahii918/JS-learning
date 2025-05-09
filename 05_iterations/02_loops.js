// while loop

// while (condition) {           //syntax of while loop
     //code
// }


// do while loop

// do {                      //syntax of do while loop
    // code
// } while (condition);


// let score=1

// do {
//     console.log(`score is ${score}`);

//     score++;
    
// } while (score<=5);



//special case of do while loop

let i=11

do {                           //here, though i=11 is already greater than 10, but still it was executed once.. 
    console.log(`i=${i}`);     // so do while loop run atleast once in all cases
    i++;         
} while (i<10);        // O/P ->   i=11
