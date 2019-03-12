/*
ejemplo 01
*/

x = 5
y = 5

z = x + y
//z = Math.floor((Math.random() * 101));


//si la suma >  "es mayor que 10"
//si la suma <  "es menor que 10"
//si es = 10 "es igual a 10"
//pistia se utiliza if/else
//console.log (z)
z = 0
while (z != 10) {
    z = Math.floor((Math.random() * 500001)); 
    console.log("el valor de z es:" + z)
if (z > 10) {console.log("es mayor que 10")}
else if (z < 10) {console.log("es menor que 10")}
else if (z == 10) {console.log("es igual que 10")}}