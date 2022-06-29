require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./routes/payments.route'));

(async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    app.listen(process.env.PORT, () =>
      console.log(`Сервер запушен на порте ${process.env.PORT}`)
    );
  } catch (err) {
    console.log(`Ошибка при запуске сервера: ${err.message}`);
  }
})();