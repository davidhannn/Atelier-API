# Product-Overview-API
## Overview
- Create an API that takes requests from the server and sends back requested information

## Planning
-  Initialize and create a node express server
-  Connect PostgreSQL database with server
-  Create folders for models, routes, middleware, controllers
-  Main server file will use route for different apis (e.g app.use('/api/products', ProductRoute))
  - Routes folder contains the specific route endpoints that run a controller function when endpoint is requested
    - Model folder contains the schemas for the entities