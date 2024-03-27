const calculate = (a, b, operation) => {
    return operation(a, b);
};

const operation = (num1, num2) => {
    return num1 + num2;
}
/* Method 1 */
const Addition = calculate(3, 4, operation);

console.log("Addition is :- ", Addition);


/* Method 2 */
const subResult = calculate(8, 3, (num1, num2) => num1 - num2);
console.log("Subtraction is :- ", subResult);

/*

anonymous function :- function (){}
                   :- ()=>{}

*/



/* practical implementation */

const arr = [5, 4, -2, 6, 9, 8];
// const firstNeg = (num) => {
//     return num < 0; /* it represet only checkmark and return whether true or false */
// };

/* this is the way we can do with arrow function but below i have implemented efficient way */

// const result = arr.find(firstNeg);
const result = arr.find((num) => num > 5);
console.log("Greater occurences:-", result);