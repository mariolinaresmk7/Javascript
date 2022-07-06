// FUNCIONES
// Funcion de orden superior, ingreso del monto del creditos y se calcula los interes a travez de arrays
function prestamosClientes() {
    return function (array) {
        montoDelCredito = +document.getElementById('imonto').value;
        console.log('monto del credito a solicitar ' + montoDelCredito);
        if (montoDelCredito < '1000') {
            swal({
                title: 'Simulador de credito',
                text: 'Por favor, ingrese un monto superior a 1000',
                icon: 'error',
            });
        } else {
            cantidadDeCoutas = document.getElementById('cantidadDeCoutas');
            if (cantidadDeCoutas.value === '0') {
                swal({
                    title: 'Simulador de credito',
                    text: 'Por favor, seleccione la cantidad de coutas',
                    icon: 'error',
                })
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

// Las funciones storageUsuario y formularioStorageAndNotUser corresponde al localStorage que se le hizo al usuario
function storageUsuario() {
    const activeName = localStorage.getItem('nombre');
    const activeLastName = localStorage.getItem('apellido');
    (activeName === null || activeLastName === null) ? console.log('No hay datos a recargar para el storage'): procesoStorage(); // operador ternario
}

function procesoStorage() {
    const activeName = localStorage.getItem('nombre');
    const activeLastName = localStorage.getItem('apellido');
    let storage = document.getElementById('storage');
    storage.innerHTML = `<h2>Retomemos donde dejaste</h2>
                              <h5> ${activeName} ${activeLastName}</h5> `;
    formularioStorageAndNotUser();
    resultado();
    let simularPrestamo3 = document.getElementById('simularPrestamo3');
    simularPrestamo3.onclick = (e) => {
        e.preventDefault();
        let tipoDeCredito = document.getElementById('tipoDePrestamo');
        console.log(`Tipo de credito: ${tipoDeCredito.value}`);
        if (tipoDeCredito.value == '0') {
            swal({
                title: 'Simulador de credito',
                text: 'Por favor, seleccione el tipo de credito a solicitar',
                icon: 'error',
            })
        } else if (tipoDeCredito.value == 'prendario') {
            let creiditosclientes = prestamosClientes();
            console.log(creiditosclientes(coutasPrestamoPrendarioconBeneficios))
        } else if (tipoDeCredito.value == 'personal') {
            let creiditosclientes = prestamosClientes();
            console.log(creiditosclientes(coutasPrestamoPersonalconBeneficios))
        }
        let tipoDePrestamo_ = document.getElementById('tipoDeCredito')
        tipoDePrestamo_.innerHTML = `<h2>Tipo de prestamo: ${tipoDeCredito.value}</h2>`
    }
    let reload = document.getElementById('reload');
    reload.onclick = () => {
        location.reload();
    }
}


function formularioStorageAndNotUser() { //Funcion para formulario de storage y no usuarios
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
    <input type="submit" value="Simular prestamo"  id="simularPrestamo3"  class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#myModal" >
    `
}

function formularioParaClientes() { //Funcion para crear formulario para clientes 
    let formularioPadre = document.getElementById('formularioPadre')
    formularioPadre.innerHTML = `
    <div class="col-lg-4 datosCliente offset-4" id="datosCliente">
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
        <input type="submit" value="Simular prestamo"  id="simularPrestamo"  class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#myModal" >
      `
}

function resultado() {
    let mensajeResultado = document.getElementById('mensajeResultado');
    mensajeResultado.innerHTML = `  
    <div class="modal fade" id="myModal" >
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title tituloDeResultados" id="tituloDeResultados">Resultado de la simulación</h2>
                </div>
                <div class="modal-body usuarioResultado" id="mensajeBonificacion" >
                    <p>Por ser nuestro cliente le vamos hacer una bonificacion en la tasa de interes del prestamos a solicitar</p>
                </div>
                <div class="modal-body usuarioResultado" id="mensaje"></div>
                <div class="modal-body usuarioResultado" id="usuario" ></div>
                <div class="modal-body usuarioResultado" id="tipoDeCredito" ></div>
                <div class="modal-body usuarioResultado" id="totalAPagar"></div>
                <div class="modal-footer">
                    <button class="btn btn-danger" data-bs-dismiss="modal" id="reload">Cerrar</button>
                </div>
            </div>
        </div>
    </div> 
</div> `
}