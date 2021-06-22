const express = require("express")
const app = express()

// app.use((req, res) => {
//   console.log("WE GOT A NEW REQUEST!!")
//   // res.send("HELLO, WE GOT YOUR REQUEST! THIS IS THE RESPONSE")
//   res.send( '<h1>New Title: Welcome to Requests and Responds on Express</h1>')
// })

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!!!!!')
})

app.get('/r/:subreddit/:postID',(req, res) =>{
  const {subreddit, postID } = req.params;
  res.send(`<h1>Viewing Post ID: ${postID} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
  res.send('POSTING TO CATS, THIS IS DIFFERENT FROM A GET REQUEST')
})

app.get('/cats', (req, res) => {
  res.send('MEOW!!')
})
app.get('/dogs', (req, res) => {
  res.send('WOOF!!')
})
//query search
app.get('/search', (req, res) => {
  const {q} = req.query;
  if(!q){
    res.send('Nothing Found If Nothing Searched')
  }
  res.send(`<h1>Search results for : ${q}</h1>`)
})

app.get('*',(req, res) => {
  res.send('I do not know that path')
  
})
// /cats => 'meow'
// /dogs => 'woof'
// '/'


app.listen(3000, () => {
  console.log("LISTENING ON PORT 3000")
})