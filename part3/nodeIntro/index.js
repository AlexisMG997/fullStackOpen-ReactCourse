/* P3A.- Simple web server, Express 
//Importing Node's built-in web server module
const http = require("http");

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];


const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end(JSON.stringify(notes))
})

const PORT = 30001;
app.listen(PORT);
console.log(`Server runing on port ${PORT}`);
*/

//Importing Node's built-in web server module
const express = require('express');
const app = express();

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }
];

// Creating / route
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>');
})

// Creating /api/notes route
app.get('/api/notes', (request, response) => {
    response.json(notes);
})

const PORT = 30001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
