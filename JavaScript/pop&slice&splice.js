// let arr=[10,11,12,13];

// console.log(arr);
// arr.pop();
// console.log(arr);

//slice
// let age=[3,34,12,45,87];
// let s_age=age.slice(2,4);       //make a sub array
// console.log(age);
// console.log(s_age);

//splice
let courses=["html","css","js","angular","react","vue js"]
// courses.splice(3,2) ;            //starting from index 3, delete 2 element
// console.log(courses);

courses.splice(3,0,"jquery") ;            //before index 3,delete 0 element, add jquery
console.log(courses);