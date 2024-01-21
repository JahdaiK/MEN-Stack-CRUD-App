/* 
---------------------------------------------------------------------------------------
NOTE: Remember that all routes on this page are prefixed with `localhost:3000/reviews`
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

//Index All reviews: 
//GET localhost:3000/reviews/
router.get('/', (req, res) => {
    db.Book.find(
        {},
        { reviews: true, _id: false }
    )
        .then(books => {
            // format query results to appear in one array, 
            // rather than an array of objects containing arrays 
            const flatList = []
            for (let book of books) {
                flatList.push(...book.reviews)
            }
            res.json({reviews: flatList })
        })
});

//New Route: GET localhost:3000/new/:bookId (Will display a form to add a new review)

router.get('/new/:bookId', async(req, res)=>{
    const book =await db.Book.findById(req.params.bookId)
    res.render('review-form', {book: book})
});
//Show Route: GET/Read localhost:3000/reviews/:id 
router.get('/:id', (req, res) =>{
    db.Book.findOne(
        {'reviews._id': req.params.id},
        {'reviews.$': true, _id:false}
)
    .then (book=>{
         // format query results to appear in one object, 
            // rather than an object containing an array of one object
        res.render('reviews',{review: book.reviews[0]})
    })
});
//Create Route: POST localhost:3000/reviews/:bookId (Creates a new review and redirects to the book detail page the book reviews)
router.post('/create/:bookId', (req, res)=>{
    db.Book.findByIdAndUpdate(
        req.params.bookId,
        {$push: {reviews: req.body}},
        {new: true}
    )
    .then((book)=> res.redirect('/books/'+book._id));
});
//Destroy Route: DELETE localhost:3000/reviews/:id
router.delete('/:id', (req, res)=>{
    db.Book.findOneAndUpdate(
        { 'reviews._id': req.params.id },
        { $pull: { books: { _id: req.params.id } } },
        { new: true }
    )
    .then((book) => res.redirect('/books/'+book._id));
});

/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router