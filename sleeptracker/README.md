# SleepTracker v1.0.0

This is the backend documentation for Sleep Tracker Build Week Project

- [Auth](#auth)
	- [Login](#login)
	- [Register](#register)
	
- [Config](#config)
	- [Axios with Auth Configuration](#axios-with-auth-configuration)
	
- [SleepData](#sleepdata)
	- [Delete Sleep Data](#delete-sleep-data)
	- [Add Sleep Data](#add-sleep-data)
	- [Edit Sleep Data](#edit-sleep-data)
	
- [Users](#users)
	- [Delete User](#delete-user)
	- [Get User](#get-user)
	- [Get Users](#get-users)
	- [Update User](#update-user)
	


# Auth

## Login

<p>Login existing User.  Returns the web token.</p>

	POST api/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username</p>							|
| password			| String			|  <p>User's password</p>							|

### Success Response

Response

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksInVzZXJuYW1lIjoia29tb3Nha2kiLCJyb2xlIjoidXNlciIsImlhdCI6MTU2MzU4MTk0OSwiZXhwIjoxNTYzNjY4MzQ5fQ.UfZwewrax-7xR7Q3SDwIXB7iCmjSA9AUPyCb49q6zQY",
  "id": 79
}
```
### Error Response

Response

```
{
  "Error": "Invalid Credentials"
}
```
## Register

<p>Register new User.</p>

	POST api/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>User's username</p>							|
| password			| String			|  <p>User's password</p>							|
| birthdate			| Date			|  <p>User's birthdate</p>							|
| role			| String			|  <p>Defaults to 'user', other type is &quot;admin&quot; <strong>OPTIONAL</strong></p>							|

### Success Response

Response

```
24
```
### Error Response

Response

```
{
   "Error" : "The username is alread taken.  Please select another"
}
```
# Config

## Axios with Auth Configuration



	NULL null


### Examples

Axios Config

```
axios.create({
   baseUrl: 'https://sleeptrack.herokuapp.com/',
   headers: {
     "Content-Type" : "application/json"
     "authorize" : //User Token
   }
})
```

# SleepData

## Delete Sleep Data

<p>Delete the record with the matching params: id</p>

	DELETE api/sleepData/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>SleepData Id</p>							|

### Success Response

Response

```
[]
```
### Error Response

Response

```
{
   "Error" : "The request data does not exist"
}
```
## Add Sleep Data

<p>Posts new Sleep Data to the Database</p>

	POST api/sleepData


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| userID			| Number			|  <p>Current userID, must match the current user.</p>							|
| start			| Time			|  <p>Sleep start Time</p>							|
| end			| Time			|  <p>Sleep end time</p>							|
| difference			| Number			|  <p>of end and start</p>							|
| bed_t_tracking			| String			|  <p>Bed Rating 1 - 4</p>							|
| work_t_tracking			| String			|  <p>Work Rating 1 - 4</p>							|
| avarage_rating			| String			|  <p>Average Rating 1 - 4</p>							|

### Success Response

Response

```
[
{
  "id": 341,
  "userID": 79,
  "start": "2019-07-02 04:50",
  "end": "2019-07-02 13:40",
  "hours": 11,
  "bed_t_rating": "4",
  "work_t_rating": "4",
  "average_rating": "3"
}
]
```
### Error Response

Response

```
{
   "Error" : "The user data does not exist"
}
```
## Edit Sleep Data

<p>Edits the record with the matching params: id</p>

	PUT api/sleepData/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>SleepData Id</p>							|
| userID			| Number			|  <p>Current userID, must match the current user.</p>							|
| start			| Time			|  <p>Sleep start Time</p>							|
| end			| Time			|  <p>Sleep end time</p>							|
| hours			| Number			|  <p>difference of end and start</p>							|
| bed_t_tracking			| String			|  <p>Bed Rating 1 - 4</p>							|
| work_t_tracking			| String			|  <p>Work Rating 1 - 4</p>							|
| avarage_rating			| String			|  <p>Average Rating 1 - 4</p>							|

### Success Response

Response

```
[
{
  "id": 341,
  "userID": 79,
  "start": "2019-07-02 04:50",
  "end": "2019-07-02 13:40",
  "hours": 11,
  "bed_t_rating": "4",
  "work_t_rating": "4",
  "average_rating": "3"
}
]
```
### Error Response

Response

```
{
   "Error" : "Night not found"
}
```
# Users

## Delete User

<p>Deletes user that matches the param: id</p>

	DELETE api/user/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>UserId</p>							|

### Success Response

Response

```
1
```
### Error Response

Response

```
{
   "Error" : "The user data does not exist"
}
```
## Get User

<p>Return the user that matches the params: id</p>

	GET api/user/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>User Id of the user</p>							|

### Success Response

Response

```
{
"id": 4,
"username": "Alfredo Olson",
"password": "$2a$10$P7C0Y0TxSQxpk68JBDb1FuD8skLxWmI5UjoGxwluP.9o7A0fAkCoS",
"role": "users",
"birthdate": "1963-11-11T00:00:00.000Z",
"sleepData": [
  {
    "id": 10,
    "userID": 4,
    "start": "2019-5-10 04:50",
    "end": "2019-5-10 13:50",
    "hours": 9,
    "bed_t_rating": "2",
    "work_t_rating": "4",
    "average_rating": "4"
  },
  {
    "id": 42,
    "userID": 4,
    "start": "2019-6-11 04:50",
    "end": "2019-6-11 13:50",
    "hours": 9,
    "bed_t_rating": "3",
    "work_t_rating": "1",
    "average_rating": "3"
  },
  {
    "id": 47,
    "userID": 4,
    "start": "2019-6-16 04:50",
    "end": "2019-6-16 15:50",
    "hours": 11,
    "bed_t_rating": "2",
    "work_t_rating": "1",
    "average_rating": "4"
  },
  {
    "id": 62,
    "userID": 4,
    "start": "2019-7-1 04:50",
    "end": "2019-7-1 16:50",
    "hours": 12,
    "bed_t_rating": "4",
    "work_t_rating": "4",
    "average_rating": "4"
  },
  {
    "id": 63,
    "userID": 4,
    "start": "2019-7-2 04:50",
    "end": "2019-7-2 15:50",
    "hours": 11,
    "bed_t_rating": "4",
    "work_t_rating": "4",
    "average_rating": "3"
  },
  {
    "id": 79,
    "userID": 4,
    "start": "2019-7-18 04:50",
    "end": "2019-7-18 18:50",
    "hours": 14,
    "bed_t_rating": "2",
    "work_t_rating": "2",
    "average_rating": "2"
  },
  {
    "id": 93,
    "userID": 4,
    "start": "2019-8-1 04:50",
    "end": "2019-8-1 15:50",
    "hours": 11,
    "bed_t_rating": "3",
    "work_t_rating": "1",
    "average_rating": "4"
  }
]
}
```
### Error Response

Response

```
{
   "Error": "The user does not exist"
}
```
## Get Users

<p>Returns a list of all users</p>

	GET api/users


### Success Response

Response

```
[
{
  "id": 13,
  "username": "Polly Fisher",
  "password": "$2a$10$tMGRZ3tSncBjGilEWEmzJOp2ELVcLfHuzbA7b6S.sXNnA2rOgQQaG",
  "role": "users",
  "birthdate": "1983-09-27T00:00:00.000Z"
},
{
  "id": 14,
  "username": "Mr. Donnie Wilderman",
  "password": "$2a$10$o/8jawAqu1EyJuxcFlcwV.KXKKUXCNkJARSUre38hdUj5uKHbbl46",
  "role": "users",
  "birthdate": "1972-02-01T00:00:00.000Z"
},
{
  "id": 15,
  "username": "Nikita Murphy",
  "password": "$2a$10$JVBQ2PuweS4wPlLPfkB/JOhGeAFf9oixjfgXOvvjVjBBp5wMp17WC",
  "role": "users",
  "birthdate": "1986-02-15T00:00:00.000Z"
}
]
```
### Error Response

Response

```
{
   "Error": "Unauthorized"
}
```
## Update User

<p>Modifies the user with the updated information, If username or password is changed, user must be logged out.</p>

	PUT api/user/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>UserId</p>							|
| username			| string			|  <p>User's username</p>							|
| password			| string			|  <p>User's password</p>							|
| birthdate			| Date			|  <p>User's birthdate</p>							|
| checkpassword			| string			|  <p>Current password of user</p>							|

### Success Response

Response

```
{
"id": 3,
"username": "admin",
"password": "$2a$10$Cs.Y0qybIyUHeYmlWVgosuiUzM0hENF2AepC1j26xsMLKl1n.hM9q",
"role": "admin",
"birthdate": "2019-05-01T00:00:00.000Z"
}
```
### Error Response

Response

```
{
   "Error": "Invalid Credentials"
}
```

