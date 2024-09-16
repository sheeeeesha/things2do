const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  category: {
    type: String,
    required: true,
    enum: ['Outdoor', 'Indoor', 'Cultural', 'Social', 'Educational'], // Restrict to specific categories
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  tags: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 10'], // Limit number of tags
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  reviews: {
    type: [String],
    default: [],
  },
});

function arrayLimit(val) {
  return val.length <= 10;
}

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;
