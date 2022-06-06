//Declaracion de variables
let tipoDeCredito = prompt('Que tipo de credito desea solicitar: prendario o personal.');
console.log(tipoDeCredito)
let montoDelCredito;
let cantidadDeCoutas;
let totalAPagar;
let interesAnual;
let intereses;
let coutas;
//Declaracion de funciones
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
    }
};

const creditoPersonaloPrendario = (porcentaje) => {
    montoDelCredito = +prompt('Ingrese el monto a solicitar');
    console.log('monto del credito a solicitar ' + montoDelCredito);
    tipodeintereses(porcentaje)
    console.log('detalle de cantidad de coutas ' + cantidadDeCoutas + ' y portecentaje total de intereses ' + interesAnual)
    if (((cantidadDeCoutas == 12) || (cantidadDeCoutas == 24)) || ((cantidadDeCoutas == 36) || (cantidadDeCoutas == 48))) {
        intereses = interesAnual * montoDelCredito;
        console.log('monto de intereses ' + intereses)
        totalAPagar = intereses + montoDelCredito;
        console.log('total a pagar con intereses ' + totalAPagar)
        coutas = totalAPagar / cantidadDeCoutas;
        console.log('monto por coutas ' + coutas)
        alert('Su total a pagar es de ' + cantidadDeCoutas + ' coutas de $' + coutas);
    } else {
        alert("Ingrese la cantidad de coutas estimadas por la entidad");
        tipodeintereses(porcentaje);
        alert('Error')
    }
};

//En funcionamiento
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
        } else if (tipoDeCredito == 'prendario') {
            creditoPersonaloPrendario(0.35)
        } else {
            alert('Error')
        }
    }
};