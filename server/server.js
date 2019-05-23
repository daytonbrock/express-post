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


    AFTERNOON LECTURE NOTES

CRUD methods
    C r e a t e
        POST ( what route are we going to? what is the thing you would like to add? )
    R e a d / R e t r i e v e
        GET ( we've seen get requests - this is what the browser does. )
    U p d a t e
        PUT
    D e l e t e
        DELETE

HTTP (hyper text transfer protocol)


// Postman is great for building out your server
// AJAX
// Asynchronous, meaning they don't necessarily happen in order

*/

// brings in express and body-parser
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
// accesses the build application function in express
const app = express();

// set port and spin up
const port = 5000;
app.listen( port, () => {
    console.log( 'running on port', port );
})

















//THIS IS IMPORTANT PAY ATTENTION REVIEW THESE NOTES
// this line creates req.body
// if it is not here, or if it is after your posts
// you will suffer................................
app.use( bodyParser.urlencoded( {extended: true} ) );
//THIS IS IMPORTANT PAY ATTENTION REVIEW THESE NOTES
// HEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEY
//HEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEY
//HEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEY
//HEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEY
// HEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEYHEY















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


app.post( '/new', ( req, res ) => {
    // req.body is only accessable if this line of code is written ==> app.use( bodyParser.urlencoded( {extended: true} ) );
    quotes_data.push( req.body );
    // status 201 says created
    res.sendStatus( 201 );
} );