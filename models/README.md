# Population Management API

This is a simple API built to enable users manage a population system that contains a list of locations and the total number of residents in each location broken down by gender.



## Technologies used
+ NodeJs
+ ExpressJs
+ MongoDB



## API

### CREATE A LOCATION (/api/v1/location)

- location, male, female

#### Request
```

{
  "location": "lagos",
    "male": 20,
    female: 12,
}
```

#### Response

```
{
    "location": "lagos",
    "male": 10,
    "female": 12,
    "population": 32
}
```



### GET LOCATIONS (/api/v1/location)


#### Response
```
[
    {
        "_id": "5c92267f76e2d50aa9ba533c",
        "location": "Lagosas",
        "male": 34,
        "female": 45,
        "population": 79,
        "__v": 0
    },
    {
        "_id": "5c9226b376e2d50aa9ba533d",
        "location": "Lagos",
        "male": 20,
        "female": 12,
        "population": 32,
        "__v": 0
    }
]
```


### UPDATE A LOCATION (/api/v1/location)

- locationId: 5c9226b376e2d50aa9ba533d
- location, male, female

#### Request
```

{
  "location": "kebbi",
    "male": 40,
    female: 42,
}
```

#### Response

```
{
    "_id": "5c9226b376e2d50aa9ba533d",
    "location": "kebbi",
    "male": 40,
    "female": 42,
    "population": 82,
    "__v": 0
}
```


### DELETE A LOCATION (/api/v1/location)

- locationId: 5c9226b376e2d50aa9ba533d
- location, male, female



#### Response

```
{
    "message": "Location successfully deleted"
}
```

## Getting Started
1 Clone the repo. From the root of the project, run the following:
```
npm install
```
2 Start the development application, run:
```
npm run dev

3 Create `.env` file in the root of your project and insert your keys. See a sample in the `.env.sample` file

4 Install postman to test all endpoints


