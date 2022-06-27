let totalAPagar = " "
let montoDelCredito = " "
let cantidadDeCoutas = " "
let interesAnual = " "
let intereses = " "
let coutas = " "

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
        montoDelCredito = +document.getElementById('imonto').value;
        console.log('monto del credito a solicitar ' + montoDelCredito);
        if (montoDelCredito < '1000') {
            alert('ingrese un monto superior a los $1000')
        } else {
            cantidadDeCoutas = document.getElementById('cantidadDeCoutas');
            if (cantidadDeCoutas.value === '0') {
                alert('Seleccione una opción de la cantidad de coutas para continuar');
                return prestamosClientes();
            } else if (cantidadDeCoutas.value === '12') {
                intereses = array[0] * montoDelCredito;
                console.log('total de intereses: ' + intereses)
            } else if (cantidadDeCoutas.value === '24') {
                intereses = array[1] * montoDelCredito;
                console.log('total de intereses: ' + intereses)
            } else if (cantidadDeCoutas.value === '36') {
                intereses = array[2] * montoDelCredito;
                console.log('total de intereses: ' + intereses)
            } else if (cantidadDeCoutas.value === '48') {
                intereses = array[3] * montoDelCredito;
                console.log('total de intereses: ' + intereses)
            }
            totalAPagar = intereses + montoDelCredito;
            console.log('total a pagar con intereses ' + totalAPagar)
            coutas = totalAPagar / cantidadDeCoutas.value;
            console.log('monto por coutas ' + coutas)
            let total = document.getElementById('totalAPagar')
            total.innerHTML = `<h3>Monto a solicitar es de $ ${montoDelCredito} </h3> 
            <h3>Su total a pagar es de ${cantidadDeCoutas.value} coutas  de $ ${coutas}</h3>`
        }
    };
}

// EVENTOS
/*let botonSimulacion = document.getElementById('btn-simulacion')
 botonSimulacion.onclick = () =>{} */ // EVENT de la parte de los checked de si es usuario

/*let simularPrestamo = document.getElementById('simularPrestamo');
simularPrestamo.onclick = () =>{} */ // EVENT del si es usuario

/* let simularPrestamo1 = document.getElementById('simularPrestamo1');
simularPrestamo1.onclick = () => {} */ // EVENT del no es usuario

