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
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sleeptrack.herokuapp.com/api/login"
      }
    ]
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
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sleeptrack.herokuapp.com/api/register"
      }
    ]
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
