var express = require('express');

// Create our app
var app = express();

//variable for heroku port
//make a const so it cannot be updated

const PORT = procces.env.PORT || 3000;

// code for the app for https (free api version of weathermap)
// if its http or https, ok nice and cool my dude u may procced, next()
// else redirect with http

app.use(function (req,res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port' + PORT);
});
