define({ "api": [
  {
    "type": "post",
    "url": "api/login",
    "title": "Login",
    "version": "1.0.0",
    "name": "PostLogin",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Login existing User.  Returns the web token.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"username\" : \"komosaki\",\n  \"password\" : \"123456\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>User's Token and Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzksInVzZXJuYW1lIjoia29tb3Nha2kiLCJyb2xlIjoidXNlciIsImlhdCI6MTU2MzU4MTk0OSwiZXhwIjoxNTYzNjY4MzQ5fQ.UfZwewrax-7xR7Q3SDwIXB7iCmjSA9AUPyCb49q6zQY\",\n  \"id\": 79\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Invalid Credentials</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Required",
            "description": "<p>The username and password are required</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n  \"Error\": \"Invalid Credentials\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "api/register",
    "title": "Register",
    "version": "1.0.0",
    "name": "PostRegister",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Register new User.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>User's birthdate</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Defaults to 'user', other type is &quot;admin&quot; <strong>OPTIONAL</strong></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"username\" : \"testuser\",\n  \"password\" : \"123456\",\n  \"birthdate\" : \"1986-09-18\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "success",
            "description": "<p>Database Response</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n\"command\": \"INSERT\",\n\"rowCount\": 1,\n\"oid\": 0,\n\"rows\": [],\n\"fields\": [],\n\"_parsers\": [],\n\"_types\": {\n  \"_types\": {\n    \"arrayParser\": {}\n  },\n  \"text\": {},\n  \"binary\": {}\n},\n\"RowCtor\": null,\n\"rowAsArray\": false\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": false,
            "field": "UsernameNotAvailable",
            "description": "<p>Username is already taken.</p>"
          }
        ],
        "422": [
          {
            "group": "422",
            "optional": false,
            "field": "Required",
            "description": "<p>The username, password, and birthdate are required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\" : \"The username is alread taken.  Please select another\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Auth"
  },
  {
    "type": "null",
    "url": "null",
    "title": "Axios with Auth Configuration",
    "version": "1.0.0",
    "name": "AxiosConfig",
    "group": "Config",
    "examples": [
      {
        "title": "Axios Config",
        "content": "axios.create({\n   baseUrl: 'https://sleeptrack.herokuapp.com/',\n   headers: {\n     \"Content-Type\" : \"application/json\"\n     \"authorize\" : //User Token\n   }\n})",
        "type": "js"
      }
    ],
    "filename": "./data.js",
    "groupTitle": "Config"
  },
  {
    "type": "delete",
    "url": "api/sleepData/:id",
    "title": "Delete Sleep Data",
    "version": "1.0.0",
    "name": "DeleteSleepData",
    "group": "SleepData",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Delete the record with the matching params: id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>SleepData Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "newData",
            "description": "<p>Returns the SleepData Array</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[]",
          "type": "Array"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is not authorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DoesNotExist",
            "description": "<p>The Request Data does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\" : \"The request data does not exist\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "SleepData"
  },
  {
    "type": "post",
    "url": "api/sleepData",
    "title": "Add Sleep Data",
    "version": "1.0.0",
    "name": "PostSleepData",
    "group": "SleepData",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Posts new Sleep Data to the Database</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>Current userID, must match the current user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "start",
            "description": "<p>Sleep start Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "end",
            "description": "<p>Sleep end time</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "difference",
            "description": "<p>of end and start</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bed_t_tracking",
            "description": "<p>Bed Rating 1 - 4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "work_t_tracking",
            "description": "<p>Work Rating 1 - 4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avarage_rating",
            "description": "<p>Average Rating 1 - 4</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Array",
            "optional": false,
            "field": "sleepData",
            "description": "<p>Returns Sleep Data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n{\n  \"id\": 341,\n  \"userID\": 79,\n  \"start\": \"2019-07-02 04:50\",\n  \"end\": \"2019-07-02 13:40\",\n  \"hours\": 11,\n  \"bed_t_rating\": \"4\",\n  \"work_t_rating\": \"4\",\n  \"average_rating\": \"3\"\n}\n]",
          "type": "Array"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\" : \"The user data does not exist\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "SleepData"
  },
  {
    "type": "put",
    "url": "api/sleepData/:id",
    "title": "Edit Sleep Data",
    "version": "1.0.0",
    "name": "PutSleepData",
    "group": "SleepData",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Edits the record with the matching params: id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>SleepData Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userID",
            "description": "<p>Current userID, must match the current user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "start",
            "description": "<p>Sleep start Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "end",
            "description": "<p>Sleep end time</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "hours",
            "description": "<p>difference of end and start</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bed_t_tracking",
            "description": "<p>Bed Rating 1 - 4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "work_t_tracking",
            "description": "<p>Work Rating 1 - 4</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avarage_rating",
            "description": "<p>Average Rating 1 - 4</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n   \"userID\" : 79,\n   \"start\" : \"2019-07-02 03:50\",\n   \"end\" : \"2019-07-02 13:50\",\n   \"hours\" : 12,\n   \"bed_t_tracking\" : \"4\",\n   \"work_t_tracking\" : \"4\",\n   \"average_rating\" : \"3\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "optional": false,
            "field": "newData",
            "description": "<p>Returns the new data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n{\n  \"id\": 341,\n  \"userID\": 79,\n  \"start\": \"2019-07-02 04:50\",\n  \"end\": \"2019-07-02 13:40\",\n  \"hours\": 11,\n  \"bed_t_rating\": \"4\",\n  \"work_t_rating\": \"4\",\n  \"average_rating\": \"3\"\n}\n]",
          "type": "Array"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is not authorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DoesNotExist",
            "description": "<p>Sleep Data does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\" : \"Night not found\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "SleepData"
  },
  {
    "type": "delete",
    "url": "api/user/:id",
    "title": "Delete User",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "Users",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Deletes user that matches the param: id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "records",
            "description": "<p>Number of Records Deleted</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "1",
          "type": "Number"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is not authorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DoesNotExist",
            "description": "<p>User Data does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\" : \"The user data does not exist\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/user/:id",
    "title": "Get User",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "Users",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Return the user that matches the params: id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Id of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user and sleep data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n\"id\": 4,\n\"username\": \"Alfredo Olson\",\n\"password\": \"$2a$10$P7C0Y0TxSQxpk68JBDb1FuD8skLxWmI5UjoGxwluP.9o7A0fAkCoS\",\n\"role\": \"users\",\n\"birthdate\": \"1963-11-11T00:00:00.000Z\",\n\"sleepData\": [\n  {\n    \"id\": 10,\n    \"userID\": 4,\n    \"start\": \"2019-5-10 04:50\",\n    \"end\": \"2019-5-10 13:50\",\n    \"hours\": 9,\n    \"bed_t_rating\": \"2\",\n    \"work_t_rating\": \"4\",\n    \"average_rating\": \"4\"\n  },\n  {\n    \"id\": 42,\n    \"userID\": 4,\n    \"start\": \"2019-6-11 04:50\",\n    \"end\": \"2019-6-11 13:50\",\n    \"hours\": 9,\n    \"bed_t_rating\": \"3\",\n    \"work_t_rating\": \"1\",\n    \"average_rating\": \"3\"\n  },\n  {\n    \"id\": 47,\n    \"userID\": 4,\n    \"start\": \"2019-6-16 04:50\",\n    \"end\": \"2019-6-16 15:50\",\n    \"hours\": 11,\n    \"bed_t_rating\": \"2\",\n    \"work_t_rating\": \"1\",\n    \"average_rating\": \"4\"\n  },\n  {\n    \"id\": 62,\n    \"userID\": 4,\n    \"start\": \"2019-7-1 04:50\",\n    \"end\": \"2019-7-1 16:50\",\n    \"hours\": 12,\n    \"bed_t_rating\": \"4\",\n    \"work_t_rating\": \"4\",\n    \"average_rating\": \"4\"\n  },\n  {\n    \"id\": 63,\n    \"userID\": 4,\n    \"start\": \"2019-7-2 04:50\",\n    \"end\": \"2019-7-2 15:50\",\n    \"hours\": 11,\n    \"bed_t_rating\": \"4\",\n    \"work_t_rating\": \"4\",\n    \"average_rating\": \"3\"\n  },\n  {\n    \"id\": 79,\n    \"userID\": 4,\n    \"start\": \"2019-7-18 04:50\",\n    \"end\": \"2019-7-18 18:50\",\n    \"hours\": 14,\n    \"bed_t_rating\": \"2\",\n    \"work_t_rating\": \"2\",\n    \"average_rating\": \"2\"\n  },\n  {\n    \"id\": 93,\n    \"userID\": 4,\n    \"start\": \"2019-8-1 04:50\",\n    \"end\": \"2019-8-1 15:50\",\n    \"hours\": 11,\n    \"bed_t_rating\": \"3\",\n    \"work_t_rating\": \"1\",\n    \"average_rating\": \"4\"\n  }\n]\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserDoesNotExist",
            "description": "<p>The User does not exist</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is not authorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\": \"The user does not exist\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "api/users",
    "title": "Get Users",
    "version": "1.0.0",
    "name": "GetUsers",
    "group": "Users",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>Returns a list of all users</p>",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Array",
            "optional": false,
            "field": "users",
            "description": "<p>List of all Users in the Database</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "[\n{\n  \"id\": 13,\n  \"username\": \"Polly Fisher\",\n  \"password\": \"$2a$10$tMGRZ3tSncBjGilEWEmzJOp2ELVcLfHuzbA7b6S.sXNnA2rOgQQaG\",\n  \"role\": \"users\",\n  \"birthdate\": \"1983-09-27T00:00:00.000Z\"\n},\n{\n  \"id\": 14,\n  \"username\": \"Mr. Donnie Wilderman\",\n  \"password\": \"$2a$10$o/8jawAqu1EyJuxcFlcwV.KXKKUXCNkJARSUre38hdUj5uKHbbl46\",\n  \"role\": \"users\",\n  \"birthdate\": \"1972-02-01T00:00:00.000Z\"\n},\n{\n  \"id\": 15,\n  \"username\": \"Nikita Murphy\",\n  \"password\": \"$2a$10$JVBQ2PuweS4wPlLPfkB/JOhGeAFf9oixjfgXOvvjVjBBp5wMp17WC\",\n  \"role\": \"users\",\n  \"birthdate\": \"1986-02-15T00:00:00.000Z\"\n}\n]",
          "type": "Array"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\": \"Unauthorized\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "api/user/:id",
    "title": "Update User",
    "version": "1.0.0",
    "name": "PutUser",
    "group": "Users",
    "permission": [
      {
        "name": "User, Admin"
      }
    ],
    "description": "<p>Modifies the user with the updated information, If username or password is changed, user must be logged out.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>UserId</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>User's username</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>User's password</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthdate",
            "description": "<p>User's birthdate</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "checkpassword",
            "description": "<p>Current password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request",
          "content": "{\n  \"username\" : \"testuser\",\n  \"password\" : \"654321\",\n  \"birthdate\" : \"1986-09-18\"\n  \"checkpassword\" : \"123456\"\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "201": [
          {
            "group": "201",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Returns the user record</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n\"id\": 3,\n\"username\": \"admin\",\n\"password\": \"$2a$10$Cs.Y0qybIyUHeYmlWVgosuiUzM0hENF2AepC1j26xsMLKl1n.hM9q\",\n\"role\": \"admin\",\n\"birthdate\": \"2019-05-01T00:00:00.000Z\"\n}",
          "type": "Object"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>Invalid Password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotLoggedIn",
            "description": "<p>Please login / Sign Up</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response",
          "content": "{\n   \"Error\": \"Invalid Credentials\"\n}",
          "type": "Object"
        }
      ]
    },
    "filename": "./data.js",
    "groupTitle": "Users"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_mnt_s_Lambda_pt_build_week_sleeptracker_sleeptracker_doc_main_js",
    "groupTitle": "_mnt_s_Lambda_pt_build_week_sleeptracker_sleeptracker_doc_main_js",
    "name": ""
  }
] });
