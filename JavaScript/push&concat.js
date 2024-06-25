

let arr=[1,2,3];
//console.log(arr);
arr.push(4,5,6);
//console.log(arr);


let arr2=[7,8,9];
let arr3=[10,11,12,13];
let arr4=[1,2,3];

let arr5=arr.concat(arr2);
console.log(arr5);

let arr6=arr5.concat(arr3,arr4);
console.log(arr6);