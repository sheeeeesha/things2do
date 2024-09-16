// controllers/activityController.js

const Activity = require('../models/Activity');

// Get all activities
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({});
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get activity by ID
const getActivityById = async (req, res) => {
  try {
    const activity = await Activity.findById(req.params.id);
    if (activity) {
      res.json(activity);
    } else {
      res.status(404).json({ message: 'Activity not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new activity
const createActivity = async (req, res) => {
  try {
    const { category, name, location, description, date, tags, rating, reviews } = req.body;

    // Create a new Activity instance
    const newActivity = new Activity({
      category,
      name,
      location,
      description,
      date,
      tags,
      rating,
      reviews
    });

    // Save the new activity to the database
    const savedActivity = await newActivity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getActivities, getActivityById, createActivity };
