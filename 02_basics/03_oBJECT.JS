// Singleton



// Object.create // Constrocter or Singleton method

// Object literals


const mySym = Symbol("key1")

const jsUser = {
    name: "muhammad asad",
    age: 19,
    location: "Karachi",
    "full name": "asadmoon021@gmail.com",
    [mySym]: "myKey1",
    email: "asad moon021@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday" , "Saturday"]
} 

console.log(jsUser.email);

jsUser.email = "asadkhan@hotmail.com" 


// Object.freeze(jsUser)

console.log(jsUser[mySym]);


jsUser.greeting = function(){
    console.log("hello World")
}

jsUser.greetingTwo = function(){
    console.log(`hello World, ${this.name}`)
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
