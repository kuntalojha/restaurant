import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import 'dotenv/config';
import connectDB from './database/connectionDB.js';

const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect MongoDB
connectDB();

// CORS middleware with custom options
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Cache-Control',
      'Expires',
      'Pragma',
    ],
    credentials: true,
  })
);

// Routes
import menu from './routes/RouteMenu.js';
app.use('/menu', menu);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
