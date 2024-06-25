
const p1={
    name:"swadhin",
    address:{
        city:"bbsr",
        state:"OD"
    },
    courses:['html','css','js','react']
}

// let {name,address,courses}=p1;          //destructuring object

// console.log(name);
// console.log(address.city);
// console.log(courses);

// let {name,...rest}=p1;
// console.log(name);
// console.log(rest);

// let{name:userName}=p1;          //change the key name
// console.log(userName);

let {address:{city}}=p1;
console.log(city);