
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

## mongoose connection ##
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
  console.log("CONNECTION OPEN")
})
.catch(err => {
  console.log("OH NO ERROER!!!!")
})

Models are JS classes that represent information in some collection