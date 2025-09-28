# 101533701_COMP3123-exec04

Express.js application for COMP3123 Exercise 04
**Student ID:** 101533701

## Description
This is an Express.js application that implements various HTTP endpoints including GET and POST requests with different parameter types.

## Features
- GET `/hello` - Returns "Hello Express JS"
- GET `/user` - Query parameters for firstname and lastname
- POST `/user/:firstname/:lastname` - Path parameters for firstname and lastname
- POST `/users` - Body parameters for array of users
- Static file serving for instruction.html

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will run on http://localhost:3000

## API Endpoints

### GET /hello
Returns "Hello Express JS" as plain text.

### GET /user
Query parameters: `firstname` and `lastname`
- Example: `GET /user?firstname=John&lastname=Doe`
- Returns: `{"firstname":"John","lastname":"Doe"}`
- Default: `{"firstname":"Pritesh","lastname":"Patel"}`

### POST /user/:firstname/:lastname
Path parameters: `firstname` and `lastname`
- Example: `POST /user/John/Doe`
- Returns: `{"firstname":"John","lastname":"Doe"}`

### POST /users
Body parameters: Array of users with firstname and lastname
- Example body: `[{"firstname":"John","lastname":"Doe"}]`
- Returns: Array of users
- Default: `[{"firstname":"Pritesh","lastname":"Patel"},{"firstname":"John","lastname":"Doe"},{"firstname":"John","lastname":"Rome"}]`

## Static Files
Access instruction.html at: http://localhost:3000/instruction.html

## Dependencies
- express: ^5.1.0
- nodemon: ^3.1.10 (dev dependency)