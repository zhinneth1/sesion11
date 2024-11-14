let n = Math.floor(Math.random() * 10) + 1;
let adivina = prompt("Adivina un numero entre 1 y 10");
if(adivina==numero){
    document.write("Adivinaste, felicidades");
}else {
    document.write("No acertaste, pero sigue intentando", n);
}