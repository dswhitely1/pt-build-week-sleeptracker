/**
 *  @api {post} api/login Login
 *  @apiVersion 1.0.0
 *  @apiName PostLogin
 *  @apiGroup Auth
 *  @apiPermission none
 *
 *  @apiDescription Login existing User.  Returns the web token.
 *
 *  @apiParam {String} username User's username
 *  @apiParam {String} password User's password
 *  @apiSuccess (200) {Object} success User's Token and Id
 *  @apiError (401) InvalidCredentials Invalid Credentials
 *  @apiError (422) Required The username and password are required
 *
 *  @apiParamExample {Object} Request
 *  {
 *    "username" : "komosaki",
 *    "password" : "123456"
 *  }
 *
 *  @apiSuccessExample {Object} Response
 *  {
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksInVzZXJuYW1lIjoia29tb3Nha2kiLCJyb2xlIjoidXNlciIsImlhdCI6MTU2MzU4MTk0OSwiZXhwIjoxNTYzNjY4MzQ5fQ.UfZwewrax-7xR7Q3SDwIXB7iCmjSA9AUPyCb49q6zQY",
 *    "id": 79
 *  }
 *
 *  @apiErrorExample {Object} Response
 *  {
 *    "Error": "Invalid Credentials"
 *  }
 */
/**
 * @api {post} api/register Register
 * @apiVersion 1.0.0
 * @apiName PostRegister
 * @apiGroup Auth
 * @apiPermission none
 * 
 * @apiDescription Register new User.
 * 
 * @apiParam {String} username User's username
 * @apiParam {String} password User's password
 * @apiParam {Date} birthdate User's birthdate
 * @apiParam {String} role Defaults to 'user', other type is "admin" **OPTIONAL**
 * 
 * @apiSuccess (201) {Object} success Database Response
 * 
 * @apiError (400) UsernameNotAvailable Username is already taken.
 * @apiError (422) Required The username, password, and birthdate are required.
 * 
 * @apiParamExample {Object} Request
 * {
 *   "username" : "testuser",
 *   "password" : "123456",
 *   "birthdate" : "1986-09-18"
 * }
 * 
 * @apiSuccessExample {Object} Response
 *{
 * "command": "INSERT",
 * "rowCount": 1,
 * "oid": 0,
 * "rows": [],
 * "fields": [],
 * "_parsers": [],
 * "_types": {
 *   "_types": {
 *     "arrayParser": {}
 *   },
 *   "text": {},
 *   "binary": {}
 * },
 * "RowCtor": null,
 * "rowAsArray": false
 *}
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error" : "The username is alread taken.  Please select another"
 * }
 */
/** 
 * @api {null}  null Axios with Auth Configuration
 * @apiVersion 1.0.0
 * @apiName AxiosConfig
 * @apiGroup Config
 * 
 * @apiExample {js} Axios Config
 * axios.create({
 *    baseUrl: 'https://sleeptrack.herokuapp.com/',
 *    headers: {
 *      "Content-Type" : "application/json"
 *      "authorize" : //User Token
 *    }
 * })
*/
/**
 * @api {get} api/users Get Users
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 * @apiPermission Admin
 * 
 * @apiDescription Returns a list of all users
 * 
 * @apiSuccess (200) {Array} users List of all Users in the Database
 * @apiError Unauthorized User is unauthorized
 * @apiError NotLoggedIn Please login / Sign up
 * 
 * @apiSuccessExample {Array} Response
 * [
 * {
 *   "id": 13,
 *   "username": "Polly Fisher",
 *   "password": "$2a$10$tMGRZ3tSncBjGilEWEmzJOp2ELVcLfHuzbA7b6S.sXNnA2rOgQQaG",
 *   "role": "users",
 *   "birthdate": "1983-09-27T00:00:00.000Z"
 * },
 * {
 *   "id": 14,
 *   "username": "Mr. Donnie Wilderman",
 *   "password": "$2a$10$o/8jawAqu1EyJuxcFlcwV.KXKKUXCNkJARSUre38hdUj5uKHbbl46",
 *   "role": "users",
 *   "birthdate": "1972-02-01T00:00:00.000Z"
 * },
 * {
 *   "id": 15,
 *   "username": "Nikita Murphy",
 *   "password": "$2a$10$JVBQ2PuweS4wPlLPfkB/JOhGeAFf9oixjfgXOvvjVjBBp5wMp17WC",
 *   "role": "users",
 *   "birthdate": "1986-02-15T00:00:00.000Z"
 * }
 * ]
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error": "Unauthorized"
 * }
 * 
 */
