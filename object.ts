function printLocation() : {
    name : string;
    age : number;
    location : string;
}{
    return{
        name : "Akash",
        age : 23,
        location : "India"
    }
}
console.log(printLocation());

const student : {
    naxme : string,
    roll : number,
    subject : Array<string>
} = {
    naxme : "Akash",
    roll : 39839839,
    subject : ["Math","Science"]
}

console.log(student);