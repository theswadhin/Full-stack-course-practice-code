
const User1={
    name:"swadhin",
    age:25,
    showname:function(){
        //implicit binding
        console.log(this.age);
    }
}

User1.showname();

const User2={
    name:"sworaj",
    age:23
}
const User3={
    name:"hima",
    age:24
}
const User4={
    name:"bibhu",
    age:20
}

function sayHi(city,state){
    console.log(`hii ${this.name} from ${city} ${state}`);       
}

//explicit binding  //function borrowing
sayHi.call(User1,"blr","ka");      //here this refer to user1

sayHi.apply(User2,["bbsr","od"]);   //apply

const result=sayHi.bind(User3,"kdp")
result("od");