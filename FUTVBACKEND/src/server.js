require('dotenv').config();

const express = require('express');
//Init
const cors = require('cors');
const app = express();

//DB
require('./database/config');

//confs
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images',express.static('images'));

//Routes
app.use('/publication',require('./routes/publication-routes'));


app.listen(process.env.PORT, (req,res) => {
    console.log(`Server on port ${process.env.PORT}`);
});