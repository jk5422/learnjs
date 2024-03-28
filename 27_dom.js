/* DOM manipulation section */

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

// const box1 = document.getElementById('box-1');
// box1.classList.add('round')
// console.log(box1.classList.contains('round')); /* return true or false */
// box1.classList.remove('box')

const newpara = document.createElement('p');
newpara.innerHTML = "new para";
newpara.classList.add('box');

const container = document.getElementById('container');
container.appendChild(newpara);

/* Event handeling section */

const myFunction = () => {
    alert('I Was Clicked..!');
}

const keyPressEvent = () => {
    setTimeout(() => {
        console.log('Key pressed..!');
    }, 1000);
}

const KeyUpEvent = () => {
    setTimeout(() => {
        console.log('Key Up..!');
    }, 3000);
}

const KeyDownEvent = () => {
    setTimeout(() => {
        console.log('Key Down..!');
    }, 2000);
}

/* Event Listeners Section */
const box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    console.log("click event listner 1");
})

box1.addEventListener('click', () => {
    console.log('click event listner 2');
})

const nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keydown', (e) => {
    console.log("key", e.key);
})

nameInput.addEventListener('focus', (e) => {
    console.log('event', e);
})