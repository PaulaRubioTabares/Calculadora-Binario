/*Se lee el dato ingresado en el input id ndecimal*/

/*document.getElementById("numero").value: Obtiene el número que escribiste.

parseInt(...): Convierte ese texto a un número entero.*/

function convertirDecimal() {
    /*función llamada en el button*/
    const ndecimal = parseInt(document.getElementById("ndecimal").value);

    if (isNaN(ndecimal)) {
        /*Datos inválidos
        isNaN(numero): Verifica si no es un número (por ejemplo, si dejaste la caja vacía)*/
        alert("Por favor ingresa un número válido.");
        return;
    }

    document.getElementById("binario").textContent = ndecimal.toString(2);
    document.getElementById("hexadecimal").textContent = ndecimal
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
    const nbinario = document.getElementById("nbinario").value.trim();

    if (!/^[01]+$/.test(nbinario)) {
        /*Datos inválidos*/
        alert("Ingresa un número binario válido (solo 0 y 1).");
        return;
    }
    // Convertir binario a decimal (base 2)
    const decimal = parseInt(nbinario, 2);
    document.getElementById("binarioDecimal").textContent = decimal;
    document.getElementById("binarioHexa").textContent = decimal
        .toString(16)
        .toUpperCase();
}

function convertirHexadecimal() {
    const nhexa = document.getElementById("nhexa").value.trim();

    if (!/^[0-9a-fA-F]+$/.test(nhexa)) {
        /*Datos inválidos*/
        alert("Por favor ingresa un número válido.");
        return;
    }
    // Conversión a decimal usando base 16
    const decimal = parseInt(nhexa, 16);
    document.getElementById("hexaDecimal").textContent = decimal;
    document.getElementById("hexaBinario").textContent = decimal.toString(2);
}

// Permite ejecutar la conversión al presionar la tecla ENTER
document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("ndecimal")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirDecimal();
            }
        });

    document
        .getElementById("nbinario")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirBinario();
            }
        });

    document
        .getElementById("nhexa")
        .addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                convertirHexadecimal();
            }
        });
});
