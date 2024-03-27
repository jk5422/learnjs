const myBody = document.body;
// myBody.style.backgroundColor = "red";
console.log(myBody);

const box2 = document.getElementById('box-2');
console.log(box2);

const divs = document.getElementsByTagName('p');
// console.log(divs);

const boxes = document.getElementsByClassName('box');
console.log(boxes);

const query = document.querySelector('.container .random');
console.log(query);

const box1 = document.getElementById('box-1');
box1.classList.add('round')
// console.log(box1.classList.contains('round')); /* return true or false */
// box1.classList.remove('box')

const para = document.createElement('p')