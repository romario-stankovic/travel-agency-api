# API Responses

This is a generalized list of response codes that can be received when making a request to the API

## Data

| Response code | Response status | Reason |
|---|---|---|
| 0 | OK | All is fine |
| 1001 | NULL ENTRY | There is no entry in the database |
| 1002 | CREATE FAILED | Failed to create the document in the database |
| 1003 | UPDATE FAILED | Failed to update the document in the database |
| 1004 | DELETE FAILED | Failed to delete the document in the database |

## Authentication

Authentication is used to register the user to the API and allowing him to make requests. In case the user cannot authenticate with the API, these responses will be given.

| Response code | Response status | Reason |
|---|---|---|
| 2001 | USER EXISTS | The user already exists  |
| 2002 | PASSWORD MISMATCH | The password does not match the one in the database |