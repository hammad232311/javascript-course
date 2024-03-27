// let myDate = new Date()
// // console.log(myDate.toString())
// // console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(typeof myDate)


// let myNewDate = new Date(2023 , 00 , 18)
// let myNewDate = new Date(2023 , 0 , 18 , 05 , 15)
// let newDate = new Date('01 , 24 , 2024')


//     let anotherDate = new Date('01-24-2024')
//     let myTimeStamp = Date.now() - anotherDate


// console.log(anotherDate.getTime());
 



// console.log(Math.floor(Date.now() / 1000));






// let newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.getUTCFullYear());
 



let newDate = new Date()
// console.log(newDate)

newDate.toLocaleString('default' , {
    weekday : 'long'
})
console.log(newDate.toDateString());