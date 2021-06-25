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

## HTTP request methods ##
HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.


The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

The HEAD method asks for a response identical to that of a GET request, but without the response body.

The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.

The PUT method replaces all current representations of the target resource with the request payload.

The DELETE method deletes the specified resource.

The CONNECT method establishes a tunnel to the server identified by the target resource.

The OPTIONS method is used to describe the communication options for the target resource.

The TRACE method performs a message loop-back test along the path to the target resource.

The PATCH method is used to apply partial modifications to a resource.

Patch and put request are not the same
put changes the entirety of the payload whereas patch changes only a part of it