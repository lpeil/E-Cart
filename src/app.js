const express = require('express');
const { connect } = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
require('dotenv').config();

//import user Routes
const authRoutes = require('./auth/Routes');
const userRoutes = require('./user/Routes');
const categoryRoutes = require('./category/Routes');
const productRoutes = require('./product/Routes');

//app
const app = express();

//db
connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => console.log('DB Connected'));

//middlware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.get('/', (req, res) => {
    res.json({ 
        ok: true
    });
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});