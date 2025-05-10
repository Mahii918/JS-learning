// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc,currVal) {              //acc-accumulator , currVal-current Value
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc+currVal
// }, 0)                                  // 0 is initial value of the accumulator

//Now lets try to write the same in arrow fxn

const myTotal = myNums.reduce( (acc,currVal) => acc+currVal, 0)

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "Data sci course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(priceToPay);
