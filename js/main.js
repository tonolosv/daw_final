function validar() {
    var valor = 1234;
    valor = document.getElementById("pass").value;
    if (valor !== valor) {
        return false;
    } else if (valor == null || valor.length == 0) {
        swal("El campo no puede estar vacio", "", "warning");
        return false;
    } else if (valor.length !== 4) {
        swal("PIN incompleto", "", "warning");
        return false;
    }
}


function depositar() {
    swal({
        title: 'Ingresar valor a depositar',
        input: 'text',
        type: 'input'
    }).then((result) => {
        if (result.value % 5 != 0) swal('valores en 0 y 5 \n', 'Intente de nuevo', 'warning');
        else swal('Deposito efectuado', "", "success");
    })
}

function retirar() {
    swal({
        title: 'Ingresar valor a retirar',
        input: 'text',
        type: 'input'
    }).then((result) => {
        if (result.value % 5 != 0) swal('No se puede entregar esa cantidad', 'Intente de nuevo', 'warning');
        else swal('Retire efectivo', "", "success");
    })
}

function consulta() {
    swal('Saldo disponible\n $500')
}

function list() {
    swal({
        title: 'Servicio a pagar',
        input: 'select',
        inputOptions: {
            '1': 'Agua',
            '2': 'Energía Electrica',
            '3': 'Telefonía',
            '4': 'Otros servicios'
        },
        inputPlaceholder: 'escoger servicio',
        showCancelButton: true,
        inputValidator: function(value) {
            return new Promise(function(resolve, reject) {
                if (value === '1') {
                    resolve()
                } else {
                    reject('escoger un servicio:)')
                }
            })
        }
    }).then(function(result) {
        swal({
            type: 'success',
            p: 'Servicio a pagar: ' + result
        })
    })
}

let cajero = {
    balance: 500,
    retirar: function() {
        let monto = parseInt(document.getElementById('retiro_id').value);
        if (monto <= this.balance) {
            this.balance -= monto;
            this.paintBalance();
            document.getElementById('retiro_id').value = '';
        } else alert(
            'No tienes fondos suficientes');
    },
    ingresar: function() {
        this.balance += parseInt(document.getElementById('ingresar_id').value);
        this.paintBalance();
        alert('Saldo agregado correctamente');
        document.getElementById('ingresar_id').value = '';
    },
    paintBalance: function() {
        let b = this.balance.toFixed(2);
        document.getElementById('balance_id').innerHTML = '$' + b;
    },
}
cajero.paintBalance();

var doc = new jsPDF();
doc.text("Hello world!", 20, 20);
doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);
doc.addPage("a6", "l");
doc.text("Do you like that?", 20, 20);