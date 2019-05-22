/* LIST OF STEPS TO GET SERVER UP AND RUNNING

    CREATE PROJECT
1. cd to folder you want to make your project in, mkdir `new project name`
2. mkdir `servers`, cd into `servers`, 

    SET UP
1. set up package.json, in terminal `npm init`
2. track project with git, in terminal: `git init`
3. install express package in project, in terminal: `npm install express`
4. create `.gitignore` and throw `node_modules` in there
5. commit set up

    TO GET SERVER RUNNING
1. bring express

*/

// brings in express
const express = require( 'express' );
// accesses the build application function in express
const app = express();

// set port and spin up
const port = 5000;
app.listen( port, () => {
    console.log( 'running on port', port );
})

// bring in static pages (right now, just index.html)
app.use( express.static( 'server/public' ) );

// create quotes variable on server
let quotes_data = [
    { 
        text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', 
        author: 'Emma Watson' 
    },
    { 
        text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', 
        author: 'Scott Adams' 
    },
    { 
        text: 'Intelligence plus character-that is the goal of true education.', 
        author: 'Martin Luther King, Jr.' 
    }
];

// send quotes_data to quotes route
app.get( '/quotes', ( req, res ) => {
    res.send( quotes_data );
});