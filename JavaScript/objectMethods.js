
const p1={
    name:"swadhin",
    age:25,
    address:{
        city:"bbsr",
        state:"OD"
    },
    courses:['html','css','js','react']
}

const ent=Object.entries(p1);
console.log(ent);                       //return array of (array of key and value)

const key=Object.keys(p1);
console.log(key);                       //return array of keys

const value=Object.values(p1);
console.log(value);                     //return array of values

