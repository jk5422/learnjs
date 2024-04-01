// Set a cookie with expiration time
document.cookie = 'username=John; expires=Mon, 01 April 2024 12:09:00 UTC; path=/';

// Retrieve cookie value
const cookies = document.cookie.split(';');
let username;
cookies.forEach(cookie => {
    const [key, value] = cookie.split('=');
    if (key.trim() === 'username') {
        username = value;
    }
});
console.log('Username from cookie:', username);
document.getElementById('user').innerHTML = 'Username from cookie:' + username;

// Delete a cookie
// document.cookie = 'username=; expires=Mon, 02 April 2024 12:00:00 UTC; path=/;';
