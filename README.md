# Authentication Template

A clean and simple authentication template built with Node.js and Express.js, providing a solid foundation for user registration and authentication features.

## Features

- User registration with email and username
- Email validation
- Username and password validation
- MongoDB integration with Mongoose
- RESTful API structure
- ES6 modules support

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js 5.1** - Web framework
- **MongoDB** - Database
- **Mongoose 9.0** - MongoDB object modeling
- **dotenv** - Environment variable management

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher recommended)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/farnazdev/authentication-template.git
cd authentication-template
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
```

4. Update the `MONGODB_URL` in your `.env` file with your MongoDB connection string.

## Environment Variables

The following environment variables are required:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `PORT` | Server port number | No | 8000 |
| `MONGODB_URL` | MongoDB connection string | Yes | - |

## Usage

### Start the server:

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:8000` (or the port specified in your `.env` file).

## API Endpoints

### Register User

Register a new user account.

**Endpoint:** `POST /api/v1/users/register`

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Validation Rules:**
- `username`: 3-20 characters, unique, lowercase
- `email`: Valid email format, unique, lowercase
- `password`: 6-20 characters

**Success Response (201):**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "username": "johndoe"
  }
}
```

**Error Response (400):**
```json
{
  "message": "User already exists"
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:8000/api/v1/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

## Project Structure

```
authentication-template/
├── backend/
│   └── src/
│       ├── app.js              # Express app configuration
│       ├── index.js            # Server entry point
│       ├── config/
│       │   ├── constants.js    # Application constants
│       │   └── database.js     # MongoDB connection
│       ├── controllers/
│       │   └── user.controller.js  # User business logic
│       ├── models/
│       │   └── user.model.js   # User Mongoose schema
│       └── routes/
│           └── user.route.js   # User API routes
├── package.json
└── README.md
```

### Directory Explanation

- **`config/`** - Configuration files for database and constants
- **`controllers/`** - Request handlers and business logic
- **`models/`** - Mongoose schemas and models
- **`routes/`** - API route definitions

## Roadmap

Future features planned for this template:

- User login and authentication
- JWT token-based authentication
- Password hashing with bcrypt
- Message posting functionality
- User profile management
- Password reset functionality

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/farnazdev/authentication-template/issues).

## License

This project is licensed under the ISC License.

## Author

**farnazdev**

- GitHub: [@farnazdev](https://github.com/farnazdev)
