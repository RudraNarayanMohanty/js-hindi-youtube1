// Immediately Invoked Function Expressions (IIFE)

// (function chai(){
  
//     console.log(`DB CONNECTED`)
// })()

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

((name)=>{
    //UNNAMEDIIFE
    console.log(`DB CONNECTEDTWO${name}`)
})('hitesh')