/* Code step by step es6 tutorial */

// var a=10;
// var a=20;   // allowed
// console.log(a);

// let a=10;
// let a=20;   // not allowed
// console.log(a);

// const a=10;
// a=20;      // not possible
// const a=20;    // not allowed

// var a = 10;
// let a = 10; //it will give an error that a has been already declared
// console.log(a);


// let a = 10;
// if (true) {
//     // let a = 20;
//     a = 10;
//     console.log(a);
// }
// if (true) {
//     // let a = 20;
//     console.log(a);
// }

// var a; // hoisting is valid with var keyword it will not work with let keyword
// above code is print 10 and 20 both if i am trying with if and else if condition then first time it will print only 10


// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


/* in this above for loop code when first time i intialized and when thread has take the delay of 1 sec during this delay loop is executed and his last value is 10 so 10 times it will print the value 10.
    to resolve this problem we can use the let keyword becuase let have block scope and 10 time i is intitalized and after delay of 1 sec it will print all 0 to 9 values
*/