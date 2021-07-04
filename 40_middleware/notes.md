Middleware: The Key to Express
**Crucial!**
The concept of Middleware
Definding Custom Middleware
*Important*
*Nice To Have*
Moran Logging Middleware

## Middleware Intro ##
Request --> Middleware --> Response

Express middleware are functions that run during the request/response lifecycle

  Middle ware are just functions

  Each middleware has access to the request object(req) and response objects (res)

  Middleware can end the HTTP request by sending back a response with a methods like res.send()

  OR the middleware can be chained together, one after another by calling next()

  An express application is essentially a series of middleware function calls.

  ## Morgan ##
  Npm package called morgan that helps to logged HTTP request onto the terminal

In conjunction with requiring the npm package 'morgan'
  const morgan = require('morgan');

  we have to use the app.use to trigger it
  app.use(morgan('common'))


app.use((req, res, next) => {
console.log("THIS IS MY FIRST MIDDLEWARE!!!!")
next();
})

next(); will trigger the page but also send in terminal the msg
will need next in the function as well as the parameter

function will stop after next
  app.use((req, res, next) => {
  console.log("THIS IS MY FIRST MIDDLEWARE!!!!")
  return next();
  console.log("THIS IS MY FIRST MIDDLEWARE --- AFTER CALLING NEXT")
})
  *the console.log(...AFTER CALLING NEXT) would not run usually after calling next, espcially after returning next

  app.use is good for 404 last ditch errors
  Ex:
  app.use((req, res) => {
  res.send('NOT FOUND!!')
  })

  app.use((req, res) => {
  res.status(404).send('NOT FOUND!!')
  })

For specifed routes that need authenticator
const  verifyPassword = (req, res, next) => {
  const {password} = req.query;
  if (password === 'chickennuggets'){
    return next();
  }
  res.send('SORRY, YOU NEED A PASSWORD!!!')
}