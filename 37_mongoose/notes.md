Connecting to Mongo with Mongoose
**Crucial!**
The Role of ORM/ODM's
Connecting Mongoose to Mongo
Defining a Model
Mongoose CRUD
Schema Constraints
*Important*
Model Instance & Static Methods
Mongoose Middleware 
*Nice To Have*
Mongoose Virtuals

## Mongoose ##
Object Data/Document Mapper
ODMs like Mongoose map documents coming from a database into usable JS objects

  Mongoose provides ways for us to model out our appliation data and define a schema. 

  It offers easy ways to validate data and build complex queries form the comfort of JS


npm i init -y (to setup the packages)
npm i mongoose
touch index.js
**mongoose commands occur in node**
## mongoose connection ##
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROR!!!!")
})

Models are JS classes that represent information in some collection

Schema - a blue print or mapping of different collection keys in mongo to different types in JS
Ex:
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title:  String, // String is shorthand for {type: String}
//   author: String,
//   body:   String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs:  Number
//   }
// });

Ex:
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model('Movie', movieSchema)
const amadeus = new Movie ({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

in node, .load index.js
amadeus follows the schema format
to transfer from the mongoose to the mongo
amadeus.save()  -will make it into a mongo db

## find ##

Movie.find({}).then(data => console.log(data))    //to find all the information on all movies
Movie.find({rating: 'PG-13'}).then(data => console.log(data)) // finds movies with a rating of 'PG-13'

find by _id
Movivie.find({_id: '60d91c41dd830409202765f9'}).then(m => console.log(m))
Movie.findById('60d91c41dd830409202765f9').then(m => console.log(m))

Movie.updateMany({title: {$in: ['Amadeus', 'Stand By Me']}}, {score: 10}).then (res => c
onsole.log(res))
  modifies in node but does not show 
db.movies.find({title: {$in: ['Amadeus', 'Stand By Me']}})
  to see the changes to score in mongo

Movie.findOneAndUpdate({title: 'The Iron Giant'}, {score: 7.8}, {new: true}).then(m => c
onsole.log(m))
  with {new: true} will show the modified changes 

## Deleting ##
 Movie.remove({title: 'Amelie'}).then(msg => console.log(msg))

Movie.deleteMany({year: {$gte: 1999}}).then(msg => console.log(msg))

## Schema Validations ##
**Recommended Way**
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

Instance method refers to a single object in the database. THe keyword "this" in instance methods refers to a particular object in the database
  Instance methods are defined on the document

Static methods are set to refer to the whole model. Here the model name is Product. So the keyword "this" refers to Product
  Statics are methods define don the Model

## Mongoose Virtuals##
Virtuals are document properties that you can get and set but that do not get persisted to Mongo DB. 
  can define a getter and setter

## Middleware ##
pre middleware functions are excuted one after another, when each middleware calls next

personSchema.pre('save', async function() {
  console.log("ABOUT TO SAVE!!!")
})
personSchema.post('save', async function() {
  console.log("JUST SAVED!!!")
})