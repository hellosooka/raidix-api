> ДЛЯ УДОБСТВА ЗАДЕПЛОИЛ НА HEROKU
https://raidix-api.herokuapp.com/api
### **Фронт полностью взаимодействует HEROKU**
# Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# API QUERY
## Get all products
> Method: **GET** 
```
http://raidix-api.herokuapp.com/api/product/all
```
### Response example
```json
"data": [
 {
  "title": "test 2",
  "weight": "50",
  "isExist": false,
  "date": 10,
  "customer": "changed",
  "id": 0
 }
]
```

## Create product
> Method: **POST** 
```
http://raidix-api.herokuapp.com/api/product
```
### Response example
```json
{
 "title": "test",
 "weight": "50",
 "isExist": true,
 "date": 10,
 "customer": "test cust",
 "id": 0
}
```

### Delete product by ID
> Method: **DELETE** 
```
http://raidix-api.herokuapp.com/api/product/[ID]
```
### Response example
```json
{
 "title": "test",
 "weight": "50",
 "isExist": true,
 "date": 10,
 "customer": "test cust",
 "id": 0
}
```

### Change product by ID
> Method: **PUT** 
```
http://raidix-api.herokuapp.com/api/product/[ID]
```
### Response example
```json
[
 {
  "title": "test 2",
  "weight": "50",
  "isExist": false,
  "date": 10,
  "customer": "changed",
  "id": 0
 }
]
```
# Frameworks
- NEST.JS
- Moment.js
- Axios
