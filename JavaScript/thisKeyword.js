/*
this keyword--> refer to the object which is executing the function
*/ 


const p1={
    name:"swadhin",
    // address:{
    //     city:"bbsr",
    //     state:"OD"
    // },
    // courses:['html','css','js','react'],
    displayMessage:function(){
        console.log(this.name);      //refer to the p1 object
            function showname(){
                console.log(this.name);  //here it is not directly executed by object
            } 
    },

    showmessage:() => {
        console.log(this.name);     //it will not refer to object,it refer to global obj
    }
}
// console.log(p1);
p1.displayMessage();

// console.log(this);          //refer to the global object



