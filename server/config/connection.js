const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || '',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = {
    SECRET_KEY: '',
    connection: mongoose.connection,
};      


