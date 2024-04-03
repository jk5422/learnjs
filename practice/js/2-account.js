document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
})


let users = JSON.parse(localStorage.getItem('users')) || [];

/* function for checking user exist or not this function return true or false only */
function userExists(email) {
    users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
}

/* toggeling the form */

document.getElementById('emailForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    if (userExists(email)) {
        document.getElementById('welcome-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('lemail').value = email;
    } else {
        document.getElementById('welcome-section').style.display = 'none';
        document.getElementById('signup-section').style.display = 'block';
        document.getElementById('signupEmail').value = email;
    }
});

/* back functionality */

document.getElementById('logback').addEventListener('click', () => {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
});

document.getElementById('signupBack').addEventListener('click', () => {
    document.getElementById('signup-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
});

document.getElementById('profileback').addEventListener('click', () => {
    document.getElementById('profile-section').style.display = 'none';
    document.getElementById('welcome-section').style.display = 'block';
});



/* forms functionality  */

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const userData = JSON.parse(localStorage.getItem('users'));
    let res = userData.some(element => element.email === formObject.email && element.password === formObject.password);
    // console.log(res);

    if (res) {
        alert(`You are authorised user and Login with email: ${formObject.email}`);

        document.getElementById('login-section').style.display = 'none';
        document.getElementById('profile-section').style.display = 'block';

        users = JSON.parse(localStorage.getItem('users'));
        const data = users.find(person => person.email === formObject.email);
        const container = document.getElementById('profile');
        container.innerHTML = "";

        const div = document.createElement('div');
        for (const key in data) {
            // Skip adding password
            if (key === 'password') continue;

            // Create a p element
            const p = document.createElement('p');

            // Set the text content of the p element to the key and its corresponding value
            p.textContent = `${key}: ${data[key]}`;

            // Append the p element to the div
            div.appendChild(p);
        }

        // Append the div to the container
        container.appendChild(div);
    }
    else {
        alert("You are not authorized user..!");
    }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log("New user added:", formObject);
    document.getElementById('lemail').value = formObject.email;
    users.push(formObject);
    localStorage.setItem('users', JSON.stringify(users));
    // document.getElementById('signupForm').reset();
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('signup-section').style.display = 'none';
});