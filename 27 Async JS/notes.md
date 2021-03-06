Async JavaScript!

**Crucial!**
    Working With Promises
    Async Functions
**Important**
    The Call Stack
    CallBack Hell
*Nice to Have*
    Understanding WebAPI's
    Creating Our Own Promises

## The class stack##
    the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions.

    How JS 'knows' what funtion is currently being run and what functions are called from within that funciton, etc.

    Stack(data structure) -LIFO concept

How it works:
    when a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.

    any functions that are called by that function are added to the call stack further up, and run where their calls are reached.

    when the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

## WebAPIs & Single Threaded##

At any given point in time, that single JS thread is running at momst one life of JS code at a time

The browser does the work
    broswers come with Web APIs that are able to handle cetain tasks in the background (like making requests or setTimeout)

    the JS call stack recognizes these Web API funtions and passes them off to the browser to take care of

    once the broswer finishes those tasks, they return and are pushed onto the stack as a callback

## Promises ##

A promise is an object prepresenting the eventual completion or failure of some(asynchronous) operation
It can be in one of these states:

    pending: initial sate, neither fulfilled nor rejected.

    fulfilled: meaning that the operation completed successfully
    
    rejected: the operation has failed

A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function

## Async Functions ##
A newer and cleaner syntax for working with async code!
Syntax "sugar" for promises

2 Pieces
Async
    -will always return a promise

    -if the function returns a value, the promise will be resolved with that value

    -if the function throws an exception, the promise will be rejected

    -if there are any errors inside the async, then the promise will default to a rejection

Await
    -can only use the await keyword inside of functions declared with async.

    -will pause the execution of the function, and wait for the promise to be resolved