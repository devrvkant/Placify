import express from 'express';

import config from './config/env.js';
import connectToMongoDB from './lib/mongoDB.js';

const app = express();
const PORT = config.port;

app.get('/', (req, res) => {
  res.send("Welcome to Placify Server!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
  // As soon as the server starts, connect to MongoDB
  connectToMongoDB();
});