/**
 * @api {get} api/user/:id Get User
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
 * @apiPermission User, Admin
 * 
 * @apiDescription Return the user that matches the params: id
 * 
 * @apiParam {Number} id User Id of the user
 * @apiSuccess (200) {Object} user  The user and sleep data
 * @apiError UserDoesNotExist The User does not exist
 * @apiError Unauthorized User is not authorized
 * @apiError NotLoggedIn  Please login / Sign Up
 * 
 * @apiSuccessExample {Object} Response
 * {
 * "id": 4,
 *"username": "Alfredo Olson",
 * "password": "$2a$10$P7C0Y0TxSQxpk68JBDb1FuD8skLxWmI5UjoGxwluP.9o7A0fAkCoS",
 * "role": "users",
 * "birthdate": "1963-11-11T00:00:00.000Z",
 * "sleepData": [
 *   {
 *     "id": 10,
 *     "userID": 4,
 *     "start": "2019-5-10 04:50",
 *     "end": "2019-5-10 13:50",
 *     "hours": 9,
 *     "bed_t_rating": "2",
 *     "work_t_rating": "4",
 *     "average_rating": "4"
 *   },
 *   {
 *     "id": 42,
 *     "userID": 4,
 *     "start": "2019-6-11 04:50",
 *     "end": "2019-6-11 13:50",
 *     "hours": 9,
 *     "bed_t_rating": "3",
 *     "work_t_rating": "1",
 *     "average_rating": "3"
 *   },
 *   {
 *     "id": 47,
 *     "userID": 4,
 *     "start": "2019-6-16 04:50",
 *     "end": "2019-6-16 15:50",
 *     "hours": 11,
 *     "bed_t_rating": "2",
 *     "work_t_rating": "1",
 *     "average_rating": "4"
 *   },
 *   {
 *     "id": 62,
 *     "userID": 4,
 *     "start": "2019-7-1 04:50",
 *     "end": "2019-7-1 16:50",
 *     "hours": 12,
 *     "bed_t_rating": "4",
 *     "work_t_rating": "4",
 *     "average_rating": "4"
 *   },
 *   {
 *     "id": 63,
 *     "userID": 4,
 *     "start": "2019-7-2 04:50",
 *     "end": "2019-7-2 15:50",
 *     "hours": 11,
 *     "bed_t_rating": "4",
 *     "work_t_rating": "4",
 *     "average_rating": "3"
 *   },
 *   {
 *     "id": 79,
 *     "userID": 4,
 *     "start": "2019-7-18 04:50",
 *     "end": "2019-7-18 18:50",
 *     "hours": 14,
 *     "bed_t_rating": "2",
 *     "work_t_rating": "2",
 *     "average_rating": "2"
 *   },
 *   {
 *     "id": 93,
 *     "userID": 4,
 *     "start": "2019-8-1 04:50",
 *     "end": "2019-8-1 15:50",
 *     "hours": 11,
 *     "bed_t_rating": "3",
 *     "work_t_rating": "1",
 *     "average_rating": "4"
 *   }
 * ]
 *}
 * @apiErrorExample {Object} Response
 * {
 *    "Error": "The user does not exist"
 * }
 */
/**
 * @api {put} api/user/:id Update User
 * @apiVersion 1.0.0
 * @apiName PutUser
 * @apiGroup Users
 * @apiPermission User, Admin
 * 
 * @apiDescription Modifies the user with the updated information, If username or password is changed, user must be logged out.
 * 
 * @apiParam {Number} id UserId
 * @apiParam {string} username User's username 
 * @apiParam {string} password User's password 
 * @apiParam {Date} birthdate User's birthdate 
 * @apiParam {string} checkpassword Current password of user
 * 
 * @apiSuccess (201) {Object} user  Returns the user record
 * 
 * @apiError InvalidCredentials Invalid Password
 * @apiError NotLoggedIn Please login / Sign Up
 * 
 * 
 * @apiParamExample {Object} Request
 * {
 *   "username" : "testuser",
 *   "password" : "654321",
 *   "birthdate" : "1986-09-18"
 *   "checkpassword" : "123456"
 * }
 * 
 * @apiSuccessExample {Object} Response
 * {
 * "id": 3,
 * "username": "admin",
 * "password": "$2a$10$Cs.Y0qybIyUHeYmlWVgosuiUzM0hENF2AepC1j26xsMLKl1n.hM9q",
 * "role": "admin",
 * "birthdate": "2019-05-01T00:00:00.000Z"
 *}
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error": "Invalid Credentials"
 * }
 */
