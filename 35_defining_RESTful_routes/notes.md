Defining Restful Routes
**Crucial!**
GET vs. POST Requests
Handling Post Requests in Express(Yellow)
Parsing Request Body
Forms + Express (RED)
*Important*
Method Override
RESTful Routing (RED)
*Nice To Have*


## GET vs Post ##
Get:
  Used to retrieve information
  Data is sent via query string
  Information is plainly visible in the URL!
  Limited amount of data can be sent

Post:
  Used to post data to the server
  Used to write/create/update
  Data is sent via request body, not a query string!
  Can send any sort of data (JSON!)

  It is possible to send a get and post request in express

## REST (Representational State Transfer) ##
  REST is an 'architectural style for distributed hyper media systems.

    Set of guidelines for how a client + server should communicate and perform CRUD operations on a given resource

    Main idea of REST is treating data on the sersver-side as resources than can be CRUDed

    Most common way of appraching REST is in formatting the URLs and HTTP verbs in your applications

## RESTful Comments Overview ##
username
text
bob - hello!

GET /allcomments
GET /allcomments
GET /shomeallcommentsnow

POST /newcomment
POST /makecomment

GET /comments - list all comments
POST /comments -Create a new comment
GET /comments/:id - Get one comment (using ID)
PATCH /comments:id -Update one comment
DELETE /comments/:id -Destroy one comment
