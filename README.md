# Intranet Security Company

## DESCRIPTION

Intranet Security Company is a utility tech for security companies to keep track internally. You can test it [here](https://its-2021.herokuapp.com/).

## DB SCHEMAS

### USERS

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION     |
|------------|--------------|-----------|----------|----------------|
| username   | string       |           | YES      |                |
| email      | string       |           | YES      | RegExp, Unique |
| password   | string       |           | YES      |                |
| role       | string       |           | NO       |                |

### EMPLOYEES

| KEY        | TYPE         | REFERENCE | REQUIRED | VALIDATION           |
|------------|--------------|-----------|----------|----------------------|
| employee   | string       |           | YES      |                      |
| shift      | string       |           | NO       |                      |
| birthDate  | date         |           | NO       |                      |
| phone      | string       |           | YES      | Minlength, Maxlength |

### GPS

| KEY            | TYPE         | REFERENCE | REQUIRED | VALIDATION           |
|----------------|--------------|-----------|----------|----------------------|
| date           | date         |           | YES      |                      |
| action         | string       |           | YES      | Enum                 |
| employee       | [ ObjectId ] | Employees | YES      |                      |
| company        | string       |           | NO       |                      |
| device         | string       |           | YES      |                      |
| model          | string       |           | YES      |                      |
| identification | number       |           | YES      | Max, Min             |
| vehicle        | Object       |           | NO       |                      |
| instDescrip    | string       |           | NO       |                      |
| instAddress    | string       |           | NO       |                      |
| location       | string       |           | NO       |                      |
| city           | string       |           | NO       |                      |
| province       | string       |           | NO       |                      |
| notes          | string       |           | NO       |                      |

## API ROUTES

### AUTHENTICATION ENDPOINTS

| METHOD | URL            | AUTH | FUNCTION             |
|--------|----------------|------|----------------------|
| POST   | '/auth/login'  | NO   | Authenticate a user  |

### USERS ENDPOINTS

| METHOD | URL          | AUTH | FUNCTION            |
|--------|--------------|------|---------------------|
| POST   | '/users/me'  | YES  | Update user profile |

### EMPLOYEES ENDPOINTS

| METHOD | URL               | AUTH | FUNCTION                    |
|--------|-------------------|------|-----------------------------|
| POST   | '/employees/'     | YES  | Create a new employee       |
| GET    | '/employees/'     | YES  | Get employees list          |
| GET    | '/employees/:id'  | YES  | Get employees profile       |
| PUT    | '/employees/:id'  | YES  | Update employee information |
| DELETE | '/employees/:id'  | YES  | Delete an employee          |

### GPS ENDPOINTS

| METHOD | URL                         | AUTH | FUNCTION              |
|--------|-----------------------------|------|-----------------------|
| POST   | '/gps/'                     | YES  | Create a gps device   |
| GET    | '/gps/'                     | YES  | Get gps list          |
| GET    | '/gps/:id'                  | YES  | Get a gps device      |
| GET    | '/gps/date/:dateId'         | YES  | List gps by date      |
| GET    | '/gps/city/:cityId'         | YES  | List gps by city      |
| GET    | '/gps/province/:provinceId' | YES  | List gps by province  |
| PUT    | '/gps/:id'                  | YES  | Update a gps device   |
| DELETE | '/gps/:id'                  | YES  | Delete a gps device   |
