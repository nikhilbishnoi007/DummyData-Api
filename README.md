# Dummy Users API

A RESTful API built with **Express** and **TypeScript**, following **MVC architecture** (routes/controllers). Returns mock user data with flexible query-based filtering, sorting, and pagination-style limiting — built for practicing backend concepts like `req.query`, filtering logic, and clean API design.

🔗 **Live API:** [https://dummydata-api-nkg8.onrender.com/api/users](https://dummydata-api-nkg8.onrender.com/api/users)

> ⚠️ Hosted on Render's free tier — the server may take 30–50 seconds to wake up after inactivity.

## Tech Stack

- Node.js
- Express
- TypeScript
- tsx (dev/runtime)
- CORS

## Folder Structure

```
src/
├── controllers/
│   └── user.controller.ts
├── routes/
│   └── user.routes.ts
├── data/
│   └── users.ts
├── app.ts
└── server.ts
```

## Endpoints

### `GET /api/users`

Returns dummy user data. Supports the following query parameters — all filters can be combined together (AND condition):

| Query Param | Type | Description |
|---|---|---|
| `id` | number | Get a single user by ID |
| `name` | string | Filter by name (partial, case-insensitive match) |
| `city` | string | Filter by exact city (case-insensitive) |
| `cities` | string (comma-separated) | Match any of the given cities, e.g. `Jaipur,Delhi,Mumbai` |
| `age` | number | Filter by exact age |
| `minAge` | number | Minimum age (inclusive) |
| `maxAge` | number | Maximum age (inclusive) |
| `gender` | string | Filter by gender |
| `limit` | number | Limit number of results returned |

### Example Requests

```
/api/users
/api/users?id=5
/api/users?gender=male&age=22
/api/users?city=Jaipur
/api/users?cities=Jaipur,Delhi,Mumbai
/api/users?minAge=20&maxAge=25
/api/users?gender=male&age=22&limit=2
```

### Example Response

```json
{
  "total": 15,
  "count": 5,
  "data": [
    {
      "id": 5,
      "name": "Aditya Gupta",
      "email": "aditya.gupta@example.com",
      "age": 25,
      "gender": "Male",
      "city": "Kota"
    }
  ]
}
```

- `total` — total number of matches before `limit` is applied
- `count` — number of results actually returned
- `data` — the matched user records

## Run Locally

```bash
git clone <your-repo-url>
cd dummy-users-api
npm install
npm run dev
```

Server runs at `http://localhost:5000`

## Deployment

Deployed on **Render** as a free web service.

- **Build Command:** `npm install`
- **Start Command:** `npm start`

## Notes

- This is a static in-memory dataset (no database) — meant for practicing query params, filtering logic, and API design patterns.
- CORS is enabled, so this API can be freely fetched from any frontend project for practice.
