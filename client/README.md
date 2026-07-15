# 🚌 Bus Buddy

A real-time bus tracking web application that allows passengers to view bus locations, estimated arrival times, and crowd levels.

## Features

- Live bus tracking
- ETA prediction
- Crowd levels
- User authentication
- Route information

## Tech Stack

### Frontend
- React
- Vite
- CSS/Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

## Folder Structure

```
Bus-Buddy/
├── client/
├── server/
├── database/
├── README.md
└── package.json
```

## Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000
DATABASE_URL=your_database_url
MAPBOX_TOKEN=your_mapbox_token
JWT_SECRET=your_secret
```

## Running the Project

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

Then open

```
http://localhost:5173
```

## Screenshots

Add screenshots here once the UI is ready.

## Future Improvements

- AI-based ETA prediction
- Bus occupancy prediction
- Driver dashboard
- Admin panel
- Notifications
- Mobile application

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## License

MIT License

## Author

Uday Prasad