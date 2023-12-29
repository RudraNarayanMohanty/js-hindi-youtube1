//taking parameters in functions

// function sayMyName(){
//     console.log("R")
//     console.log("u")
//     console.log("d")
//     console.log("r")
//     console.log("a")
//}

//sayMyName();
//   function addTwoNumbers(number1,number2){
//       console.log(number1+number2);
//  }

// function addTwoNumbers(number1,number2){
//    // let result = number1 + number2
//     // return result
//     return number1 + number2
// }
// const result = addTwoNumbers(3,5)
// console.log("Result:", result);

// function multiplyTwoNumbers(num1,num2){
// let result = num1*num2
// return result;
// }
// const multRes = multiplyTwoNumbers(3,5)
// console.log(multRes);

// function divideByTwoNumber(num1,num2){
//     let result = num1/num2
//     return result

// }
// const divident = divideByTwoNumber(67,5)
// // console.log(divident)

// function substractionByTwoNumber(num1, num2) {
//   let substract = num1 - num2;
//   return substract;
// }
// let substractnum = substractionByTwoNumber(56, 78);
// console.log(substractnum);

// function addthtreeNumbers(num1, num2, num3) {
//   let sum = num1 + num2 + num3;
//   return sum;
// }
// let adding = addthtreeNumbers(45, 76, 256);
// console.log(adding);

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// //console.log("hitesh");
// console.log(loginUserMessage("RUdra"));
// console.log(loginUserMessage("sikha rani das"));



// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000))
// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(user){
//     console.log(`Username is ${user.username} and price is ${user.price}`);
// }
// //handleObject(user)
// handleObject({
//     username:"sam",
//     price:188
// })

 const myNewArray = [200,300,400,500,600,700,800]
// function returnSecondValue(getArray){
//     return getArray[1]
// }

//  console.log(returnSecondValue(myNewArray));

function getArray(mynewArray){
    return mynewArray[6]
}
console.log(getArray(myNewArray))
console.log(getArray([200,300,400,500,600,700,800]));



 




