# ecommerce
Here’s a clear, well-structured **README.md** you can keep in your repo for your E-commerce project. It explains the project, setup, and usage for others who visit your GitHub:

---

# E-Commerce Website

## Executive Summary

This project is a simple **E-Commerce Web Application** built with **React (Frontend)** and **Flask (Backend)**. It provides basic user authentication (Login & Registration) and integrates a frontend–backend workflow. The backend uses **Flask REST API with SQLite** for data storage, and the frontend is styled cleanly with **React components**.

The goal is to help small businesses showcase products and allow customers to register/login to access the platform.

---

## Features

* User Registration & Login (Authentication)
* Backend REST API using Flask (CRUD operations for users)
* SQLite Database connection
* React frontend integration with backend
* Session handling with login/logout functionality

---

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce.git
cd ecommerce
```

### 2. Setup Backend (Flask + SQLite)

```bash
cd backend
python -m venv venv
source venv/bin/activate   # For Mac/Linux
venv\Scripts\activate      # For Windows

pip install -r requirements.txt
python app.py
```

* This runs Flask on **[http://127.0.0.1:5000](http://127.0.0.1:5000)**

### 3. Setup Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

* This runs React on **[http://localhost:5173](http://localhost:5173)**

---

## Connecting Frontend & Backend

* The React app makes API calls to Flask endpoints (`/api/register`, `/api/login`) using **fetch/axios**.
* Ensure Flask (`http://127.0.0.1:5000`) is running before starting React.
* Use **CORS** in Flask to allow frontend requests.

---

## Usage

1. Open the React app (`http://localhost:5173`)
2. Register a new user
3. Login with registered credentials
4. After login → "Welcome to E-Commerce Website" page is displayed with a Logout option

---

## Tasks Completed (Week 1 & Week 2)

*  Setup React frontend with categories and product display
*  Flask backend with Blueprints & REST API
*  SQLite database integration
*  User Authentication system (Register/Login)
*  Frontend connected with backend

---

##  Challenges Faced

* Managing communication between Flask & React (CORS setup)
* SQLite setup and migrations
* Handling state management between Login & Logout in React

---

##  Key Learnings

* How to build a full-stack project using Flask + React
* REST API fundamentals (GET, POST, PUT, DELETE)
* Using SQLite for lightweight backend storage
* Handling user authentication securely
* Structuring frontend with reusable React components

