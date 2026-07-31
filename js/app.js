/* Menú de navegación */
function action() {
    var ancla = document.getElementsByClassName("listaEnlace");

    for (var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle("desaparecer");
    }
}

/*Se lee el dato ingresado en el input id decimal*/

/*document.getElementById("numero").value: Obtiene el número que escribiste.

parseInt(...): Convierte ese texto a un número entero.*/

function convertirDecimal() {
    /*función llamada en el button*/
    const decimal = parseInt(document.getElementById("decimal").value);

    if (isNaN(decimal)) {
        /*Datos inválidos
        isNaN(numero): Verifica si no es un número (por ejemplo, si dejaste la caja vacía)*/
        alert("Por favor ingresa un número válido.");
        return;
    }

    document.getElementById("decimalBinario").textContent = decimal.toString(2);
    document.getElementById("decimalHexadecimal").textContent = decimal
        .toString(16)
        .toUpperCase();
}
/*
.toString(2): Convierte el número decimal a binario (base 2).

.toString(16): Convierte el número decimal a hexadecimal (base 16).

.toUpperCase(): Convierte el resultado a mayúsculas (por ejemplo, "a" → "A").

.textContent = ...: Cambia el texto dentro del <span> para mostrar el resultado.

*/

function convertirBinario() {
    const binario = document.getElementById("binario").value.trim();

    if (!/^[01]+$/.test(binario)) {
        /*Datos inválidos*/
        alert("Ingresa un número binario válido (solo 0 y 1).");
        return;
    }
    // Convertir binario a decimal (base 2)
    const decimal = parseInt(binario, 2);
    document.getElementById("binarioDecimal").textContent = decimal;
    document.getElementById("binarioHexadecimal").textContent = decimal
        .toString(16)
        .toUpperCase();
}

function convertirHexadecimal() {
    const hexadecimal = document.getElementById("hexadecimal").value.trim();

    if (!/^[0-9a-fA-F]+$/.test(hexadecimal)) {
        /*Datos inválidos*/
        alert("Por favor ingresa un número válido.");
        return;
    }
    // Conversión a decimal usando base 16
    const decimal = parseInt(hexadecimal, 16);
    document.getElementById("hexadecimalDecimal").textContent = decimal;
    document.getElementById("hexadecimalBinario").textContent =
        decimal.toString(2);
}

// Permite ejecutar la conversión al presionar la tecla ENTER
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("decimal")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirDecimal();
            }
        });

    document
        .getElementById("binario")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirBinario();
            }
        });

    document
        .getElementById("hexadecimal")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirHexadecimal();
            }
        });
});
