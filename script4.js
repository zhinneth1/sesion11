let n =  Math.floor(math.random() * 10) + 1;
let adivina = prompt("Adivina un número entre 1 y 10");
if(adivina == n){
    document.write("Adivinastes, Felicidades");
}else{
    document.write("No acertaste, vuelve a intentarlo la proxima. El numero es:  ", n);
}