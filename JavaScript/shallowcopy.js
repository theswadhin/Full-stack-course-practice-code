
const p1={
    name:"swadhin",
    age:25,
    address:{
        city:"bbsr",
        state:"odisha"
    }
}

// const p2=p1;            //shallow copy
// console.log(p2);

// p2.name="sworaj";
// p1.age=22;
// console.log(p1);
// console.log(p2);

const p2=Object.assign({},p1);      //shallow copy
console.log(p2);

p2.name="sworaj"
p1.age=22;
// console.log(p1);
// console.log(p2);

p2.address.city="kdp";
p1.address.state="wb";
console.log(p1);
console.log(p2);