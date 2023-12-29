//const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isloggedIn =true

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"hitesh",
            lastname: "choudary"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = {5:"e",6:"f"}

const obj4 ={obj1,obj2}
const obj5 = Object.assign({},obj1,obj2,obj3)
console.log(obj5)

const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6);



const users = [
    {
        id:1,
        email:"mrudra5674@gmail.com"
    },
    {
        id:1,
        email:"mrudra5674@gmail.com"
    },
    {
        id:1,
        email:"mrudra5674@gmail.com"
    }
   
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))


const course = {
    courseName:"js in hindi",
    price:"999",
    courseInstructor:"Rudra"
}
//console.log(typeof(course.courseInstructor))//not right
const{courseInstructor: instuctor} = course

console,log(typeof(instructor))



// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

