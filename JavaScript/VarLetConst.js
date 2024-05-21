// Re-assign 
// var and let can be re-assigned 
// const cannot be reassigned 

// re-decleration 
// var can be re-decalred 
// let ans const cannot be re-declared 

// accessing the value before intialization 
// Hoisting - Hositing is the process, where the variables and functions will get the memory 
// before the code exection (variables and functions will move to the top of the scope and they will get the memory )

// var let and const are hoisted but let and const are hoisted in a difrrent zone called 
// temporal dead zone (tdz) and we cannot access the variable in TDZ zone ; 

// SCOPE 

// Var is function scoped and let and const are block scoped 

// Var, let and const are  function scoped (beacause even the functions are also a block of code)

// function scoped (done)
// Block scope (done)
// chain scope/ scope chain (done)
// lexical scope (done )
// global scope (Anything which is not inside the function is called global scope )


// -----------Difference Scope demonstration----------------  

// var a = 10 ;

// var b = 99 ;

// function first (){
//     console.log(a);
//     var a = 99 ;

//     function second(){
//         console.log(a);          //Lexical scope(access a value from its parent scope)
//         third();

//         function third(){
//             console.log(b)       //chain scope(as it access b from global scope)
//             console.log(a);

//             var c = 99 ;
//         }
//         // console.log(c); this is giving us the error 
//     }
//     second()
// }

// first();

// console.log(a);

// ............Difference between function and Block scope.....................

// ----------Example of Function scope---------------

// var a = 10 ;
// {
// var a = 99 ;         //(O/P 99) As var is function scoped & (not block scoped)
// }

// console.log(a);


// ------------Example of Block scope------------------

let x = 100;

console.log(a);
console.log(x)

{
    var a = 99;  //var will not included in block  (only in case of function)

    let x = 999           //it is block scoped
    console.log(a);
    console.log(x)
}

console.log(a);
console.log(x)