/**
 * @api {delete} api/user/:id Delete User
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiPermission User, Admin
 * 
 * @apiDescription Deletes user that matches the param: id
 * 
 * @apiParam {Number} id UserId
 * 
 * @apiSuccess {Number} records Number of Records Deleted
 * 
 * @apiError Unauthorized User is not authorized
 * @apiError DoesNotExist User Data does not exist
 * @apiError NotLoggedIn  Please login / Sign Up
 * 
 * @apiSuccessExample {Number} Response
 * 1
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error" : "The user data does not exist"
 * }
 */
/**
 * @api {post} api/sleepData Add Sleep Data
 * @apiVersion 1.0.0
 * @apiName PostSleepData
 * @apiGroup SleepData
 * @apiPermission User, Admin
 * 
 * @apiDescription Posts new Sleep Data to the Database
 * 
 * @apiParam {Number} userID Current userID, must match the current user.
 * @apiParam {Time} start Sleep start Time
 * @apiParam {Time} end Sleep end time
 * @apiParam {Number} difference of end and start
 * @apiParam {String} bed_t_tracking Bed Rating 1 - 4
 * @apiParam {String} work_t_tracking Work Rating 1 - 4
 * @apiParam {String} avarage_rating Average Rating 1 - 4
 * 
 * @apiSuccess (201) {Array} sleepData Returns Sleep Data
 *
 * 
 * @apiError Unauthorized User is not Authorized
 * @apiError NotLoggedIn Please login / Sign Up
 * @apiSuccessExample {Array} Response
 * [
 * {
 *   "id": 341,
 *   "userID": 79,
 *   "start": "2019-07-02 04:50",
 *   "end": "2019-07-02 13:40",
 *   "hours": 11,
 *   "bed_t_rating": "4",
 *   "work_t_rating": "4",
 *   "average_rating": "3"
 * }
 *]
 * @apiErrorExample {Object} Response
 * {
 *    "Error" : "The user data does not exist"
 * }
 */
/**
 * @api {put} api/sleepData/:id Edit Sleep Data
 * @apiVersion 1.0.0
 * @apiName PutSleepData
 * @apiGroup SleepData
 * @apiPermission User, Admin
 * 
 * @apiDescription Edits the record with the matching params: id
 * 
 * @apiParam {Number} id SleepData Id
 * @apiParam {Number} userID Current userID, must match the current user.
 * @apiParam {Time} start Sleep start Time
 * @apiParam {Time} end Sleep end time
 * @apiParam {Number} hours difference of end and start
 * @apiParam {String} bed_t_tracking Bed Rating 1 - 4
 * @apiParam {String} work_t_tracking Work Rating 1 - 4
 * @apiParam {String} avarage_rating Average Rating 1 - 4
 * 
 * @apiSuccess (201) newData Returns the new data
 * @apiError Unauthorized User is not authorized
 * @apiError DoesNotExist Sleep Data does not exist
 * @apiError NotLoggedIn  Please login / Sign Up
 * 
 * @apiParamExample {Object} Request
 * {
 *    "userID" : 79,
 *    "start" : "2019-07-02 03:50",
 *    "end" : "2019-07-02 13:50",
 *    "hours" : 12,
 *    "bed_t_tracking" : "4",
 *    "work_t_tracking" : "4",
 *    "average_rating" : "3"
 * }
 * 
 * @apiSuccessExample {Array} Response
 * [
 * {
 *   "id": 341,
 *   "userID": 79,
 *   "start": "2019-07-02 04:50",
 *   "end": "2019-07-02 13:40",
 *   "hours": 11,
 *   "bed_t_rating": "4",
 *   "work_t_rating": "4",
 *   "average_rating": "3"
 * }
 *]
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error" : "Night not found"
 * }
 */
/**
 * @api {delete} api/sleepData/:id Delete Sleep Data
 * @apiVersion 1.0.0
 * @apiName DeleteSleepData
 * @apiGroup SleepData
 * @apiPermission User, Admin
 * 
 * @apiDescription Delete the record with the matching params: id
 * 
 * @apiParam {Number} id SleepData Id
 * 
 * @apiSuccess (200) newData Returns the SleepData Array
 * @apiError Unauthorized User is not authorized
 * @apiError DoesNotExist The Request Data does not exist
 * @apiError NotLoggedIn  Please login / Sign Up
 * 
 * @apiSuccessExample {Array} Response
 * []
 * 
 * @apiErrorExample {Object} Response
 * {
 *    "Error" : "The request data does not exist"
 * }
 */
