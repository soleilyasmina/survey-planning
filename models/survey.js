const { model, Schema } = require('mongoose');
const categories = require('./survey-categories.json');

const Survey = new Schema(
  {
    food: {
      type: String,
      enum: categories.food,
      required: true,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = model('surveys', Survey);
