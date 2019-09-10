# WorkingHoursTrackerAPI

# Features
- Register user
- Login user
- Manage user projects (Add, Edit, Remove)
- Manage user worklogs (Add, Edit, Remove)
- See user worklogs per project

# Pre-requisites
- git
- Node
- MongoDB

# Instalation
Make sure that MongoDB is running on your machine at port 27017 
```
git clone https://github.com/astronautNata/WorkingHoursTrackerAPI.git
cd WorkingHoursTrackerAPI
npm install
node server
```

# Technologies and Libraries
- NodeJS - JavaScript backend/server-side solution of choice
- Express - Node framework that makes handling http requests with ease
- - JsonWebToken - package that helps with generating JWTs for secure authentication
- - bcrypt.js - package that enables generating hash from password
- - validator - package used for string validators 
- MongoDB - data storage solution that just speaks JSON and pairs very well with Node
- - Mongoose - package that helps with object modeling and manages connection between server and database

