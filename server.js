const express = require('express');
const app = express();


//Implementing a route - first saving the correct route module to a const:
const user = require('./routes/user');
//and then pulling it in - in case of /api/user, we're going to return the module stored above.
app.use('/api/user', user);

app.get('/api', function(req,res){
   res.json('Looks like the routing works - hi, this is Node. Now try the /user endpoint!')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