// EN FUNCIONAMIENTO
let botonSimulacion = document.getElementById('btn-simulacion')
botonSimulacion.onclick = (e) => {
    e.preventDefault()
    let usuarioBanco = ''
    let usuarioBanco1 = document.getElementById('usuarioDeBanco1');
    let usuarioBanco2 = document.getElementById('usuarioDeBanco2');
    if (usuarioBanco1.checked) {
        let formularioPadre = document.getElementById('formularioPadre')
        formularioPadre.innerHTML = `<div class="col-lg-4 datosCliente offset-4" id="datosCliente">
        <!-- DATOS NOMBRE/APELLIDO/DNI -->
        <label for="iname">Nombre</label>
        <input type="text" name="name" id="iname">
        <label for="ilastname">Apellido</label>
        <input type="text" name="lastname" id="ilastname">
        <label for="idni">DNI</label>
        <input type="number" name="numberdni" id="idni">
    </div>
    <div class="col-lg-4 offset-4 tipoDePrestamo">
        <!-- TIPO DE CREDITO A SOLICITAR -->
        <label for="tipoDePrestamo">¿Que tipo de prestamos deseas solicitar?</label>
        <select name="" id="tipoDePrestamo">
            <option value="0">Seleccione una opción</option>
            <option value="prendario">Prendario</option>
            <option value="personal">Personal</option>
        </select>
    </div>
    <div class="col-lg-4 offset-4 contenedorHijo2">
        <!-- MONTO DEL CREDITO A SOLICITAR -->
        <label for="imonto">Ingrese el monto que desea solicitar</label>
        <input type="number" name="monto" id="imonto" >
        <!-- LA CANTIDAD DE COUTAS A FINANCIAR EL CREDITO -->
        <label for="cantidadDeCoutas">Seleccione la cantidad de coutas</label>
        <select name="" id="cantidadDeCoutas">
            <option value="0">Seleccione una opción</option>
            <option value="12">12 Coutas</option>
            <option value="24">24 Coutas</option>
            <option value="36">36 Coutas</option>
            <option value="48">48 Coutas</option>
        </select>
    </div>
    <div class="botones">
        <input type="submit" value="Simular prestamo" id="simularPrestamo" class="boton">
        <!-- <button type="button" class="boton" id="btn-simulacion">Comenzar Simulación</button> -->
        <input type="reset" value="Reset" class="boton">
    </div>`
        let simularPrestamo = document.getElementById('simularPrestamo');
        simularPrestamo.onclick = (e) => {
            e.preventDefault();
            usuarioBanco = usuarioBanco1.value;
            console.log(`Usuario del banco: ${usuarioBanco.toUpperCase()}`)
            nombre = document.getElementById('iname').value;
            if (nombre.length < '3') {
                alert('Por favor ingrese un nombre')
            } else {
                apellido = document.getElementById('ilastname').value;
                if (apellido.length < '3') {
                    alert('Por favor ingrese un apellido')
                } else {
                    dni = document.getElementById('idni').value;
                    let tipoDeCredito = document.getElementById('tipoDePrestamo');
                    console.log(`Tipo de credito: ${tipoDeCredito.value}`);
                    if (tipoDeCredito.value == '0') {
                        alert('Seleccione que tipo de credito.')
                    } else if (tipoDeCredito.value == 'prendario') {
                        let creiditosclientes = prestamosClientes();
                        console.log(creiditosclientes(coutasPrestamoPrendarioconBeneficios))
                    } else if (tipoDeCredito.value == 'personal') {
                        let creiditosclientes = prestamosClientes();
                        console.log(creiditosclientes(coutasPrestamoPersonalconBeneficios))
                    }
                    let tituloDeResultados = document.getElementById('tituloDeResultados');
                    tituloDeResultados.innerHTML = '<h2 class="tituloDeResultados">Resultado de Simulacion</h2>';
                    let nuevoUsuario = document.getElementById('usuario')
                    nuevoUsuario.innerHTML = `  
                                            <h2>Bienvenido</h2>
                                            <h4>Nombre y Apellido: ${nombre.toUpperCase()}, ${apellido.toUpperCase()}.</h4>
                                            <p>DNI: ${dni}</p>`;
                    let mensajeBeneficio = document.getElementById('beneficio')
                    mensajeBeneficio.innerHTML = `<p>Por ser nuestro cliente le vamos hacer una bonificacion en la tasa de interes del prestamos a solicitar</p>`
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
                }
            }
        }
    } else if (usuarioBanco2.checked) {
        usuarioBanco = usuarioBanco2.value
        console.log(`Usuario del banco: ${usuarioBanco.toUpperCase()}`);
        let formularioPadre = document.getElementById('formularioPadre')
        formularioPadre.innerHTML = `<div class="col-lg-4 offset-4 tipoDePrestamo">
        <!-- TIPO DE CREDITO A SOLICITAR -->
        <label for="tipoDePrestamo">¿Que tipo de prestamos deseas solicitar?</label>
        <select name="" id="tipoDePrestamo">
            <option value="0">Seleccione una opción</option>
            <option value="prendario">Prendario</option>
            <option value="personal">Personal</option>
        </select>
    </div>
    <div class="col-lg-4 offset-4 contenedorHijo2">
        <!-- MONTO DEL CREDITO A SOLICITAR -->
        <label for="imonto">Ingrese el monto que desea solicitar</label>
        <input type="number" name="monto" id="imonto" >
        <!-- LA CANTIDAD DE COUTAS A FINANCIAR EL CREDITO -->
        <label for="cantidadDeCoutas">Seleccione la cantidad de coutas</label>
        <select name="" id="cantidadDeCoutas">
            <option value="0">Seleccione una opción</option>
            <option value="12">12 Coutas</option>
            <option value="24">24 Coutas</option>
            <option value="36">36 Coutas</option>
            <option value="48">48 Coutas</option>
        </select>
    </div>
    <div class="botones">
        <input type="submit" value="Simular prestamo" id="simularPrestamo1" class="boton">
        <!-- <button type="button" class="boton" id="btn-simulacion">Comenzar Simulación</button> -->
        <input type="reset" value="Reset" class="boton">
    </div> `
        let simularPrestamo1 = document.getElementById('simularPrestamo1');
        simularPrestamo1.onclick = (e) => {
            e.preventDefault();
            let tipoDeCredito = document.getElementById('tipoDePrestamo')
            console.log(`Tipo de credito: ${tipoDeCredito.value}`);
            if (tipoDeCredito.value === '0') {
                alert('Seleccione que tipo de credito.')
            } else if (tipoDeCredito.value === 'prendario') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPrendario))
            } else if (tipoDeCredito.value === 'personal') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPersonal))
            }
            let tituloDeResultados = document.getElementById('tituloDeResultados');
            tituloDeResultados.innerHTML = '<h2 class="tituloDeResultados">Resultado de Simulacion</h2>'
        }
    }
}