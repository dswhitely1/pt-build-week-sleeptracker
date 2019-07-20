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
