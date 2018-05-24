// console.log('What it do?');

var express = require("express");
 var app = express();

 app.get('/', function (req, res) {
    res.send('<strong>Hi there!</strong><a href="/bye">peace</a><hr><a href="/coder">Love</a><a href="/r/blah">Evil</a>');
 }
   );
 app.get('/bye', function (req, res) {
    res.send('<h2>Your mother eats grits!</h2><a href="/coder">Love</a><hr><a href="/">SOUUUULLLL</a><a href="/r/blah">Evil</a>');
 }
   );
 app.get('/coder', function (req, res) {
    res.send('<h1>I BESE IN THE APP!!</h1><a href="/bye">peace</a><hr><a href="/">SOUUUULLLL</a><a href="/r/blah">Evil</a>');
 }
   );
 app.get('/r/:subredditName', function (req, res) {
     var redditNow = req.params.subredditName;
   res.send('Welcome to the ' + redditNow + ' Subreddit!' );
  
 }
  );

 app.get('*', function (req, res) {
    res.send("You typed something strange in the URL.  Care to try again?");
 }
   );

app.listen(3000, () => console.log('App is listening on port 3000! FREE THE BLUE WHALES!!.'))



