# Restaurant_Finder_Full_Stack_Web_Application

Restaurant Finder – Full Stack Web Application
A full-stack restaurant discovery platform built using React + TypeScript (Frontend) and Node.js + Express + TypeScript + MongoDB (Backend).
This project allows users to browse restaurants, view details, submit feedback, and includes an Admin Dashboard to view all customer feedbacks.
________________________________________
Frontend
•	React
•	TypeScript
•	React Router
•	Fetch API
•	CSS-in-JS (Inline Styling)
Backend
•	Node.js
•	Express
•	TypeScript
•	MongoDB
•	Mongoose
•	REST APIs
________________________________________
 Features
User Features
✔ Home page with UI
✔ View list of restaurants
✔ Restaurant details page
✔ Submit feedback (stored in MongoDB)
Admin Features
✔ Admin login page
✔ Admin dashboard
✔ View all customer feedbacks
✔ Logout support

Backend Features
✔ Restaurants API (GET /restaurants, GET /restaurants/:id)
✔ Feedback API (POST /feedbacks, GET /feedbacks)
✔ MongoDB connected using Mongoose
✔ Seed script to populate restaurant data
________________________________________
📦 Project Folder Structure
project/
│
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── config/
│   │   ├── seed/
│   │   ├── app.ts
│   │   ├── server.ts
│   └── package.json
│
└── restaurant-app/ (frontend)
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   ├── App.tsx
    └── package.json





How to Run the Project Locally
Clone the Project
git clone <your-project-link>
cd project
________________________________________
Backend Setup (Node + Express + MongoDB + TS)
Go inside backend folder
cd backend
Install dependencies
npm install
 Create a .env file
MONGO_URI=mongodb://127.0.0.1:27017/restaurantdb
PORT=5000
Start MongoDB locally
(Windows)
net start MongoDB
Seed restaurant data
npm run seed
Start backend server
npm run dev
Server runs on
 http://localhost:5000
________________________________________
Frontend Setup (React + TypeScript)
Open a new terminal and go to frontend folder
cd restaurant-app
Install frontend dependencies
npm install
Run frontend
npm start
Frontend runs on
http://localhost:3000
________________________________________
API Endpoints
Restaurants
Method	Endpoint	Description
GET	/restaurants	Get all restaurants
GET	/restaurants/:id	Get restaurant by ID
Feedback
Method	Endpoint	Description
POST	/feedbacks	Submit customer feedback
GET	/feedbacks	Get all feedback (admin)

Author
Mohsin
Full-Stack Developer Intern Applicant
(React + TypeScript + Node.js + MongoDB)

