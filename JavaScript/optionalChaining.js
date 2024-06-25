

const p1={
    name:"swadhin",
    age:25,
    // address:{
    //     city:"bbsr",
    //     state:"OD"
    // },
    likes:"eat sleep repeat"
}

console.log(p1.address)        //undefined
//console.log(p1.address.city)   //error

//soln
console.log(p1.address?.city)  //optional chaining