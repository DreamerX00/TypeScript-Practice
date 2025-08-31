function greet(person:string = "Unknown") {
    return `Hello ${person} Bro`;
}

console.log(greet());
console.log(greet("Akash"));
//console.log(greet(88)); will throw error
