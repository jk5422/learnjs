/* code step by step  */

// let data = [10, 20, 7, 50, 1, 100];

// let res = data.find((item) => {
//     return item < 10;  // it will return only one element which is first occurance(i.e.7) in array subsequent element it will not return like; 1
// })

// let res = data.findIndex((item) => {
//     return item < 50; // it will return the index of element occurance in array so it will give the 0 as a result because 10 is less than 50 and it is at 0th index
// })

// console.log(res);


/*this below example is work with array of object */

let data = [{ id: 10 }, { id: 140 }, { id: 75 }, { id: 25 }, { id: 48 },]

let res = data.find((item) => item.id < 20)

console.log(res);

