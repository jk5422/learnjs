// Store data in local storage
localStorage.setItem('username', 'John');

// Retrieve data from local storage
const username = localStorage.getItem('username');
document.getElementById('user').innerHTML = 'Username from session storage:' + username;
console.log('Username from local storage:', username);

// Remove data from local storage
// localStorage.removeItem('username');
