# User Controller

## Requests:

### Get user by ID

```GET: /user?id=[string]```

Response (valid):
```
{
    "_id": "629cd68483f99b12d718c0eb",
    "name": "Name",
    "lastName": "LastName",
    "email": "email",
    "password": "hash",
    "__v": 0
}
```

Response (error):
```
{
    "statusCode": 1001,
    "status": "NULL ENTRY"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1001 | NULL ENTRY | There is no user with that ID |

### Get all users

```GET: /user/all```

Response (valid):
```
[
    {
        "_id": "629cd68483f99b12d718c0eb",
        "name": "Name",
        "lastName": "LastName",
        "email": "email",
        "password": "hash",
        "__v": 0
    },
    ...
]
```

Response (error):
```
{
    "statusCode": 1001,
    "status": "NULL ENTRY"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1001 | NULL ENTRY | There are no users |

### Create user

```POST: /user/```

Body: 
```
{
    "name": string,
    "lastName": string,
    "email": string,
    "password": string
}
```

Response (valid):
```
{
    "_id": "629cd68483f99b12d718c0eb",
    "name": "Name",
    "lastName": "LastName",
    "email": "email",
    "password": "hash",
    "__v": 0
}
```

Response (error):
```
{
    "statusCode": 1002,
    "status": "CREATE FAILED"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1002 | CREATE FAILED | Failed to create user |
| 2001 | USER EXISTS | Failed to create user because email is taken |

### Update user

```PUT: /user?id=[string]```

Body:
```
{
    "name": string,
    "lastName": string,
    "email": string
}
```

Response (valid):
```
{
    "_id": "629cd68483f99b12d718c0eb",
    "name": "Name",
    "lastName": "LastName",
    "email": "email",
    "password": "hash",
    "__v": 0
}
```

Response (error):
```
{
    "statusCode": 1003
    "status": "UPDATE FAILED"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1003 | UPDATE FAILED | Failed to update user |

### Delete user

```DELETE: /user?id=[string]```

Response (valid):
```
{
    "_id": "629cd68483f99b12d718c0eb",
    "name": "Name",
    "lastName": "LastName",
    "email": "email",
    "password": "hash",
    "__v": 0
}
```

Response (error):
```
{
    "statusCode": 1004
    "status": "DELETE FAILED"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1004 | DELETE FAILED | Failed to delete user |

### Login

```POST: /user/login```

Body:
```
{
    "email": string,
    "password": string
}
```

Response (valid):
```
{
    "_id": "629cd68483f99b12d718c0eb",
    "name": "Name",
    "lastName": "LastName",
    "email": "email",
    "password": "hash",
    "__v": 0
}
```

Response (error):
```
{
    "statusCode": 1001
    "status": "NULL ENTRY"
}
```

Response codes:

| Response code | Response status | Reason |
|---|---|---|
| 1001 | NULL ENTRY | There is no user with that email |
| 2002 | PASSWORD MISMATCH | Password provided does not match the one in the database |