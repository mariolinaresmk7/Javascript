let nombre= prompt("Ingrese los nombres de los integrantes de tu familia y escriba ESC al terminar");
let ingresados="";
while(nombre!="ESC"){
    ingresados+=nombre +"\n";
    alert(ingresados)
    nombre= prompt("ingrese")
}
alert("nombres ingresados:"+"\n"+ingresados) 
