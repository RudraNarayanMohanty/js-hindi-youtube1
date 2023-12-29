//for of

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}
const greetings ="hello world!"
for(const greet  of greetings){
    console.log(`Each char is ${greet}`)
}
//maps
const map = new Map()
map.set('IN', "INDIA")
map.set("US","UNITED_STATES_OF_AMERICA")
map.set("FRANCE","FRANCE")
map.set("UK","UNITED_KINDOM")

//console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
}

const myObject ={
    game1:"pubg",
    game2:"NFS"
}
for(const [key,value] of myObject){
    console.log(key,':-',value);
}
