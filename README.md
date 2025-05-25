# OneAtta Admin Dashboard & Authentication API

OneAtta is a secure and scalable backend system built with **Node.js** and **Express**. It provides role-based authentication for **users** and **admins**, user preference handling, and an admin dashboard to manage registered users. The API is designed to be RESTful, modular, and easy to integrate into any frontend application.

---

## 🔧 Features

- ✅ User Registration & Login
- 🔐 Admin Registration & Login
- 🧠 Input Validation with Zod
- 🛡️ Password Hashing with bcrypt
- 🧾 JWT-based Authentication (access token in HTTP-only cookies)
- 🧑‍💼 Role-based Access Control (`admin`, `user`)
- 📊 Admin: Get all users
- ❤️ Health Check API
- 🌐 CORS & Security Middleware
- 📁 Clean and Modular Code Structure

---

## 📁 Folder Structure

OneAtta-backend/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── validations/
├── utils/
├── config/
├── .env
├── server.js
└── package.json

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/GwSachin/OneAtta-Backend.git
cd OneAtta Backend

### 2. Install dependencies
npm install

### 3. Configure environment variables
Create a .env file in the root directory and add:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
NODE_ENV=development

### 4. Run the server
    #  "start": "node server.js",
    # "server": "nodemon server.js"

    npm run server





## 🔐 API Endpoints

### 🔸 Health Check

```http
GET /health
```

---

### 👤 Auth Routes (`/auth`)

#### 🔹 Register a user

```http
POST /auth/register
```

**Request Body:**

```json
{
  "name": "Ritika",
  "email": "ritika@example.com",
  "password": "ritika123",
  "preferences": {
    "taste": "soft",
    "texture": "flaky",
    "usage": "4 rotis/day"
  }
}
```

#### 🔹 Login a user

```http
POST /auth/login
```

**Request Body:**

```json
{
  "email": "ritika@example.com",
  "password": "ritika123"
}
```

---

### 🛠️ Admin Routes (`/admin`)

#### 🔹 Register an admin

```http
POST /admin/register
```

**Request Body:**

```json
{
  "name": "Admin",
  "email": "admin@atta.com",
  "password": "admin123",
  "role":"admin"

}
```

#### 🔹 Login as admin

```http
POST /admin/login
```

**Request Body:**

```json
{
  "email": "admin@atta.com",
  "password": "admin123"
}
```

#### 🔹 Get all registered users

```http
GET /admin/users
```

**Headers:**

```
Authorization: Bearer <admin-token>
```

---

## 🧪 Postman Collection

You can find the full Postman collection in the `postman/` folder or [click here](#) to download.

---

## 👨‍💻 Tech Stack

* **Node.js** – Backend runtime environment
* **Express.js** – Web framework for building APIs
* **MongoDB & Mongoose** – NoSQL database with schema modeling
* **Zod** – Input validation for all routes
* **Bcrypt** – Secure password hashing
* **JSON Web Tokens (JWT)** – User authentication
* **Cookie-parser** – Parsing and managing HTTP-only cookies
