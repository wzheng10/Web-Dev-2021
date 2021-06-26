const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4} =require('uuid');
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let tweets = [
  {
    id: uuidv4(),
    twitter_username: 'Ruvel',
    twitter_comment:'I love wei so much'
  },
  {
    id: uuidv4(),
    twitter_username: 'Roofus',
    twitter_comment:'My name is Roofus because I am a doofus'
  },
  {
    id: uuidv4(),
    twitter_username: 'Amy',
    twitter_comment:'I like wearing eye lashes'
  },
  {
    id: uuidv4(),
    twitter_username: 'Tiffany',
    twitter_comment:'I leave a mess for my boyfriend whenever I come home from work'
  },
  {
    id: uuidv4(),
    twitter_username: 'Kenly',
    twitter_comment:'Wasssuuppppp. Yerrrrrrrrrrrrrrr'
  },
  {
    id: uuidv4(),
    twitter_username: 'Wei',
    twitter_comment:'Glad you are all here'
  }
]

app.get('/comments', (req, res) => {
  res.render('comments/index', {tweets});
})

app.get('/comments/new', (req,res) => {
  res.render('comments/new')
})

app.post('/comments', (req, res) =>{
  const {twitter_username,twitter_comment} = req.body;
  tweets.push({twitter_username, twitter_comment, id: uuidv4()})
  res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
  const {id} = req.params;
  const tweet = tweets.find(t => t.id === id);
  res.render('comments/show', {tweet})
})

app.get('/comments/:id/edit', (req, res) => {
  const {id} = req.params;
  const tweet = tweets.find(t => t.id === id);
  res.render('comments/edit', {tweet})
})

app.listen(3000, () => {
  console.log("ON PORT 3000")
})