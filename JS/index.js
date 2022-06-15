//Declaracion de variables
const banco = {
    totalAPagar: " ",
    montoDelCredito: " ",
    cantidadDeCoutas: " ",
    interesAnual: " ",
    intereses: " ",
    coutas: " ",
}
//Declaracion de Funciones
const tipodeintereses = (porcentaje) => {
    cantidadDeCoutas = +prompt('Ingrese la cantidad de coutas que desea financiar su prestamo: 12, 24, 36 o 48 coutas.');
    if (cantidadDeCoutas == 12) {
        interesAnual = porcentaje
    } else if (cantidadDeCoutas == 24) {
        interesAnual = porcentaje * 2
    } else if (cantidadDeCoutas == 36) {
        interesAnual = porcentaje * 3
    } else if (cantidadDeCoutas == 48) {
        interesAnual = porcentaje * 4
    } else {
        alert('ingrese la cantidad de coutas estipuladas por la entidad bancario')
        tipodeintereses(porcentaje)
    }
};
const creditoPersonaloPrendario = (porcentaje) => {
    banco.montoDelCredito = +prompt('Ingrese el monto a solicitar');
    console.log('monto del credito a solicitar ' + banco.montoDelCredito);
    tipodeintereses(porcentaje)
    console.log('detalle de cantidad de coutas ' + cantidadDeCoutas + ' y portecentaje total de intereses ' + interesAnual)
    if (((cantidadDeCoutas == 12) || (cantidadDeCoutas == 24)) || ((cantidadDeCoutas == 36) || (cantidadDeCoutas == 48))) {
        intereses = interesAnual * banco.montoDelCredito;
        console.log('monto de intereses ' + intereses)
        banco.totalAPagar = intereses + banco.montoDelCredito;
        console.log('total a pagar con intereses ' + banco.totalAPagar)
        coutas = banco.totalAPagar / cantidadDeCoutas;
        console.log('monto por coutas ' + coutas)
        alert('Su total a pagar es de ' + cantidadDeCoutas + ' coutas de $' + coutas);
    } else {
        alert("Ingrese la cantidad de coutas estimadas por la entidad");
        tipodeintereses(porcentaje);
        alert('Error')
    }
};

// Clase constructora
class Usuario {
    constructor(nombre, apellido, usuarioBanco, dni, ) {
        this.nombre = nombre
        this.apellido = apellido
        this.usuarioBanco = usuarioBanco
        this.dni = dni

    }
    bonificacion1(prestamoP) {
        return prestamoP - 0.20;
    }
    bonificacion2(prestamoP) {
        return prestamoP - 0.10;
    }
}
//En funcionamiento
usuarioBanco = prompt('Usted es cliente del banco: Si o No');
console.log('Usuario de banco: ' + usuarioBanco.toUpperCase());
if (usuarioBanco == 'si') {
    nombre = prompt('ingrese su nombre');
    apellido = prompt('ingrese su apellido');
    dni = +prompt('ingrese su dni');
    const cliente = new Usuario(nombre, apellido, usuarioBanco, dni, 0.65);
    alert('Bienvenido ' + cliente.nombre.toUpperCase() + ' ' + cliente.apellido.toUpperCase())
    alert('Por ser cliente le vamos a hacer una bonificacion en la tasa de interes del prestamo a solicitar')
    let tipoDeCredito = prompt('Que tipo de credito desea solicitar: prendario o personal.');
    console.log(tipoDeCredito)
    if (tipoDeCredito == 'personal') {
        let descuento = +cliente.bonificacion1(0.65);
        creditoPersonaloPrendario(descuento)
    } else if (tipoDeCredito == 'prendario') {
        const cliente = new Usuario(nombre, apellido, usuarioBanco, dni, 0.35)
        let descuento = +cliente.bonificacion2(0.35)
        creditoPersonaloPrendario(descuento)
    } else {
        alert('Error, por favor ingrese el tipo de credito que desea');
        for (i = 1; i <= 2; i++) {
            tipoDeCredito = prompt('Prendario o Personal')
            if (tipoDeCredito == 'personal') {
                const cliente = new Usuario(nombre, apellido, usuarioBanco, dni, 0.35)
                let descuento = +cliente.bonificacion2(0.35)
                creditoPersonaloPrendario(descuento);
                break;
            } else if (tipoDeCredito == 'prendario') {
                const cliente = new Usuario(nombre, apellido, usuarioBanco, dni, 0.35)
                let descuento = +cliente.bonificacion2(0.35)
                creditoPersonaloPrendario(descuento)
                break;
            } else {
                alert('Error')
            }
        }
    }
} else {
    alert('Simulacion de tu prestamo sin ser cliente del banco, para acceder a bonificaciones hacete nuestro cliente!!!')
    let tipoDeCredito = prompt('Que tipo de credito desea solicitar: prendario o personal.');
    console.log(tipoDeCredito)
    if (tipoDeCredito == 'personal') {
        creditoPersonaloPrendario(0.65);
    } else if (tipoDeCredito == 'prendario') {
        creditoPersonaloPrendario(0.35);
    } else {
        alert('Error, por favor ingrese el tipo de credito que desea');
        for (i = 1; i <= 2; i++) {
            tipoDeCredito = prompt('Prendario o Personal')
            if (tipoDeCredito == 'personal') {
                creditoPersonaloPrendario(0.65);
                break;
            } else if (tipoDeCredito == 'prendario') {
                creditoPersonaloPrendario(0.35)
                break;
            } else {
                alert('Error')
            }
        }
    };
}

// Array Construct
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