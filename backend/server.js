// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cors = require('cors');

const recipeRoutes = require('./routes/recipes');
const aboutRoutes = require('./routes/about');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.ORIGIN || 'http://localhost:3000',  // Ensure this matches your frontend URL
    credentials: true,  // Allow cookies and other credentials
  })
);

// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
  })
);

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api', authRoutes); // For /signup, /login, /logout

// Database connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false, // Uncomment if using mongoose < 6
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});