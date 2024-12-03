const express = require('express');
const dotenv = require('dotenv');

const router = require("./routes/urlRoute");
const connectDB = require("./config/db");
const logs = require("./middlewares/logs");

dotenv.config()
const app = express();
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(express.json())
app.use(logs("logs.txt"))

connectDB(process.env.DATABASE_URL);

app.listen(PORT, (err) => !err ? console.log(`Server running on port ${PORT}`) : console.log(err));

app.use("/api/url", router);