/* code step by step tutorial */

function add(a, b = someVal()) {
    return a + b;
}

function someVal() {
    return 10;
}

const res = add(20);
console.log("result is :- ", res);

/* this code is give an error because of  When you call main(10) in your code, you're passing 10 as the value of a, but since b is not provided, it will use the default value main().
Now, when main() is called without arguments, it will recursively call itself again without arguments, and so on. This would create an infinite loop, causing a stack overflow error. */

// function main(a, b = main()) {
//     return a + b;
// }

// const res = main(10);
// console.log("result of main function is :- ", res);