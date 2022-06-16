# MOTD Controller

## Requests:

### Get random MOTD

```GET: /motd/random```

Response (valid):
```
{
    "_id": "629cd6ee83f99b12d718c0fc",
    "message": "This is message 1",
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
| 1001 | NULL ENTRY | There are no motds to choose from |

### Get MOTD by ID

```GET: /motd?id=[string]```

Response (valid):
```
{
    "_id": "629cd6ee83f99b12d718c0fc",
    "message": "This is message 1",
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
| 1001 | NULL ENTRY | There is no motd with that ID |


### Get all MOTD

```GET: /motd/all```

Response (valid):
```
[
    {
        "_id": "629cd6ee83f99b12d718c0fc",
        "message": "This is message 1",
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
| 1001 | NULL ENTRY | There are no motds |

### Create MOTD

```POST: /motd/```

Body:
```
{
    "message": string
}
```

Response (valid):
```
{
    "_id": "629cd6ee83f99b12d718c0fc",
    "message": "This is message 1",
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
| 1002 | CREATE FAILED | Failed to create a motd |


### Update MOTD

```PUT: /motd?id=[string]```

Body:
```
{
    "message": string
}
```

Response (valid):
```
{
    "_id": "629cd6ee83f99b12d718c0fc",
    "message": "This is message 1",
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
| 1003 | UPDATE FAILED | Failed to update a motd |

### Delete MOTD

```DELETE: /motd?id=[string]```

Response (valid):
```
{
    "_id": "629cd6ee83f99b12d718c0fc",
    "message": "This is message 1",
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
| 1004 | DELETE FAILED | Failed to delete a motd |