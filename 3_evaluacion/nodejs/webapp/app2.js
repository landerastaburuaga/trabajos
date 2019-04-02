var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('HELLO!');
});

app.get('/web', function (req, res) {
    res.sendFile('pagina.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
