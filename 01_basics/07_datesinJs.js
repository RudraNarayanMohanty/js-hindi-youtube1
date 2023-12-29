let myDate = new Date();
// console.log(myDate);//it will give like this 2023-12-17T00:23:02.985Z
// console.log(myDate.toDateString)
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getDate());
// console.log(typeof myDate);

let mycreatedDate = new Date(2023, 11, 17)
// console.log(mycreatedDate.toLocaleString());
let myTimeStamp = Date.now()

// console.log(myTimeStamp);//it will give miliseconds data
// console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));
let newDate = new Date()
// console.log(newDate.getMonth() +1);//to get the Exact month number
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
