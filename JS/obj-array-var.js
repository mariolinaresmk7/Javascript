// Variables de tipo global
let totalAPagar = " "
let montoDelCredito = " "
let cantidadDeCoutas = " "
let interesAnual = " "
let intereses = " "
let coutas = " "

// CLASS CONTRUCTORA
class Usuario {
    constructor(nombre, apellido, usuarioBanco, dni) {
        this.nombre = nombre
        this.apellido = apellido
        this.usuarioBanco = usuarioBanco
        this.dni = dni
    }
}

//ARRAY DE COUTAS 
const coutasPrestamoPrendario = [0.35, 0.70, 1.05, 1.4];
const coutasPrestamoPersonal = [0.65, 1.3, 1.95, 2.6];
console.log(coutasPrestamoPrendario);
console.log(coutasPrestamoPersonal);

// METODOS DE BUSQUEDA Y TRANSFORMACION
const coutasPrestamoPersonalconBeneficios = coutasPrestamoPersonal.map(elem => elem - 0.20)
const coutasPrestamoPrendarioconBeneficios = coutasPrestamoPrendario.map(elem => elem - 0.10)
console.log(coutasPrestamoPrendarioconBeneficios)
console.log(coutasPrestamoPersonalconBeneficios)


let botonSimulacion = document.getElementById('btn-simulacion') // boton para dar inicio al evento onclick
let usuarioBanco1 = document.getElementById('usuarioDeBanco1'); // Usuario: si input=type"radio"
let usuarioBanco2 = document.getElementById('usuarioDeBanco2'); // Usuario: no input=type"radio"

// EVENTOS
/*let botonSimulacion = document.getElementById('btn-simulacion')
 botonSimulacion.onclick = () =>{} */ // EVENT de la parte de los checked de si es usuario

/*let simularPrestamo = document.getElementById('simularPrestamo');
simularPrestamo.onclick = () =>{} */ // EVENT del si es usuario

/* let simularPrestamo1 = document.getElementById('simularPrestamo1');
simularPrestamo1.onclick = () => {} */ // EVENT del no es usuario