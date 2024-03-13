const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
// connect database
connectDB();

app.use(express.json({ extended: false }))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));