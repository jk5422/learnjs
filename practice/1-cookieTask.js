// // Using sessionStorage Example
// let users = [];

// window.addEventListener('load', () => {
//     sessionStorage.setItem('users', JSON.stringify(users));
// })

// function userExists(email) {
//     users = JSON.parse(sessionStorage.getItem('users'));
//     return users.some(user => user.email === email);
// }

// document.getElementById('emailForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     if (userExists(email)) {
//         document.getElementById('welcomeForm').style.display = 'none';
//         document.getElementById('loginForm').style.display = 'block';
//     } else {
//         document.getElementById('welcomeForm').style.display = 'none';
//         document.getElementById('signupForm').style.display = 'block';
//     }
// });

// document.getElementById('loginUserForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const loginEmail = document.getElementById('loginEmail').value;
//     const loginPassword = document.getElementById('loginPassword').value;

//     const userData = JSON.parse(sessionStorage.getItem('users'));

//     let res = userData.some(element => element.email === loginEmail);
//     // console.log(res);

//     if (res) {
//         alert(`You are authorised user and Login with email: ${loginEmail} \n password: ${loginPassword}`);
//     }
//     else {
//         alert("You are not authorized user..!");
//     }
// });

// document.getElementById('signupUserForm').addEventListener('submit', (e) => {
//     e.preventDefault();
//     const newUser = {
//         firstName: document.getElementById('firstName').value,
//         lastName: document.getElementById('lastName').value,
//         email: document.getElementById('signupEmail').value,
//         phone: document.getElementById('phone').value,
//         dob: document.getElementById('dob').value,
//         gender: document.getElementById('gender').value,
//         city: document.getElementById('city').value,
//         hobbies: document.getElementById('hobbies').value
//     };
//     users.push(newUser);
//     sessionStorage.setItem('users', JSON.stringify(users));
//     console.log("New user added:", newUser);
//     // document.getElementById('signupForm').reset();
//     document.getElementById('welcomeForm').style.display = 'block';
//     document.getElementById('signupForm').style.display = 'none';
// });

// by cookie example
let users = JSON.parse(getCookie('users')) || [];

// get cookie of users name
function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            console.log(cookieValue);
            return cookieValue;
        }
    }
    return null;
}

//  set cookie function when user sign up
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    console.log(expires);
    document.cookie = name + "=" + value + "; " + expires + "; path=/";
}

function userExists(email) {
    return users.some(user => user.email === email);
}

document.getElementById('emailForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (userExists(email)) {
        document.getElementById('welcomeForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    } else {
        document.getElementById('welcomeForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    }
});

document.getElementById('loginUserForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (userExists(loginEmail)) {
        alert(`You are authorised user and Login with email: ${loginEmail} \n password: ${loginPassword}`);
    } else {
        alert("You are not authorized user..!");
    }
});

document.getElementById('signupUserForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newUser = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('signupEmail').value,
        phone: document.getElementById('phone').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        city: document.getElementById('city').value,
        hobbies: document.getElementById('hobbies').value
    };
    users.push(newUser);
    setCookie('users', JSON.stringify(users), 1); // Store user data in cookie for 1 day
    console.log("New user added:", newUser);
    // document.getElementById('signupForm').reset();
    document.getElementById('welcomeForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
});
