// DECLARACION DE VARIABLES DENTRO DE UN OBJETO
const banco = {
    totalAPagar: " ",
    montoDelCredito: " ",
    cantidadDeCoutas: " ",
    interesAnual: " ",
    intereses: " ",
    coutas: " ",
}
//DOM
/* ClassName */
let ofertas = document.getElementById('pre');
ofertas.className = 'ofertas'
let boxPrestamos = document.getElementById('prestamosP');
boxPrestamos.className = ('boxprestamos');
let boxPrestamos1 = document.getElementById('prestamosP1');
boxPrestamos1.className = ('boxprestamos');

/* innerHTML */
let descripcion = document.getElementById('prestamosP')
descripcion.innerHTML = '<h3>Prestamos Personales</h3> <p>¡Accedé a un préstamo personal con la mejor oferta para vos!</p>'
let descripcion1 = document.getElementById('prestamosP1')
descripcion1.innerHTML = ('<h3>Prestamos Prendario</h3> <p>Aprovechá las mejores condiciones de financiación para encontrar el vehículo que necesitás. </p>')
/* agregar un nodo */
let parrafo = document.createElement('h3')
parrafo.innerText = 'Si ya sos cliente, conocé la tasa que tenemos para vos.'
parrafo.classList.add('beneficios')
let formulario = document.getElementById('formulario')
formulario.append(parrafo)






// CLASS CONTRUCTORA
class Usuario {
    constructor(nombre, apellido, usuarioBanco, dni, ) {
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

// DECLARACION DE fUNCION DE ORDEN SUPERIOR
function prestamosClientes() {
    return function (array) {
        banco.montoDelCredito = +prompt('Ingrese el monto a solicitar');
        console.log('monto del credito a solicitar ' + banco.montoDelCredito);
        cantidadDeCoutas = +prompt('Ingrese la cantidad de coutas que desea financiar su prestamo: 12, 24, 36 o 48 coutas.');
        console.log('Cantidad de coutas ' + cantidadDeCoutas)
        switch (cantidadDeCoutas) {
            case 12:
                intereses = array[0] * banco.montoDelCredito;
                console.log('total de intereses: ' + intereses)
                break;
            case 24:
                intereses = array[1] * banco.montoDelCredito;
                console.log('total de intereses: ' + intereses)
                break;
            case 36:
                intereses = array[2] * banco.montoDelCredito;
                console.log('total de intereses: ' + intereses)
                break;
            case 48:
                intereses = array[3] * banco.montoDelCredito;
                console.log('total de intereses: ' + intereses)
                break;
            default:
                alert('Vuelva a comenzar y coloque la cantidad de coutas estipuladas por el banco')
                break;
        }
        banco.totalAPagar = intereses + banco.montoDelCredito;
        console.log('total a pagar con intereses ' + banco.totalAPagar)
        coutas = banco.totalAPagar / cantidadDeCoutas;
        console.log('monto por coutas ' + coutas)
        alert('Su total a pagar es de ' + cantidadDeCoutas + ' coutas de $' + coutas);
    };
}
const cargarUsuario = () => {
    let nombre=document.getElementById('validationCustom01m').value;
    /* nombre.innerText = prompt('ingrese su nombre'); */
    let apellido=document.getElementById('validationCustom02m').value;
    /*  apellido.innerText = prompt('ingrese su apellido'); */
    let dni= document.getElementById('validationCustom03m').value;
    /*  dni.innerText = +prompt('ingrese su dni'); */
    let nuevoUsuario = document.getElementById('usuario')
    nuevoUsuario.innerHTML = `<h4>Nombre y Apellido: ${nombre}, ${apellido}.</h4>
                               <p>DNI: ${dni}</p>`
}

// EN FUNCIONAMIENTO
usuarioBanco = prompt('Usted es cliente del banco: Si o No');
console.log('Usuario de banco: ' + usuarioBanco.toUpperCase());
if (usuarioBanco.toLowerCase() == 'si') {

    //nombre = document.getElementById('validationCustom01m').value
    /* nombre.innerText= document.getElementById('validationCustom01m').value  */
    //apellido = document.getElementById('validationCustom02m').value
    /*  apellido.innerText=  document.getElementById('validationCustom02m').value  */
    //dni = document.getElementById('validationCustom03m').value
     /* dni.innerText= document.getElementById('validationCustom03m').value */
        
    nombre=prompt('Nombre')
    apellido= prompt('apellido')
    dni=+prompt('DNI') 
    const cliente = new Usuario(nombre, apellido, usuarioBanco, dni);
     let nuevoUsuario = document.getElementById('usuario')
     nuevoUsuario.innerHTML = ` <h2>Bienvenido</h2>
                                <h4>Nombre y Apellido: ${nombre.toUpperCase()}, ${apellido.toUpperCase()}.</h4>
                               <p>DNI: ${dni}</p>`;
  


    /* alert('Bienvenido ' + cliente.nombre.toUpperCase() + ' ' + cliente.apellido.toUpperCase()); */
    alert('Por ser cliente le vamos a hacer una bonificacion en la tasa de interes del prestamo a solicitar')
    tipoDeCredito = prompt('Ingrese el tipo de prestamo que desea solicitar: prendario o personal')
    console.log(tipoDeCredito);
    if (tipoDeCredito == 'personal') { // if (tipoDeCredito == 'personal' || tipoDeCredito == '1')
        let creiditosclientes = prestamosClientes();
        console.log(creiditosclientes(coutasPrestamoPersonalconBeneficios))
    } else if (tipoDeCredito == 'prendario') {
        let creiditosclientes = prestamosClientes();
        console.log(creiditosclientes(coutasPrestamoPrendarioconBeneficios))
    }
    // ARRAY DE CLIENTE 
    const listaCliente = [];
    listaCliente.push(new Usuario(nombre, apellido, usuarioBanco, dni));
    console.log(listaCliente.length);
    console.log(listaCliente)
    for (const usuario of listaCliente) {
        console.log('Nombre: ' + usuario.nombre.toUpperCase());
        console.log('Apellido: ' + usuario.apellido.toUpperCase());
        console.log('Cliente del banco: ' + usuario.usuarioBanco.toUpperCase());
        console.log('Dni: ' + usuario.dni);
    }
} else if (usuarioBanco.toLowerCase() === 'no') {
    alert('Simula tu prestamo')
    let tipoDeCredito = prompt('Que tipo de credito desea solicitar: prendario o personal.');
    console.log(tipoDeCredito)
    if (tipoDeCredito == 'personal') {
        const creditosNoCliente = prestamosClientes()
        console.log(creditosNoCliente(coutasPrestamoPersonal))
    } else if (tipoDeCredito == 'prendario') {
        const creditosNoCliente = prestamosClientes()
        console.log(creditosNoCliente(coutasPrestamoPrendario))
    } else {
        alert('Error, por favor ingrese el tipo de credito que desea');
    };
} else {
    alert('Error, vuelva a comenzar y complete de forma correcta los datos')
}