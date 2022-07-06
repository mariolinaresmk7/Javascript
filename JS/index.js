// EN FUNCIONAMIENTO
botonSimulacion.onclick = (e) => {
    e.preventDefault();
    let usuarioBanco = ''
    if (usuarioBanco1.checked) {
        usuarioBanco = usuarioBanco1.value;
        formularioParaClientes();
        resultado();
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
            if (nombre.length < '3' || apellido.length < '3') {
                let mensajeBonificacion1 = document.getElementById('mensajeBonificacion');
                mensajeBonificacion1.remove();
                let mensajeNombreyApellido = document.getElementById('mensaje');
                mensajeNombreyApellido.innerHTML = `<h2>Por favor ingrese de forma correcta su nombre y apellido</h2>`;
                simularPrestamo.onclick();
                let tipoDePrestamo_ = document.getElementById('tipoDeCredito');
                tipoDePrestamo_.remove();
                nuevoUsuario.remove();
            } else {
                let tipoDeCredito = document.getElementById('tipoDePrestamo');
                console.log(`Tipo de credito: ${tipoDeCredito.value}`);
                let tipoDePrestamo_ = document.getElementById('tipoDeCredito')
                tipoDePrestamo_.innerHTML = `<h2>Tipo de prestamo: ${tipoDeCredito.value}</h2>`
                let nuevoUsuario = document.getElementById('usuario')
                nuevoUsuario.innerHTML = `  <h2>Bienvenido</h2>
                                            <h4>Nombre y Apellido: ${nombre.toUpperCase()}, ${apellido.toUpperCase()}.</h4>
                                            <p>DNI: ${dni}</p>`
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
        }
        storageUsuario();
        let reload = document.getElementById('reload');
        reload.onclick = () => {
            location.reload();
        }
    } else if (usuarioBanco2.checked) {
        usuarioBanco = usuarioBanco2.value
        console.log(`Usuario del banco: ${usuarioBanco.toUpperCase()}`);
        formularioStorageAndNotUser();
        let simularPrestamo3 = document.getElementById('simularPrestamo3');
        simularPrestamo3.onclick = (e) => {
            e.preventDefault();
            let mensajeBonificacion1 = document.getElementById('mensajeBonificacion');
            mensajeBonificacion1.remove();
            let tipoDeCredito = document.getElementById('tipoDePrestamo')
            console.log(`Tipo de credito: ${tipoDeCredito.value}`);
            let tipoDePrestamo_ = document.getElementById('tipoDeCredito')
            tipoDePrestamo_.innerHTML = `<h2>Tipo de prestamo: ${tipoDeCredito.value}</h2>`
            if (tipoDeCredito.value === '0') {
                swal({
                    title: 'Simulador de credito',
                    text: 'Por favor, seleccione el tipo de credito a solicitar',
                    icon: 'error',
                })
            } else if (tipoDeCredito.value == 'prendario') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPrendario))
            } else if (tipoDeCredito.value == 'personal') {
                const creditosNoCliente = prestamosClientes()
                console.log(creditosNoCliente(coutasPrestamoPersonal))
            }
        }
        resultado();
        let reload = document.getElementById('reload');
        reload.onclick = () => {
            location.reload();
        }
    }

}