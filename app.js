var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));
app.use("/libraries", express.static(__dirname + "/libraries"));
app.use("/media", express.static(__dirname + "/media"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/sources", function(req, res) {
    res.sendFile(__dirname + '/public/sources.html');
});

app.listen(process.env.PORT, function() {
  console.log('Example app listening on port ' + process.env.PORT);
});