const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 4000);
app.use('/api/employees',
    require('./routes/employess.routes'));
module.exports = app;

