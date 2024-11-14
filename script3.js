let monto = parseInt(prompt("Digita un valor de compra"));
if(monto>100){
    let dsct10 = ((monto * 0.10)-monto)*(-1);
    document.write("Tu descuento es del 10%, su valor total a pagar es de: $", dsct10, "<br>");
}else{
    document.write("No aplica a descuento, su monto a pagar es: $", monto , "<br>");
}
