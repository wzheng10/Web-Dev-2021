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