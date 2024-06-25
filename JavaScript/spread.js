
let arr1=[1,2,3,4,5];
let arr2=[8,9];

let arr3=[...arr1,6,7,...arr2,10,11];
console.log(arr3);

console.log(arr1);          //unmutable


//spread in string
let str="swadhin";
let letter=[...str];
console.log(letter);