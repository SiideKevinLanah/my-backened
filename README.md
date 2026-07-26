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
- Node.js installed 
- MongoDB account 
- NewsAPI key (get it for free at newsapi.org)

## Installation
1. Download your code (git clone https://github.com/SiideKevinLanah/my-backened)
2. Install all packages (npm install)
3. Set up the .env file and add these variables
   MONGO_URI=your_mongodb_url
   JWT_SECRET=your_secret_key
   NEWS_API_KEY=your_newsapi_key
4. Start the server (node index.js)

## API Endpoints

### Auth
| Method | URL | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | ❌ | Register a new user |
| POST | /api/auth/login | ❌ | Login and get token |

### Users
| Method | URL | Auth | Description |
|---|---|---|---|
| GET | /api/users/profile | ✔️ | Get logged in user profile |
| PUT | /api/users/:id | ✔️ | Update user |
| DELETE | /api/users/:id | ✔️ | Delete user |

### Favorites
| Method | URL | Auth | Description |
|---|---|---|---|
| POST | /api/favorites/team/:teamId | ✔️ | Add team to favorites |
| DELETE | /api/favorites/team/:teamId | ✔️ | Remove team from favorites |
| POST | /api/favorites/player/:playerId | ✔️ | Add player to favorites |
| DELETE | /api/favorites/player/:playerId | ✔️ | Remove player from favorites |
| POST | /api/favorites/league/:leagueId | ✔️ | Add league to favorites |
| DELETE | /api/favorites/league/:leagueId | ✔️ | Remove league from favorites |
| GET | /api/favorites | ✔️ | Get all favorites |

### Live Scores
| Method | URL | Auth | Description |
|---|---|---|---|
| GET | /api/matches/live | ❌ | Get live matches |

### Local League
| Method | URL | Auth | Description |
|---|---|---|---|
| POST | /api/league | ✔️ | Create a league |
| GET | /api/league/:id | ❌ | Get league details |
| POST | /api/league/:id/teams | ✔️ | Add team to league |
| GET | /api/league/:id/teams | ❌ | Get all teams in league |
| POST | /api/league/:id/matches | ✔️ | Schedule a match |
| PUT | /api/league/matches/:matchId/score | ✔️ | Enter match score |
| GET | /api/league/:id/standings | ❌ | Get standings table |

### News
| Method | URL | Auth | Description |
|---|---|---|---|
| GET | /api/news | ❌ | Get football news |
| GET | /api/news?team=chelsea | ❌ | Get news filtered by team |

## Project Structure 
```
|──  models/
|    |──User.js
|    |──League.js
|    |──Team.js
|    |──Match.js
|──  routes/
|    |──auth.js
|    |──favorites.js
|    |──leaugue.js
|    |──matches.js
|    |──news.js
|    |──team.js
|    |──users.js
|──   middleware/
|    |──project.js
|──.env
|──.gitignore
|──index.js
```
## Author
**Kevin** — BTech AI, 2nd Year  
Built during summer break 2026  
GitHub: https://github.com/SiideKevinLanah

