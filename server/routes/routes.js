const express     = require('express');
const router      = express.Router();
const mongodb     = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url         = "mongodb://bookuser:bookpass10@ds135700.mlab.com:35700/no-covers";

router.get('https://warm-beyond-96861.herokuapp.com/genre', (req, res) => {

	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log('Error: ' + err);
		} else {
			let cursor = db.collection('genres').find();
				cursor.toArray(function(err, genres) {
					let arr = [];
					for (genre in genres[0]) {
						if (genre == "_id") continue;
						arr.push(genres[0][genre]);
					}
					res.send(arr);
			});
			db.close();
		}
	}) 
});

// get books that only match the genre parameter
router.get('https://warm-beyond-96861.herokuapp.com/genre/:genre', (req, res) => {

	let genre = req.params.genre.toLowerCase();

	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log('Error: ' + err);
		} else {
			let cursor = db.collection('books').find({genre: genre});
				cursor.toArray(function(err, books) {
				res.send(books);
			});
			db.close();
		}
	})
});

// get ALL books and let the client pick a random one
router.get('https://warm-beyond-96861.herokuapp.com/all', (req, res) => {

	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log('Error: ' + err);
		} else {
			let cursor = db.collection('books').find();
				cursor.toArray(function(err, books) {
				res.send(books);
			});
			db.close();
		}
	})

	console.log("Go fuck yourself");
	
});

router.get('https://warm-beyond-96861.herokuapp.com/recent', (req, res) => {

	MongoClient.connect(url, (err, db) => {

		if (err) {
			console.log('Error: ' + err)
		} else {
			let cursor = db.collection('books').find().limit(24).sort({$natural:-1});
			cursor.toArray(function(err, books) {
				res.send(books);
			})
			db.close();
		}

	})

});

// fetch a specific book
router.get('https://warm-beyond-96861.herokuapp.com/book/:title', (req, res) => {

	let title = req.params.title.toLowerCase();

	MongoClient.connect(url, (err, db) => {
		if (err) {
			console.log('Error: ' + err);
		} else {
			let cursor = db.collection('books').find({urlTitle: title});
				cursor.toArray(function(err, book) {
				res.send(book);
				console.log(book);
			});
			db.close();
		}
	})

});

module.exports = router;