const mongoose = require("mongoose");

mongoose.connect('mongodb://admin:admin1@ds117164.mlab.com:17164/notes-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));