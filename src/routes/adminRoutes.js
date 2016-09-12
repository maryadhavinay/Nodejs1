var express = require('express');

var adminRouter = express.Router();

var mongodb = require('mongodb').MongoClient;

var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction.',
            author: 'Lev Nikolevich Tolstoy',
            id: 10414941,
            read: false
        },
        {
            title: 'Les Miserables',
            genre: 'Historical Fiction',
            author: 'Victor Hugo',
            id: 10414941,
            read: false
        },
        {
            title: 'Half Girl Friend',
            genre: 'Story',
            author: 'Chetan Bhagat',
            id: 10414941,
            read: false
        },
        {
            title: 'Million ways to die',
            genre: 'Scifi',
            author: 'John',
            id: 10414941,
            read: false
        },
        {
            title: 'The three mistakes of life',
            genre: 'Science Fiction',
            author: 'Chetan Bhagat',
            id: 10414941,
            read: false
        },
          {
            title: 'Million Dollor Arm',
            genre: 'Historical Fiction.',
            author: 'Leonardo',
            id: 10414941,
            read: false
        },
          {
            title: 'Social',
            genre: 'Historical Fiction.',
            author: 'Shan',
            id: 10414941,
            read: false
        },
          {
            title: 'Telugu',
            genre: 'Language',
            author: 'India',
            id: 10414941,
            read: false
        }        
];

var router = function(nav){

    adminRouter.route('/addBooks')
        .get(function(req,res){
        var url = 'mongodb://localhost:27017/libraryApp';
        
        mongodb.connect(url, function(err, db){
           var collection = db.collection('books');
           collection.insertMany(books, function(err, results){
               res.send(results);
               db.close();
           }); 
        });
        
        //res.send('Inserting Books');
    });
    
    return adminRouter;
};

module.exports = router;
