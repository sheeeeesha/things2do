// routes/activityRoutes.js

const express = require('express');
const router = express.Router();
const {
  getActivities,
  getActivityById,
  createActivity
} = require('../controllers/activityController');

// Route to get all activities
router.get('/', getActivities);

// Route to get a specific activity by ID
router.get('/:id', getActivityById);

// Route to create a new activity
router.post('/', createActivity);

module.exports = router;
