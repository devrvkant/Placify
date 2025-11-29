import express from 'express';

import config from './config/env.js'

const app = express();
const PORT = config.port;

app.get('/', (req, res) => {
  res.send("Welcome to Placify Server!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
