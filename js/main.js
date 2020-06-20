// Login

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

let cajero = {
    balance: 500,
    retirar: function() {
        let monto = parseInt(document.getElementById('retiro_id').value);
        if (monto <= this.balance) {
            this.balance -= monto;
            this.paintBalance();
            Swal.fire({
                icon: 'success',
                title: 'Transacción Exitosa',
                text: 'Retire su efectivo!',
                footer: '<p>Revise su nuevo saldo</p>'
            })
            document.getElementById('retiro_id').value = '';
        } else Swal.fire({
            icon: 'warning',
            title: 'Fondos Insufiecientes',
            text: 'Verificar Saldo!'
        })

    },
    ingresar: function() {
        this.balance += parseInt(document.getElementById('ingresar_id').value);
        this.paintBalance();
        if (isNaN('ingresar_id')) {
            Swal.fire({
                icon: 'success',
                title: 'Transaccion Exitosa',
                text: 'Verifique su saldo'
            })
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Transacción Exitosa',
            text: 'Desea realizar otra transacción?',
            footer: '<p>Revise su nuevo saldo</p>'
        })
        document.getElementById('ingresar_id').value = '';
    },
    // pagoRecibos: function() {
    //     let monto = parseInt(document.getElementById('bill_id').value);
    //     if (monto <= this.balance) {
    //         this.balance -= monto;
    //         this.paintBalance();
    //         Swal.fire({
    //             icon: 'success',
    //             title: 'Transacción Exitosa',
    //             footer: '<p>Revise su nuevo saldo</p>'
    //         })
    //         document.getElementById('bill_id').value = '';
    //     } else Swal.fire({
    //         icon: 'warning',
    //         title: 'Fondos Insufiecientes',
    //         text: 'Verificar Saldo!'
    //     })

    // },
    paintBalance: function() {
        let b = this.balance.toFixed(2);
        document.getElementById('balance_id').innerHTML = '$' + b;
    },
}

cajero.paintBalance();





// Function w/sweetAlert
//I've combined w/2 sweetAlert




// var doc = new jsPDF();
// doc.text("Hello world!", 20, 20);
// doc.text("This is client-side Javascript, pumping out a PDF.", 20, 30);
// doc.addPage("a6", "l");
// doc.text("Do you like that?", 20, 20);