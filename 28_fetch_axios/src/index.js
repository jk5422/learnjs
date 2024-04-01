console.log("Message from src/index.js");

// Fetch example
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetch Response:', data);
    })
    .catch(error => {
        console.error('Fetch Error:', error);
    });


// Axios example
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log('Axios Response:', response.data);
    })
    .catch(error => {
        console.error('Axios Error:', error);
    });

const postData = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

// Make a POST request
axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    .then(response => {
        console.log('Axios Response:', response.data);
    })
    .catch(error => {
        console.error('Axios Error:', error);
    });