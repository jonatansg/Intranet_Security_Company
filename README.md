# Intranet_Security_Company

## DESCRIPTION
Intranet_Security_Company is a utility tech for security companies to keep track internally. 

## DB SCHEMAS

### USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|------------|--------------|-----------|----------|----------------|
| name       | string       |           | YES      |                |
| email      | string       |           | YES      | RegExp, Unique |
| password   | string       |           | YES      |                |

### EMPLOYEES

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION           |
|------------|--------------|-----------|----------|----------------------|
| employees  | string       |           | YES      |                      |
| shift      | string       |           | NO       |                      |
| age        | number       |           | NO       |                      |
| phone      | number       |           | YES      | Minlength, Maxlength |

### GPS

| KEY           | TYPE         | REFERENCE | REQUIRED | VALIDATION           |
|---------------|--------------|-----------|----------|----------------------|
| date          | date         |           | YES      |                      |
| time          | string       |           | YES      |                      |
| action        | string       |           | YES      |                      |
| employees     | [ ObjectId ] | Employees | YES      |                      |
| device        | string       |           | YES      |                      |
| model         | string       |           | YES      |                      |
| identificator | number       |           | YES      | Minlength, Maxlength |
| vehicle       | Object       |           | NO       |                      |
| inst_descrip  | string       |           | NO       |                      |
| company_name  | string       |           | YES      |                      |
| inst_address  | string       |           | NO       |                      |
| location      | string       |           | NO       |                      |
| city          | string       |           | NO       |                      |
| province      | string       |           | NO       |                      |
| notes         | string       |           | NO       |                      |

## API ROUTES

### AUTHENTICATION ENDPOINTS

| METHOD | URL            | AUTH | FUNCTION             |
|--------|----------------|------|----------------------|
| POST   | '/auth/login'  | NO   | Authenticate a user  |

### USERS ENDPOINTS

| METHOD | URL          | AUTH | FUNCTION         |
|--------|--------------|------|------------------|
| GET    | '/users/me'  | YES  | Get user profile |

### EMPLOYEES ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                    |
|--------|-------------------|------|-----------------------------|
| POST   | '/employees/'     | YES  | Get a new employee          |
| GET    | '/employees/'     | YES  | Get employees list          |
| GET    | '/employees/:id'  | YES  | Get employees profile       |
| PUT    | '/employees/:id'  | YES  | Update employee information |
| DELETE | '/employees/:id'  | YES  | Delete an employee          |

### GPS ENDPOINTS

| METHOD | URL                         | AUTH | FUNCTION              |
|--------|-----------------------------|------|-----------------------|
| POST   | '/gps/'                     | YES  | Get a gps device      |
| GET    | '/gps/'                     | YES  | Get gps list          |
| GET    | '/gps/:id'                  | YES  | Get a gps device      |
| PUT    | '/gps/:id'                  | YES  | Update a gps device   |
| DELETE | '/gps/:id'                  | YES  | Delete a gps device   |
| GET    | '/gps/date/:dateId'         | YES  | List gps by date      |
| GET    | '/gps/city/:cityId'         | YES  | List gps by city      |
| GET    | '/gps/province/:provinceId' | YES  | List gps by province  |