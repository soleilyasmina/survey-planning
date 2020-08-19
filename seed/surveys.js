const Survey = require('../models/survey');
const db = require('../db');
const categories = require('../models/survey-categories');

const seed = async () => {
  const surveyEntries = [...new Array(40)].map((item) => {
    const randomIndex = Math.floor(Math.random() * 5);
    return {
      food: categories.food[randomIndex],
    };
  });
  await Survey.insertMany(surveyEntries);
  console.log(`You have ${await Survey.estimatedDocumentCount()} surveys!`);
  db.close();
}

seed();
