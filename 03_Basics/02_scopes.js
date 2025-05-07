// Scope

// let a=10
// const b=20
// var c=30

// console.log(a);     //10
// console.log(b);     //20
// console.log(c);     //30

//so, we saw that the values are printed normally, then why there is need of three different datatypes i.e. let, const, var
//now, comment everything present above

// if(1){
//     let a=10;
//     const b=20;
//     var c=30;
// }

// console.log(a);  // here, we get error i.e. a is not defined, because its not in scope //now comment this line and execute next
// console.log(b);  // same as above, we again got an error, b not defined   //comment this line and execute again
// console.log(c);  // 30   //here, 30 got printed..  //this is problem with var so is avoided to use.. // acts like global scope


//----comment everything above------//

let a=300     //global scope

if(1){
    let a=10;     //local scope  or block scope
    const b=20;   //local scope  or block scope

    console.log(a);  //10    //local scope
    
}

// console.log(a);    //300      //because a=10 was local scope 



//NOTE:  the global scope in inspect section is different from the global scope using node (that we did here)   


//---------------------------//-----------------------------//----------------------------//-----------------------

function one(){
    const username="Unique"

    function two(){
        const website="youtube.com"

        console.log((username));
        
    }
    // console.log(website);    //here this will give error when executed  website is not declared or defined   //comment it

    two()
    
}

// one()   //Unique


//-----------------Interesting-----++++++++------------++++++++++++------------++++++++++++++++++++

console.log(addOne(5))     //6     //no error is though after console the fxn is written

function addOne(num){
    return num+1
}


console.log(addTwo(5)); //error,because the fxn is called before the declaration in expression form i.e. we are holding in a variable

const addTwo=function(num){      //it is also a way to declare a fxn, but its called expression 
    return num+2
}

