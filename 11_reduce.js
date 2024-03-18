const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, curr) => acc + curr);

console.log(sum);

/* acc - accumulator -> previous value like; 
when first time function run it will pass 1 in acc and 2 in curr 
after next iteration sum of 1+2 that is 3 pass in accumulator and in curr actual 3 pass 
then 5 is pass in acc and 4 is pass in curr and so on.... */

/* curr -> currentValue in array */