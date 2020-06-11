const express = require('express');
const cors = require('cors')
const controllers = require('./controllers')
const cookieParser = require('cookie-parser')

require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: ['https://naughty-mccarthy-2fac9d.netlify.app', 'http://localhost:3000']}));
app.use(cookieParser())
app.use(controllers)

app.set('port', process.env.PORT || 4000)
module.exports = app;
