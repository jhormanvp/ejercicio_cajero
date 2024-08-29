class MostrarMenu {
    constructor(saldo, consultarMovimientos, retirar, consultarSaldo, consignar) {
        this._saldo = saldo;
        this._consultarMovimientos = consultarMovimientos;
        this._retirar = retirar;
        this._movimientos=[]    ;
        this._consultarSaldo = consultarSaldo;
        this._consignar = consignar;
    }

    iniciar() {
        const menu = document.getElementById("menu");
        menu.classList.remove("hidden");

        document.getElementById("retirar").addEventListener("click", () => {
           
            {
                let monto = parseFloat(prompt("Ingrese el monto a retirar: "));
                if (monto > this._saldo) {
                    console.log("No tienes suficiente saldo");
                } else {
                    this._saldo -= monto;
                    console.log("Retiro exitoso");
                    this._mostrarSaldo();
                }
            }
        });

        document.getElementById("consultarSaldo").addEventListener("click", () => {
            {
               this._mostrarSaldo();
                
            }
        });

        document.getElementById("consignar").addEventListener("click", () => {
            {
                let montoo = parseFloat(prompt("Ingrese el monto a consignar: "));
                if (montoo < 0) {
                    alert("No se permiten montos negativos");
                } else {
                    this._saldo += montoo;
                    alert("Consignación exitosa");
                    this._mostrarSaldo();
                }
            }   
        });

        document.getElementById("consultarMovimientos").addEventListener("click", () => {
            
                let movimientos = JSON.parse(localStorage.getItem("consultarMovimientos"));
                if (movimientos && movimientos.length > 0) {
                    alert("Movimientos realizados:\n" + movimientos.join("movimientos"));
                } else {
                    alert("No hay movimientos registrados.");
                }
            
        });

        document.getElementById("logout").addEventListener("click", () => {
            alert("¡Gracias por usar nuestros servicios!");
        });
        document.getElementById("regresar").addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }
    _mostrarSaldo() {
        console.log ("Saldo actual:", this._saldo);
    }
}

const menu = new MostrarMenu(0);
menu.iniciar();