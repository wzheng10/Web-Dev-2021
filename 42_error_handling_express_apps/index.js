const express = require('express');
const app = express();
const { nextTick } = require('process');
const morgan = require('morgan');

const AppError = require('./AppError');

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

const verifyPassword = (req, res, next) => {
  const {password} = req.query;
  if (password === 'chickennuggets'){
   next();
  }
  throw new AppError('Password is Required', 401);
  // res.send('SORRY, YOU NEED A PASSWORD!!!')
  // res.status(401)
  // throw new AppError('Password required', 401)
} 

app.get('/', (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('HOME PAGE!')
})

app.get('/error', (req, res) => {
  chicken.fly()
})

app.get('/dogs',verifyPassword, (req, res) => {
  console.log(`REQUEST DATE: ${req.requestTime}`)
  res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
  res.send('MY SECRET IS: I LOVE RUVEL')
})

app.get('/admin', (req, res) =>{
  throw new AppError('You are not an admin', 403)
})

app.use((req, res) => {
  res.status(404).send('NOT FOUND!!')
})

// app.use((err, req, res, next) => {
//   console.log("****************************")
//   console.log("***********ERROR************")
//   console.log("****************************")
//   // res.status(500).send("OH BOY, WE GOT AN ERROR!!!")
//   console.log(err)
//   next(err);
// })

app.use((err, req, res, next) => { 
  // const {status} = err;
  // const{message = 'Something Went Wrong'} = err;
  //or
  const {status = 500, message = 'Something Went Wrong'} = err;
  res.status(status).send(message)
})

app.listen(3000, () => {
  console.log('App is running on localhost: 3000')
})