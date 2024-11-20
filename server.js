const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const dashboardRoutes = require('./router/dashboardRouter');
const mongoDb = require('./config/mongodb')

//connect to db
mongoDb()

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');




app.use('/', dashboardRoutes);





app.listen(3001, () => {
    console.log('listening in port 3000');
})