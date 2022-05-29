const mongoose = require('mongoose');
const express = require('express');
const personsRoutes=require('./routes/persons');

mongoose.Promise = global.Promise;
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended:false} ));
app.use(personsRoutes);
app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(
    'mongodb+srv://america:Ramon123456@cluster0.rlkv9.mongodb.net/?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("connected succesfully");
});

app.listen(3000);