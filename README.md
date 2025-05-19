# Node.js/Express Server Template

A basic Node.js/Express server template with essential middleware and security configurations.

## Features

- Express.js server setup
- Security middleware (helmet)
- CORS support
- Request logging (morgan)
- Environment variable support
- Error handling middleware
- Development hot-reload (nodemon)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Running the Server

Development mode (with hot-reload):
```bash
npm run dev
```
or
```bash
yarn dev
```

Production mode:
```bash
npm start
```
or
```bash
yarn start
```

The server will start on port 3000 by default (or the port specified in your .env file).

## API Endpoints

- `GET /`: Welcome message

## Project Structure

```
.
├── server.js          # Main application file
├── package.json       # Project dependencies and scripts
├── .env.example      # Example environment variables
├── .gitignore        # Git ignore file
└── README.md         # Project documentation
```

## Security

This template includes several security features:
- Helmet.js for setting security headers
- CORS configuration
- Environment variable management
- Basic error handling

## License

ISC 