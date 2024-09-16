// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(express.json()); // For parsing JSON
app.use(cors()); // Enable CORS

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/things2do  `';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import and use routes
const activityRoutes = require('./routes/activityRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/activities', activityRoutes);
app.use('/api/users', userRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the Weekend Planner API!');
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
