📱 Task Management App (React Native)
📌 Objective

A React Native mobile application that allows users to:

Log in using JWT authentication

View a list of tasks

Update task status and remarks

Work offline and sync automatically when internet is restored

This app demonstrates offline-first behavior, clean app flow, and basic authentication.

🛠 Tech Stack
Frontend

React Native (Expo)

Axios

AsyncStorage

NetInfo

React Navigation

Context API

Backend (Mock API)

Node.js

Express.js

JWT Authentication

In-memory data (no database)

✨ Features

✅ JWT Login Authentication

✅ Persist login across app restarts

✅ Task List Screen

✅ Task Detail Screen (Update status & remarks)

✅ Loading and error handling

✅ Offline task caching

✅ Offline task update queue

✅ Auto sync when internet is restored

✅ Manual refresh button

✅ Shows last synced time

🔑 Test Credentials
Email: test@test.com  
Password: 123456

⚙️ Setup Instructions
1️⃣ Backend Setup
cd backend
npm install
node server.js


Backend will run at:

http://localhost:3000

2️⃣ Frontend Setup
cd taskApp
npm install
npx expo start


Run app using:

Expo Go (mobile)

Android Emulator

Web (press w)

🌐 API Endpoints
Method	Endpoint	Description
POST	/login	User login
GET	/tasks	Fetch all tasks
PUT	/tasks/:id	Update task details
📶 Offline Handling Logic

Tasks are cached locally using AsyncStorage.

When offline:

Task updates are saved in a local queue.

When internet is restored:

The app listens using NetInfo.

All queued updates are synced automatically with backend.

Last sync time is stored and displayed.

🧪 Offline Test Flow

Login and load tasks with internet ON

Turn OFF internet

Open any task and update status/remarks

Click Update

Data is saved locally

Turn internet ON

App auto-syncs and updates backend

📂 Project Structure
Task/
 ├── backend/
 │    ├── server.js
 │    └── package.json
 │
 ├── taskApp/
 │    ├── App.js
 │    ├── api.js
 │    ├── AuthContext.js
 │    ├── screens/
 │    │    ├── LoginScreen.js
 │    │    ├── TaskListScreen.js
 │    │    └── TaskDetailScreen.js
 │    └── package.json
 │
 └── README.md

📦 Deliverables

GitHub Repository ✔️

APK / Expo build link / Screen recording ✔️

README with setup and offline logic ✔️

📌 Notes

Backend uses mock in-memory data (no database).

Designed to focus on offline-first logic and app flow.

UI kept simple as per assignment requirement.

👨‍💻 Author

Your Name
Devana Siva Naga Ganesh Babi
