
let courses=["html","css","js","angular","react","vue js","jquery"]

courses.sort();
console.log(courses);

//sort number
let num=[1,3,7,2,5,11,56,9,32,67,99];
num.sort()
console.log(num);                    //sort according to utf-16 standard

//sol^
function ascendingOrder(a,b){
    return a-b;
}

num.sort(ascendingOrder);
console.log(num);