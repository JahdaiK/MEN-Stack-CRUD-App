/* Require modules
--------------------------------------------------------------- */
require('dotenv').config()
const path = require('path');
const express = require('express');
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const methodOverride = require('method-override');


/* Require the routes in the controllers folder
--------------------------------------------------------------- */
const booksCtrl =require('./controllers/books')


/* Require the db connection, models, and seed data
--------------------------------------------------------------- */
const db = require('./models');


/* Create the Express app
--------------------------------------------------------------- */
const app = express();


/* Configure the app to refresh the browser when nodemon restarts
--------------------------------------------------------------- */
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
    // wait for nodemon to fully restart before refreshing the page
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});


/* Configure the app (app.set)
--------------------------------------------------------------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


/* Middleware (app.use)
--------------------------------------------------------------- */
app.use(express.static('public'))
app.use(connectLiveReload());

//Postman
// Body parser: used for POST/PUT/PATCH routes:
// this will take incoming strings from the body that are URL encoded and parse them
// into an object that can be accessed in the request parameter as a property called body (req.body).
app.use(express.urlencoded({ extended: true }));
// Allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride("_method"));

/* Mount routes
--------------------------------------------------------------- */
//Home page
app.get('/', function (req, res) {
    res.send('Project_Two')
});

//When a Get request is sent to `/seed, the Books collection is seeded
app.get('/seed', function(req, res){
    //remove any existing books
    db.Book.deleteMany({})
    .then(removedBooks=>{
        console.log(`Removed ${removedBooks.deletedCount} books`)
        //seed the book collection with the seed data
        db.Book.insertMany(db.seedBooks)
        .then(addedBooks=>{
            console.log(`Added ${addedBooks.length} books to the database`)
            res.json(addedBooks)
        })
    })
});

// This tells our app to look at the `controllers/books.js` file to handle all routes that begin with `localhost:3000/books`
app.use('/books', booksCtrl)


/* Tell the app to listen on the specified port
--------------------------------------------------------------- */
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});
