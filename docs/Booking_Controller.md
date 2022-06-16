# Booking Controller

## Requests:

### Get all bookings

```GET: /booking/all```

Response:
```
[
    {
        "_id": "629cd75c83f99b12d718c122",
        "userId": "629cd68483f99b12d718c0eb",
        "destinationId": "629cd72c83f99b12d718c10b",
        "start": "1970-01-01T00:00.000Z",
        "end": "1970-01-01T00:00.000Z",
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
| 1001 | NULL ENTRY | There are no bookings |

### Get booking by ID

```GET: /booking?id=[string]```

Response:
```
{
    "_id": "629cd75c83f99b12d718c122",
    "userId": "629cd68483f99b12d718c0eb",
    "destinationId": "629cd72c83f99b12d718c10b",
    "start": "1970-01-01T00:00.000Z",
    "end": "1970-01-01T00:00.000Z",
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
| 1001 | NULL ENTRY | There is no booking with that ID |

### Create booking

```POST: /booking/```

Body:
```
{
    "userId": string,
    "destinationId": string,
    "start": date,
    "end": date
}
```

Response (valid):
```
{
    "_id": "629cd75c83f99b12d718c122",
    "userId": "629cd68483f99b12d718c0eb",
    "destinationId": "629cd72c83f99b12d718c10b",
    "start": "1970-01-01T00:00.000Z",
    "end": "1970-01-01T00:00.000Z",
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
| 1002 | CREATE FAILED | Failed to create a booking |

### Delete Booking

```DELETE: /booking?id=[string]```

Response (valid):
```
{
    "_id": "629cd75c83f99b12d718c122",
    "userId": "629cd68483f99b12d718c0eb",
    "destinationId": "629cd72c83f99b12d718c10b",
    "start": "1970-01-01T00:00.000Z",
    "end": "1970-01-01T00:00.000Z",
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
| 1004 | DELETE FAILED | Failed to delete a booking |