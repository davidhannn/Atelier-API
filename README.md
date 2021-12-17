![javascript](https://img.shields.io/badge/JavaScript-20232A?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)
![Enzyme](https://img.shields.io/badge/-Enzyme-20232A?style=for-the-badge&logo=testingLibrary&logoColor=red)
![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![Webpack](https://img.shields.io/badge/-webpack-20232A?style=for-the-badge&logo=webpack&logoColor=blueviolet)
![Babel](https://img.shields.io/badge/-Babel-20232A?style=for-the-badge&logo=babel&logoColor=yellow)

# Product-Overview-API
## Overview
- Create an API that serves product information to a retail portal. The API will serve up to 5 million rows of data in regards to product information, details, styles, photos and skus

## Planning
-  Initialize and create a node express server
-  Connect PostgreSQL database with server
-  Create folders for models, routes, middleware, controllers
-  Main server file will use route for different apis (e.g app.use('/api/products', ProductRoute))
  - Routes folder contains the specific route endpoints that run a controller function when endpoint is requested
    - Model folder contains the schemas for the entities

## Connecting API with Server
- change the api call in the server to call our API endpoint

## Installation 

```html
  Run all commands in root directory

  // install modules
  npm install

  // Start Server
  npm run start
  
  // Start Development Server
  npm run dev
```

## Testing
```html
  // Change into testing directory
  cd client/src/spec 

  // Run Jest Test Code
  npm run test

  // Start Instance with New Relic
  npm run newRelic

  // Start Stress Testing with K6
  npm run k6
```
