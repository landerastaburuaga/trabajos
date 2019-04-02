var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('HELLO!');
});

app.get('/web', function (req, res) {
    res.sendFile(__dirname + '/pagina.html');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

tiempo = [
    {dia:"Miércoles", cielo:"lluvia", temperatura:12},
    {dia:"Jueves", cielo:"Nublado", temperatura:20},
    {dia:"Viernes", cielo:"lluvia", temperatura:23},
    {dia:"Sábado", cielo:"sol", temperatura:10},
    {dia:"Domingo", cielo:"sol", temperatura:5},
    {dia:"lunes", cielo:"Nublado", temperatura:0},
]

app.get('/tiempo', function (req, res) {

    tiempo = [
        {dia:"Miércoles", cielo:"lluvia", temperatura:12},
        {dia:"Jueves", cielo:"Nublado", temperatura:20},
        {dia:"Viernes", cielo:"lluvia", temperatura:23},
        {dia:"Sábado", cielo:"sol", temperatura:10},
        {dia:"Domingo", cielo:"sol", temperatura:5},
        {dia:"lunes", cielo:"Nublado", temperatura:0},
    ]

        var i;
        var r;
    console.log("Dias llueviosos:")
    for (i = 0; i < tiempo.length; i++){ 
        if(tiempo[i].cielo == "lluvia"){
        //console.log(tiempo[i].dia + " " + tiempo[i].cielo + " " + tiempo[i].temperatura)
        //console.log(tiempo[i].dia)
        //r = tiempo[i].dia
       r = tiempo[i].dia + " " + tiempo[i].cielo + " " + tiempo[i].temperatura
    }}
    res.send(r)
});   
