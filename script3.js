let monto = parseInt(prompt("Digita un valor de compra"));
if(monto>100){
    let dsct10 = ((monto * 0.10)-monto);
    document.write("Tu descuento es del 10% ", dsct10, "<br>");
}else{
    document.write("No aplica a descuento ", monto "<br>");
}
