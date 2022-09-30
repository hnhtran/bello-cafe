const express = require('express');
const logger = require('morgan')

require('dotenv').config();
require('./config/database')

const app = express();
app.use('/api/users', require('./routes/api/users'));