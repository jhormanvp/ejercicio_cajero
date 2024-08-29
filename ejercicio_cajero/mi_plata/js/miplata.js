class MiPlata {
    constructor(usuario, clave) {
        this._usuario = usuario;
        this._clave = clave;
        this._intentos = 0;
    }

    iniciar() {
        const usuarioInput = document.getElementById("username").value;
        const claveInput = document.getElementById("clave").value;

        if (usuarioInput === this._usuario && claveInput === this._clave) {
            window.location.href = "inicio.html";
            alert("Bienvenido al Banco MiPlata");
        } else {
            this._intentos++;
            console.log(`Usuario o contraseña incorrectos. Intentos restantes: ${3 - this._intentos}`);
            
            if (this._intentos >= 3) {
                alert("Cuenta bloqueada por 24 horas, comunícate con tu banco");
                
                this._intentos = 0;
            }
        }
    }
}

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const banco = new MiPlata("usuario", "1234");
    banco.iniciar();
});
