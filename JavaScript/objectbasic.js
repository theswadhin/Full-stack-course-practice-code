
// const obj={key:value}

// const obj={
//     name:"swadhin",
//     age:24,
//     job:"engineer",
//     address: {
//         street: 'jakkur',
//         city: 'blr',
//         state: 'ka'
//       },

//     skill:["c","c++","html","css","js"],

//     greet:function(){
//         console.log("Hello")
//     },
//     bye(){
//         console.log("Bye")
//     }
// }

// console.log(obj)
// // console.log(obj.name)
// // console.log(obj["age"])

// console.log(obj.greet());
// obj.bye();

// console.log(obj.address.city)
// console.log(obj.skill[2])



//another way of defining
const person = {
    name: 'John',
    age: 30,
  };
  
  person.address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  };
  
  person.hobbies = ['reading', 'swimming', 'traveling'];

  delete person.address;        //deleting the address
  
  console.log(person);

  person.hobbies.forEach(hobby => {
    console.log(hobby);
  });