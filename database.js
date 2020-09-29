const mongoose = require('mongoose');

const collection = process.env.DB_COLLECTION || 'express';
const username = process.env.DB_USERNAME || 'root';
const password = process.env.DB_PASSWORD || '';
const port = process.env.DB_PORT || 27017;
const host = process.env.DB_HOST || 'localhost';

mongoose.connect(`mongodb://${host}/${collection}`, {
    user: username,
    pass: password,
    auth: {
        authSource: 'admin'
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
