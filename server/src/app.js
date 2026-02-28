const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.set('port', process.env.PORT || 3000);
app.use('/api/employees',
    require('./routes/employess.routes'));
module.exports = app;

