console.log(a);
var a=10;

console.log(a);

function abc(){
    console.log(a);
    var a=99;
}

abc();
//here by calling it will create a local context of function i.e memory will be allocated again to variable.

console.log(a);