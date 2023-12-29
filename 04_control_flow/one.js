//if
// const isUserLoggedIn = true
// const temprature=41

// if(temprature===40){
//     console.log("less than 50");

// }else{
//     console.log("temprature is greater than 50");

// }
// console.log("Execute")
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
// if(score>100){
//     let power = 'fly'
//     console.log(`user power: ${power}`);
// }
// console.log(`user Power: ${power}`);

// const balance = 1000;

// if(balance>500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");

// } else if (balance < 900) {
//     console.log("less than 750");

// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true;
const debited = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && loggedInFromEmail) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User looged in");
}
