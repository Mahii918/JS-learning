//switch

// switch (key) {                     //basic syntax of switch
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3 

switch (month) {                      //Here, if break statement is not there in a block and we entered that case, then we will 
    case 1:                           // continue to run other cases below it (except default case) until we find a break keyword. 
        console.log("January")
        break;

    case 2:                           // if we want to write a case in string format, we can write as   ----case "March": -------
        console.log("February")    
        break;    
    case 3:
        console.log("March")
        break;    
    case 4:
        console.log("April")
        break;    

    //so on

    default:
        console.log("Invalid")
        break;
}