console.log(add(1,2));


function add (a,b){
    return a + b;
}

console.log(subtraction(10,5));
//function expression
//save the function as a variable

const subtraction = function(a,b){return a -b}

function sayhi(name){
    console.log(`hi there${name}!`);
}

function longerGreeting(greeting,name){
    greeting(name)
}

longerGreeting(sayHi,"Jonathan");

