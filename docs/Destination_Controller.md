# Destination Controller

## Requests:

### Get top rated destinations

```GET: /destination/topRated```

Response (valid):
```
[
    {
        "_id": "629cd72c83f99b12d718c10b",
        "name": "Destination",
        "description": "Description",
        "imageUrl": null,
        "score": 5,
        "ratings": 1000
        "categories": [
            "category1",
            ...
        ],
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
| 1001 | NULL ENTRY | There are no destinations |

### Get all destinations

```GET: /destination/all```

Response (valid):
```
[
    {
        "_id": "629cd72c83f99b12d718c10b",
        "name": "Destination",
        "description": "Description",
        "imageUrl": null,
        "score": 5,
        "ratings": 1000
        "categories": [
            "category1",
            ...
        ],
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
| 1001 | NULL ENTRY | There are no destinations |

### Get destination by ID

```GET: /destination?id=[string]```

Response (valid):
```
{
    "_id": "629cd72c83f99b12d718c10b",
    "name": "Destination",
    "description": "Description",
    "imageUrl": null,
    "score": 5,
    "ratings": 1000
    "categories": [
        "category1",
        ...
    ],
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
| 1001 | NULL ENTRY | There is no destination with that ID |

### Filter destinations

```POST: /destination/filter```

Body:
```
{
    "filters": [string]
}
```

Response (valid):
```
[
    {
        "_id": "629cd72c83f99b12d718c10b",
        "name": "Destination",
        "description": "Description",
        "imageUrl": null,
        "score": 5,
        "ratings": 1000
        "categories": [
            "category1",
            ...
        ],
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
| 1001 | NULL ENTRY | There are no destinations matching the filter |

### Create destination

```POST: /destination```

Body:

Multipart/form-data:
```
name: string,
description: string,
categories: string; string; ...
files[0]: Image(jpg | png)
```

Response (valid):
```
{
    "_id": "629cd72c83f99b12d718c10b",
    "name": "Destination",
    "description": "Description",
    "imageUrl": null,
    "categories": [
        "category1",
        ...
    ],
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
| 1002 | CREATE FAILED | Failed to create a destination |


### Update destinations

```PUT: /destination?id=[string]```

Body:

Multipart/form-data:
```
name: string
description: string
categories: string; string; ...
files[0]: Image(jpg | png)
```

Response (valid):
```
{
    "_id": "629cd72c83f99b12d718c10b",
    "name": "Destination",
    "description": "Description",
    "imageUrl": null,
    "categories": [
        "category1",
        ...
    ],
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
| 1003 | UPDATE FAILED | Failed to update destination |

### Delete destination

```DELETE: /destination?id=[string]```

Response (valid):
```
{
    "_id": "629cd72c83f99b12d718c10b",
    "name": "Destination",
    "description": "Description",
    "imageUrl": null,
    "score": 5,
    "ratings": 1000,
    "categories": [
        "category1",
        ...
    ],
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
| 1004 | DELETE FAILED | Failed to delete destination |

### Get reviews for destination

```GET: /destination/review?id=[string]```

Response (valid):
```
[
    {
        "_id": "62ab4d8c55ebd00914643602",
        "from": {
            "_id": "629cd68483f99b12d718c0eb",
            "name": "Name",
            "lastName": "LastName",
            "email": "email",
            "password": "hash",
            "__v": 0
        },
        "destinationId": "629cd72c83f99b12d718c10b",
        "score": 5,
        "text": "Text",
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
| 1001 | NULL ENTRY | There are no reviews or destination does not exist |

### Create review for destination

```POST: /destination/review```

Body:
```
{
    "userId": string,
    "destinationId": string,
    "score": number,
    "text": string
}
```

Response (valid):
```
{
    "_id": "62ab4d8c55ebd00914643602",
    "userId": "629cd68483f99b12d718c0eb",
    "destinationId": "629cd72c83f99b12d718c10b",
    "score": 5,
    "text": "Text",
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
| 1002 | CREATE FAILED | Failed to create a review |