// Imports
const express = require("express");
const path = require("path");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Environment Viariables
dotenv.config();

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

// Views
app.use('/', express.static(__dirname + '/public'));
app.use('/views', express.static(path.join(__dirname, 'views')));

// Start
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(process.env.YODAWG);
  console.log(`Server started on http://${HOSTNAME}:${PORT}`);
});

// Stop
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed: Process Terminated!');
  });
});