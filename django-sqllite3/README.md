
# URL Shortner: Django Sqlite3 Jinja2

Shorten your long urls and share at ease


# Author: Supratim Samantray

  

# Tech Stack:

- **Framework**: Django
- **Database**: Sqlite3 (using ORM)
- **Template** Engine: Jinja2

# Pre-Requisite

 1. Python installed
 2. Django installed

# Run Locally

 - `python manage.py runserver` to run the application locally

# Usage
Open `http://localhost:8000` to see the application form to convert the longurl into short url

Open the _converted url_ in browser to see the redirection to the actual url
# APIs

## 1. Create Shorturl
- `POST` url
Shorten url and get short url id
```
http://your-host/api/create-surl
```
### Headers
| Field | Type | Value |
|--|--|--|
| Content-Type | String |application/json |
| X-CSRFToken | String | CSRF Token value for security

### Body
| Field | Type | Value |
|--|--|--|
| url | String |Url to be shorten|

### Response
| Field | Type | Value |
|--|--|--|
| status | String | ok or error|
|urlid| String | 6 character alphanumeric id


# To Do
- Include Analytics

# License

This project is open-source software licensed under the [MIT license](https://opensource.org/licenses/MIT).

