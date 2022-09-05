## Description

This is a simple api project that calculates age when given date of birth timestamp.


## Built With

The project is built with Nodejs and Express js.

## Design/Implementation

The project follows the Route -> Controller -> Service structural pattern, at the
root of the project are app.js and server.js, app.js is where the express app is 
instantiated and exported after applying middlewares. Server.js is where the app
listens to requests at port 3000 or cloud server supplied port.

Then there is a src folder that contains routes, services, __test__, controllers 
and middlewares.

Route, this is where the GET /howold endpoint resides and also where request rate limitter
is applied to the endpoint to limit requests.

Controllers, this is where the response and error handling of the endpoint is handled.

Services, this is where the business logic of the app resides, a place where the age
is calculated.

Middlewares, this is where the rate limitter function is located.

__test__, contains the test suites and test cases for the /howold route.

## How does this work

The app has a single endpoint GET /howold that expects a query paramitter dob "/howold?dob='02/02/1996'" 
and calculate the age, but before any request is actually processed, the rate limitter middleware first intercept the request.

The rate limitter uses an in-memory data store to store the IP address, last requestTimestamp and requestCount of every client,
if the client is making a request for the first time,  a new record is created for the client using his IP as the key, requestCount initiated to 1
and requestTimestamp initiated to the current time of the request. The rate limiter will compare Future request by the client with the
stored record and update the record according to some if/else condition.

The if condition is to check if the current request is within the request window size (3 requests/ seconds) and the client's requestCount within
that window is not more than 3, if that's the case, then the requestCount is incremented and allow the client's request to proceed. The else condition 
is to throw a 429 ('Too Many Requests') error to the client.

If the request made it through the rate limmiter, the route handler then calculates the age, but before that, the dob input query is checked to see if
it is a valid timestamp, a 400 ('Bad Request') error is thrown if it is invalid or the client has not supplied dob query parameter. However, if the client
has supplied the dob query params, the dob is formatted and converted into milliseconds and the subtract it from the current time in milliseconds and then
subtract the year from javascript epoch time and then return the age to the client.

## Installation

```bash
$ yarn install
```

## Running the app

The project can be runned by both yarn and npm.

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

## Test

```bash
$ yarn run test
```
