
function getObject(name,city){
    return{
        name:name,
        city:city
    }
    
    //shorthand 
    return{
        name,
        city
    }

}

const s1=getObject("swadhin","bbsr");
console.log(s1)

const s2=getObject("swadhin","bbsr");
console.log(s2)


