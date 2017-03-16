/**
 * Created by clstrfvck on 06/03/2017.
 */
const express = require('express');
const app = express();


//Attempting to implement a route
const user = require('./routes/user');
app.use('/api/user', user);




app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
