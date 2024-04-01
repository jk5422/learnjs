// Store data in session storage
sessionStorage.setItem('username', 'John');

// Retrieve data from session storage
const username = sessionStorage.getItem('username');
document.getElementById('user').innerHTML = 'Username from session storage:' + username;
console.log('Username from session storage:', username);

// Remove data from session storage
// sessionStorage.removeItem('username');
