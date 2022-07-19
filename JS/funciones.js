// FUNCIONES
// Funcion de orden superior, ingreso del monto del creditos y se calcula los interes a travez de arrays
function prestamosClientes() {
    return function (array) {
        montoDelCredito = +document.getElementById('imonto').value;
        console.log('monto del credito a solicitar ' + montoDelCredito);
        cantidadDeCoutas = document.getElementById('cantidadDeCoutas');
        if (cantidadDeCoutas.value === '12') {
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
        tipoDeCredito = document.getElementById('tipoDePrestamo').value

        const loader = setTimeout(() => {
            let loading = document.querySelector('.loader')
            loading.style.display = "block"
        }, 1000);
        const loader_C = setTimeout(() => {
            let loading = document.querySelector('.loader')
            loading.style.display = "none"
        }, 4000);
        setTimeout(() => {
            swal({
                title: "Simulador de Prestamo",
                text: `
                    Bienvenido
                    Tipo de credito: ${tipoDeCredito}
                    Monto a solicitar es de $ ${montoDelCredito}
                    Su total a pagar es de ${cantidadDeCoutas.value} coutas  de $ ${coutas}`,
                icon: "success"
            })
        }, 5000);


    }
};




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
                        <h5> ${activeName.toUpperCase()} ${activeLastName.toUpperCase()}</h5> `;
    formularioStorageAndNotUser();
    montoDelCredito = document.getElementById('imonto');
    montoDelCredito.onblur = () => {
        (montoDelCredito.value < 1000) && Toastify({
            text: "ingrese un monto superior a 1000",
            duration: 4000,
            gravity: "top",
            position: "center",
            style: {
                background: "#f85032;  /* fallback for old browsers",
                background: "-webkit-linear-gradient(to right, #e73827, #f85032)",
                background: "linear-gradient(to right, #e73827, #f85032)"
            }
        }).showToast()
    }

    tipoDeCredito = document.getElementById('tipoDePrestamo');
    tipoDeCredito.onchange = () => {
        if (tipoDeCredito.value === '0') {
            Toastify({
                text: "Por favor seleccione el tipo de prestamo",
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#f85032;  /* fallback for old browsers",
                    background: "-webkit-linear-gradient(to right, #e73827, #f85032)",
                    background: "linear-gradient(to right, #e73827, #f85032)"
                }
            }).showToast()
        } else {
            Toastify({
                text: "tipo de prestamo seleccionado: " + tipoDePrestamo.value.toUpperCase(),
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#f85032;  /* fallback for old browsers",
                    background: "-webkit-linear-gradient(to right, #e73827, #f85032)",
                    background: "linear-gradient(to right, #e73827, #f85032)"
                }
            }).showToast()
        }
    }

    cantidadDeCoutas = document.getElementById('cantidadDeCoutas');
    cantidadDeCoutas.onchange = () => {
        if (cantidadDeCoutas.value === "0") {
            Toastify({
                text: "Por favor seleccione la cantidad de coutas",
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#f85032;  /* fallback for old browsers",
                    background: "-webkit-linear-gradient(to right, #e73827, #f85032)",
                    background: "linear-gradient(to right, #e73827, #f85032)"
                }
            }).showToast()
        } else {
            Toastify({
                text: 'selecciono' + ' ' + cantidadDeCoutas.value + ' ' + 'coutas',
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#f85032;  /* fallback for old browsers",
                    background: "-webkit-linear-gradient(to right, #e73827, #f85032)",
                    background: "linear-gradient(to right, #e73827, #f85032)"
                }
            }).showToast()
        }
    }
    let simularPrestamo3 = document.getElementById('simularPrestamo3');
    simularPrestamo3.onclick = (e) => {
        e.preventDefault();
        let tipoDeCredito = document.getElementById('tipoDePrestamo');
        montoDelCredito = document.getElementById('imonto');
        cantidadDeCoutas = document.getElementById('cantidadDeCoutas');
        console.log(`Tipo de credito: ${tipoDeCredito.value}`);
        if (montoDelCredito.value < 1000 || cantidadDeCoutas.value === "0" || tipoDeCredito.value === '0') {
            swal({
                width: "800",
                text: "Por favor revise los datos ingresados",
                icon: "error"
            })
        } else if (tipoDeCredito.value == 'prendario') {
            let creiditosclientes = prestamosClientes();
            console.log(creiditosclientes(coutasPrestamoPrendarioconBeneficios))
        } else if (tipoDeCredito.value == 'personal') {
            let creiditosclientes = prestamosClientes();
            console.log(creiditosclientes(coutasPrestamoPersonalconBeneficios))
        }
    }
}




function formularioStorageAndNotUser() { //Funcion para formulario de storage y no usuarios
    let formularioPadre = document.getElementById('user')
    formularioPadre.innerHTML = `
 <div>
    <!-- TIPO DE CREDITO A SOLICITAR -->
    <select class="form-select mt-3 mb-3" aria-label="Default select example" id="tipoDePrestamo">
        <option value="0">Tipo de prestamo a solicitar</option>
        <option value="prendario">Prendario</option>
        <option value="personal">Personal</option>
    </select>
</div>
<div><!-- MONTO DEL CREDITO A SOLICITAR -->
    <input type="number" id="imonto" class="form-control" placeholder="Ingrese el monto"
                aria-label="Default">
</div>
<div><!-- LA CANTIDAD DE COUTAS A FINANCIAR EL CREDITO -->
    <select class="form-select mt-3" aria-label="Default select example" id="cantidadDeCoutas">
        <option value="0" >Seleccione la cantidad de coutas</option>
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
        <option value="48">48</option>
     </select> 
</div>
<input type="submit" value="Simular prestamo"  id="simularPrestamo3"  class="btn btn-secondary mt-3 " data-bs-toggle="modal" data-bs-target="#myModal" >
    `
}

function formularioParaClientes() { //Funcion para crear formulario para clientes 
    let formularioPadre = document.getElementById('user')
    formularioPadre.innerHTML = `
    <div id="datosCliente"><!-- DATOS NOMBRE/APELLIDO/DNI -->
        <input type="text" id="iname" placeholder="Nombre" class="form-control mt-3 mb-3" aria-label="Default"  >
        <input type="text" id="ilastname" placeholder="Apellido" class="form-control mb-3" aria-label="Default">
        <input type="number"  id="idni" placeholder="DNI" class="form-control" aria-label="Default">
    </div>
    <div>
        <!-- TIPO DE CREDITO A SOLICITAR -->
        <select class="form-select mt-3 mb-3" aria-label="Default select example" id="tipoDePrestamo">
            <option value="0">Tipo de prestamo a solicitar</option>
            <option value="prendario">Prendario</option>
            <option value="personal">Personal</option>
        </select>
    </div>
    <div><!-- MONTO DEL CREDITO A SOLICITAR -->
        <input type="number" id="imonto" class="form-control" placeholder="Ingrese el monto"
                    aria-label="Default">
    </div>
    <div><!-- LA CANTIDAD DE COUTAS A FINANCIAR EL CREDITO -->
        <select class="form-select mt-3" aria-label="Default select example" id="cantidadDeCoutas">
            <option value="0" >Seleccione la cantidad de coutas</option>
            <option value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
         </select> 
    </div>
    <input type="submit" value="Simular prestamo"  id="simularPrestamo"  class="btn btn-secondary mt-3" data-bs-toggle="modal" data-bs-target="#myModal" >
      `
}