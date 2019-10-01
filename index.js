const express = require('express');
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
dotenv.config();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

//conectar a mongodb

mongoose.set("useFindAndModify", false);
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("Connected to db!");
    app.listen(3000, () => console.log("Server Up and running"));
});


//190.216.175.24
//mongodb+srv://PamelaLoyola:<password>@cluster0-wednn.mongodb.net/test?retryWrites=true&w=majority

app.set("view engine", "ejs");

app.get('/', function (req, res) {

    res.send("Hello");
});

app.get('/todo', function (req, res) {

    res.render('todo.ejs');

});

app.listen(3000, () => console.log("All ok"));