# One Sports API
A backend REST API for a sports app that provides live football scores, news , and local league management . Users can follow their favorite teams, players  , and leagues, and manage their own local football league with match scheduling and auto-calculated standings

## Features
- User authentication (register , login , JWT)
- Follow favorite team, players , and leagues
- Live scores(Football)
- Local League management (create leagues , add teams, schedule match , entr scores , auto-calculated standings)
- Football news feed
- JWT protected routes (only logged in users can )

## Tech Stack 
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- axios

## Getting Started

## Prerequisites
- Express
- MongoDb
- Node.js
- npm install
- .env

## Installation
1. Download your code (git clone)
2. Install all packages (npm install)
3. Set up the .env file and add these variables
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key
   NEWS_API_KEY=your_newsapi_key
4. Start the server (node index.js)

