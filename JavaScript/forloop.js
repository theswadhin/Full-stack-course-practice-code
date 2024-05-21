let arr=[1,2,3,4,5]

let str="SWADHIN"

let obj={
    name:"swadhin",
    age:24,
    company: "L&T"
}

// for in loop example(used in object datatype )

for(let n in obj){
    console.log(n,obj[n]);
}
 
// for of loop example(used for iterable data type(array,string))

for(let n of arr){
    console.log(n);
}
for(let n of str){
    console.log(n);
}