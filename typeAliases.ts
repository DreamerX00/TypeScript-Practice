type Person = {
    name : string,
    age : number
};

function myPerson(p : Person){
    console.log(`my Name is : ${p.name} \nmy Age is : ${p.age}`);
}

const myPersonData : Person = {
    name : "Akash",
    age : 23,
}
myPerson(myPersonData);