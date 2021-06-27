Our FIrst DataBase: MongoDB

**Crucial!**
Installation
The Mongo Shell
Mongo Inserts
Mongo Updates
Mongo Finding/Querying
Mongo Deletions
*Important*
Database Basics
SQL vs. NoSQL
*Nice To Have*

## What is Mongo? ##
Mongo is a document database, which we can use to store and receive complex data from

What used a ddatabase instead of just saving to a file?
  databases can handle large amounts of data efficiently and store it compactly

  they provide tools for easy insertion, querying and updating of data

  generally have security features and control over acces to data

  plus it scales well

What we use mongo?
  mongo is very commonly used with Node and Express (MEAN & MERN stacks)

  is easy to get started with(but tricky to master)

  Play particuarly well with JS

  popularity means there is a strong community of developers using Mongo

## SQL vs. NoSQL ##
**SQL Databases**
  Structured Query Language databases are relational databases.

  We pre-define a schema of tables before we insert anything

**No-SQL Databases**
  NoSQL databases do not use SQL. 

  There are many types of no-sql databases such as document,key-value and graph stores.


BSON is Binary JSON
  JSON can store Strings, Boolean, Number and Arrays

  BSON can store  Strings, Boolean, Number(Integer, Float, Long, Decimal) and Arrays, Dates and Raw Binary

Inserting in Mongo
  db.collection.insertOne() inserts a single document into a collection.

  db.collection.insertMany() inserts multiple documents into a collection.

  db.collection.insert() inserts a single document or multiple documents into a collection. *Recommended* 

mongo shell commands
db - shows current database
show dbs- will display information about current database
use <databasename>- will switch to that database

db.<collectionName>.find()- displays all the entered information into the database, a cursor
db.<collectionName>.findOne() - returns a single document

Ex:
db.dogs.insertOne({name: "charlie", age: 3, breed: "corgi", catFriendly: true})

db.dogs.insert([{name: "Wyatt" ,breed: "Golden", age: 14, catFriendly: false}, {name: "Tonya", breed: "Chihuahua", age: 17, catFriendly: true}])

**How to Update information in a database**
 db.dogs.updateOne({name: 'charlie'}, {$set: {age: 4}})
 { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 } <---- returns this if true

 the infomation updating does not have to be preexisting
  db.dogs.updateOne({name: 'charlie'}, {$set: {color: 'chocolate'}})

 db.dogs.updateMany({catFriendly: true}, {$set: {isAvailable: false}})

**deleting**
db.dogs.deleteOne({name: 'charlie'})
db.dogs.deleteMany({AsAvailable: false})
  deleting by criteria

db.dogs.deleteMany({})
  deletes everything 

db.dogs.insert([{name: "Rusty", breed: "Mutt", age: 3, weight: 25, size: "M", personality: {catFriendly: true, childFriendly: true}}, {name: "Chungus", breed: "Husky", age: 3, weight: 65, size: "L", personality: {catFriendly: false, childFriendly: true}}, {name: "Bella", breed: "Chihuahua", age: 8, weight: 7, size: "S", personality: {catFriendly: false, childFriendly: false}}, {name: "Malakai", breed: "Great Pyrenees", age: 2, weight: 110, size: "L", personality: {catFriendly: false, childFriendly: true}}, {name: "Dodger", breed: "Corgi", age: 10, weight: 31, size: "M", personality: {catFriendly: true, childFriendly: true}}, {name: "Mishka", breed: "Corgi", age: 13, weight: 27, size: "M", personality: {catFriendly: true, childFriendly: true}},]);

catFriendly and childFriendly is nested and to find them db.dogs.find({catFriendly: true}) will return nothing

db.dogs.find({'personality.childfriendly': true})

## Other Operators##
$eq
  Matches values that are equal to a specified value.
$gt
  Matches values that are greater than a specified value.
$gte
  Matches values that are greater than or equal to a specified value.
$in
  Matches any of the values specified in an array.
$lt
  Matches values that are less than a specified value.
$lte
  Matches values that are less than or equal to a specified value.
$ne
  Matches all values that are not equal to a specified value.
$nin
  Matches none of the values specified in an array.

Ex:
  db.dogs.find({age: {$gt: 8}}) -dogs greater than the age of 8

  db.dogs.find({breed: {$in: ['Mutt', 'Corgi', 'Chihuahua']}, age: {$lt:10}}) -dogs that are Mutt, Corgi or Chihuahua's and less than 10 years old