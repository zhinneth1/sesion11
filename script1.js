let cal=parseInt(prompt("Digita tu calificación"));
if(cal>=90){
    console.log("Excelente,sigue asi superaste las expectativas");
    document.write("Excelente,sigue asi superaste las expectativas", "<br>");
}else if(cal>=70 && cal<=89){
    console.log("Aprobaste,esfuerzate más");
    document.write("Aprobaste,esfuerzate más", "<br>");
}
else{
    console.log("reprobo, debes repetir")
    document.write("reprobo, debes repetir", "<br>")
}
    