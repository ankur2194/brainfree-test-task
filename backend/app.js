const express = require('express');
const cookieParser = require('cookie-parser');
var cors = require('cors')

const indexRouter = require('./routes/index');
const sequelize = require('./config/database');
const responder = require('./utils/responder')

const app = express();

app.use(cors());
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

app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        return res.json(responder.validationError(err.details));
    }
    return res.json(responder.error(err));
});

module.exports = app;
