const marvel_Heroes = ["thor" , "ironman" , "spider man"]
const dc_Heroes = ["superman" , "flash" , "batman"]

// marvel_Heroes.push(dc_Heroes)
// console.log(marvel_Heroes);
// console.log(marvel_Heroes[3][1]);

// let myAllHeroes = marvel_Heroes.concat(dc_Heroes)

const my_new_heroes = [...marvel_Heroes , ...dc_Heroes]

// console.log(my_new_heroes);

// const newArr = [1, 2, 3, [4 , 5 ,6], 7, [6, 7, [4, 5 ]]]

// const real_anotherArr = newArr.flat(Infinity)
// console.log(real_anotherArr)


console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name: "hitesh"})) // Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
