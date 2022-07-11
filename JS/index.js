// EN FUNCIONAMIENTO
let user = document.getElementById('radio');
user.onchange = (e) => {
    e.preventDefault();
    let usuarioBanco = ''
    if (usuarioBanco1.checked) {
        usuarioBanco = usuarioBanco1.value;
        formularioParaClientes();
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
        tipoDeCredito.onblur = () => {
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
        cantidadDeCoutas.onblur = () => {
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
        let simularPrestamo = document.getElementById('simularPrestamo');
        simularPrestamo.onclick = (e) => {
            e.preventDefault();
            usuarioBanco = usuarioBanco1.value;
            console.log(`Usuario del banco: ${usuarioBanco.toUpperCase()}`)
            nombre = document.getElementById('iname').value;
            console.log(typeof nombre)
            apellido = document.getElementById('ilastname').value;
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('apellido', apellido)
            dni = document.getElementById('idni').value;
            tipoDeCredito = document.getElementById('tipoDePrestamo');
            console.log(`Tipo de credito: ${tipoDeCredito.value}`);
            if (nombre.length < '3' || apellido.length < '3' || montoDelCredito.value < 1000 || cantidadDeCoutas.value === "0" || tipoDeCredito.value === '0') {
                swal({
                    text: "Por favor revise los datos ingresados",
                    icon: "error"
                })
            } else if (tipoDeCredito.value === 'prendario') {
                let creiditosclientes = prestamosClientes();
                console.log(creiditosclientes(coutasPrestamoPrendarioconBeneficios))
            } else if (tipoDeCredito.value === 'personal') {
                let creiditosclientes = prestamosClientes();
                console.log(creiditosclientes(coutasPrestamoPersonalconBeneficios))
            }
            const listaCliente = [];
            listaCliente.push(new Usuario(nombre, apellido, usuarioBanco, dni));
            console.log(listaCliente.length);
            console.log(...listaCliente)
            for (const usuario of listaCliente) {
                console.log('Nombre: ' + usuario.nombre.toUpperCase());
                console.log('Apellido: ' + usuario.apellido.toUpperCase());
                console.log('Cliente del banco: ' + usuario.usuarioBanco.toUpperCase());
                console.log('Dni: ' + usuario.dni);
            }
            const en_json = JSON.stringify(listaCliente);
            localStorage.setItem('listaCliente', en_json);
            const usuario1 = JSON.parse(en_json)
            const usuario3 = JSON.parse(localStorage.getItem('listaCliente'));
        }
        storageUsuario();
    } else if (usuarioBanco2.checked) {
        usuarioBanco = usuarioBanco2.value
        console.log(`Usuario del banco: ${usuarioBanco.toUpperCase()}`);
        formularioStorageAndNotUser();
        let simularPrestamo3 = document.getElementById('simularPrestamo3');
        simularPrestamo3.onclick = (e) => {
            e.preventDefault();
            let tipoDeCredito = document.getElementById('tipoDePrestamo')
            console.log(`Tipo de credito: ${tipoDeCredito.value}`);
            montoDelCredito = document.getElementById("imonto")
            if (montoDelCredito.value < 1000 || cantidadDeCoutas.value === "0" || tipoDeCredito.value === '0') {
                swal({
                    text: 'Por favor, verifique los datos ingresados',
                    icon: 'error',
                })
            } else if (tipoDeCredito.value === 'prendario') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPrendario))
            } else if (tipoDeCredito.value === 'personal') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPersonal))
            }
        }
    }
}