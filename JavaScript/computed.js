const readlineSync=require("readline-sync")

const course=readlineSync.question("which course you want to take..");

const obj={
    name:"swadhin",
    age:25,
    [course]:"not available"
}

console.log(obj[course]);