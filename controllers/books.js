/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/
`
---------------------------------------------------------------------------------------
*/

/* Require modules
--------------------------------------------------------------- */
const express = require("express");
const router = express.Router();

/* Require the db connection, and models
--------------------------------------------------------------- */
const db = require("../models");

/* Routes
--------------------------------------------------------------- */
// Index Route (GET/Read): Will display all books
router.get("/", function (req, res) {
  db.Book.find({})
  .then((books) => {
    res.render('book-index',{
      books: books,
    });
  });
});

//New Route(GET): Will display a form to add a new book

router.get("/new", function (req, res) {
  console.log("go to form");
  res.render("newbook-form");
});

//Show Route(GET/Read): Will display an individual book document using the url parameter(document _id), catch 404

router.get("/:id", function (req, res) {
  console.log("going to show");
  db.Book.findById(req.params.id)
    .then((book) => res.render("book-details", { book: book }))
    .catch(() => res.render('404'));
});

//Create Route(POST/Create): Will create a new book, redirects to the new book's details page
router.post("/", function (req, res) {
  console.log(req.body);
  db.Book.create(req.body)
    .then((book) => res.redirect("/books/" + book._id))
    .catch((err) => console.log(err));
});

//Edit Route (GET/Read): Will display a form to edit an EXISTING book...catch 404
router.get("/:id/edit", (req, res) => {
  db.Book.findById(req.params.id)
    .then((book) => res.render(`editbook-form`, { book: book }))
    .catch(() => res.render("404"));
});

//Update route (PUT/Update): Will edit the existing book and redirect to the the book's details page catch 404
router.put("/:id", function (req, res) {
  db.Book.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (book) => res.redirect("/books/" + book._id)
  );
});

//Destroy route (DELETE/Delete): Will delete an existing book and redirect to the book index page catch 404
router.delete("/:id", function (req, res) {
  db.Book.findByIdAndDelete(req.params.id).then(() => res.redirect("/"));
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router;
