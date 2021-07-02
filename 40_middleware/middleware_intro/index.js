const express = require('express');
const app = express();
const morgan = require('morgan');
const { nextTick } = require('process');

app.use(morgan('tiny'))
app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method.toUpperCase(), req.path);
  next();
})
app.use('/dogs', (req, res, next) => {
  console.log("I LOVE DOGS")
  next();
})
const  verifyPassword = (req, res, next) => {
  const {password} = req.query;
  if (password === 'chickennuggets'){
    return next();
  }
  res.send('SORRY, YOU NEED A PASSWORD!!!')
}
// app.use((req, res, next) => {
//   console.log("THIS IS MY FIRST MIDDLEWARE!!!!")
//   return next();
//   console.log("THIS IS MY FIRST MIDDLEWARE --- AFTER CALLING NEXT")
// })
// app.use((req, res, next) => {
//   console.log("THIS IS MY SECOND MIDDLEWARE!!!!")
//   return next();
// })
// app.use((req, res, next) => {
//   console.log("THIS IS MY THIRD MIDDLEWARE!!!!")
//   return next();
// })
app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('HOME PAGE!')
})

app.get('/dogs',verifyPassword, (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: I LOVE RUVEL')
})
app.use((req, res) => {
  res.status(404).send('NOT FOUND!!')
})

app.listen(3000, () => {
  console.log('App is running on localhost: 3000')
})