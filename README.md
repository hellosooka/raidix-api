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
> ДЛЯ УДОБСТВА ЗАДЕПЛОИЛ НА HEROKU
https://raidix-api.herokuapp.com/api
## Get all products
> Method: **GET** 
```
http://[HOST]/api/product/all
```
### Response example
```json
"data": [
 {
  "title": "test 2",
  "weight": "50",
  "isExist": false,
  "Date": 10,
  "customer": "changed",
  "id": 0
 }
]
```

## Create product by ID
> Method: **POST** 
```
http://[HOST]/api/product/[ID]
```
### Response example
```json
{
 "title": "test",
 "weight": "50",
 "isExist": true,
 "Date": 10,
 "customer": "test cust",
 "id": 0
}
```

### Delete product by ID
> Method: **DELETE** 
```
http://[HOST]/api/product/[ID]
```
### Response example
```json
{
 "title": "test",
 "weight": "50",
 "isExist": true,
 "Date": 10,
 "customer": "test cust",
 "id": 0
}
```

### Change product by ID
> Method: **PUT** 
```
http://[HOST]/api/product/[ID]
```
### Response example
```json
[
 {
  "title": "test 2",
  "weight": "50",
  "isExist": false,
  "Date": 10,
  "customer": "changed",
  "id": 0
 }
]
```


