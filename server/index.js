const mongoose = require('mongoose');
const express = require('express')
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config();

mongoose.connect(process.env.MONGO)
  .then(() => console.log('Connected!'))
  .catch(err => console.log(err));
  

const app = express()


app.use('/', routes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
