# Backend - Team Task Tracker API

##Overview

This is the backend service for the Team Task Tracker application.
It is built with **Node.js (Express)** and uses **PostgreSQL** as the database.

---

## Prerequisites

Make sure you have the following installed:

* Node.js (v16+ recommended)
* PostgreSQL (running locally)

---

##Database Setup

1. Create a new PostgreSQL database:

```sql
CREATE DATABASE team_tasks;
```

2. Connect to the database and run the following SQL:

```sql
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(20) DEFAULT 'todo',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Environment Variables

Create a `.env` file in the root of the backend folder and add:

```env
DB_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/team_tasks
PORT=5000
```

> Replace `YOUR_PASSWORD` with your PostgreSQL password.

---

## Installation

Install dependencies:

```bash
npm install
```

---

##  Running the Server

Start the backend server:

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## Running Tests

Run backend tests using:

```bash
npm test
```

---

## API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| GET    | /tasks     | Get all tasks      |
| POST   | /tasks     | Create a new task  |
| PUT    | /tasks/:id | Update task status |
| DELETE | /tasks/:id | Delete a task      |


---

## Notes

* No authentication is implemented (as per requirements)
* Basic error handling is included
* Built with simplicity and functionality in mind
