let nombre= prompt("Ingrese los nombres de los integrantes de tu familia y escriba ESC al terminar");
let ingresados="";
while(nombre!="ESC"){
    ingresados+=nombre +"\n";
    console.log(nombre);
    alert(ingresados);
    nombre= prompt("ingrese el siguiente integrante de tu familia y escriba ESC al terminar");
}
alert("Nombres ingresados:"+"\n"+ingresados)  








