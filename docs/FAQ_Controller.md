# FAQ Controller

## Requests:

### Get All FAQs

```GET: /faq/all```

Response (valid):
```
[
    {
        "_id": "629cd6fd83f99b12d718c105",
        "question": "Question",
        "answer": "Answer",
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
| 1001 | NULL ENTRY | There are no FAQs |

### Get FAQ by ID

```GET: /faq?id=[string]```

Response (valid):
```
{
  "_id": "629cd6fd83f99b12d718c105",
  "question": "Question",
  "answer": "Answer",
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
| 1001 | NULL ENTRY | There is no FAQ with that ID |

### Create FAQ

```POST: /faq/```

Body:
```
{
    "question": string,
    "answer": string
}
```

Response (valid):
```
{
  "_id": "629cd6fd83f99b12d718c105",
  "question": "Question",
  "answer": "Answer",
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
| 1002 | CREATE FAILED | Failed to create a faq |

### Update FAQ

```PUT: /faq?id=[string]```

Body:
```
{
    "question": string,
    "answer": string
}
```

Response (valid):
```
{
  "_id": "629cd6fd83f99b12d718c105",
  "question": "Question",
  "answer": "Answer",
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
| 1003 | UPDATE FAILED | Failed to update a faq |

### Delete FAQ

```DELETE: /faq/id=[string]```

Response (valid):
```
{
  "_id": "629cd6fd83f99b12d718c105",
  "question": "Question",
  "answer": "Answer",
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