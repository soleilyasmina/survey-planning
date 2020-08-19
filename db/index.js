const mongoose = require('mongoose');

const MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/survey_planning_development';

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Successfully connected to MongoDB!'))
  .catch((e) => console.error('MongoDB Connection error!'));

module.exports = mongoose.connection;
