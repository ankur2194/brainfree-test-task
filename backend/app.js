const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

sequelize.authenticate()
    .then(() => {
        console.log('Database Connected...!');
        sequelize.sync({ force: false });
    })
    .catch(err => console.log('Error on Database Connection:', err))

app.use('/', indexRouter);

module.exports = app;
