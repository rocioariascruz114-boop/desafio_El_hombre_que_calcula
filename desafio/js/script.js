 // 1. PROBLEMA DE LOS CAMELLOS
document.getElementById("formCamellos").addEventListener("submit", function(e) {
    e.preventDefault();

    let total = Number(document.getElementById("totalCamellos").value);
    let d1 = Number(document.getElementById("d1").value);
    let d2 = Number(document.getElementById("d2").value);
    let d3 = Number(document.getElementById("d3").value);

    let box = document.getElementById("resCamellos");
    let txt = document.getElementById("txtCamellos");

    // Validar los datos
    if (total <= 0 || total % 1 != 0 ||
        d1 <= 0 || d1 % 1 != 0 ||
        d2 <= 0 || d2 % 1 != 0 ||
        d3 <= 0 || d3 % 1 != 0) {

        txt.textContent = "Ingresa números enteros positivos.";
        box.classList.remove("hidden");
        return;
    }

    // Agregar un camello prestado
    let nuevoTotal = total + 1;

    // Comprobar si las divisiones son exactas
    if (nuevoTotal % d1 != 0 ||
        nuevoTotal % d2 != 0 ||
        nuevoTotal % d3 != 0) {

        txt.textContent =
            "No se puede aplicar el truco con estos datos, " +
            "porque alguna división no da un número entero de camellos.";

        box.classList.remove("hidden");
        return;
    }

    // Calcular el reparto
    let h1 = nuevoTotal / d1;
    let h2 = nuevoTotal / d2;
    let h3 = nuevoTotal / d3;

    let repartidos = h1 + h2 + h3;
    let sobrantes = nuevoTotal - repartidos;

    // Comprobar que el reparto sea válido
    if (repartidos > nuevoTotal || sobrantes < 1) {
        txt.textContent =
            "Con estos denominadores no se puede realizar " +
            "el truco sin repartir más camellos de los disponibles.";

        box.classList.remove("hidden");
        return;
    }

    // Mostrar el resultado
    txt.innerHTML =
        "Camellos originales: " + total + "<br>" +
        "Camello prestado: 1<br>" +
        "Total temporal: " + nuevoTotal + "<br><br>" +
        "Hermano mayor (1/" + d1 + "): " + h1 + " camellos<br>" +
        "Hermano mediano (1/" + d2 + "): " + h2 + " camellos<br>" +
        "Hermano menor (1/" + d3 + "): " + h3 + " camellos<br><br>" +
        "Total repartido: " + repartidos + "<br>" +
        "Quedan antes de devolver el préstamo: " + sobrantes + "<br>" +
        "Se devuelve el camello prestado.<br>" +
        "Camellos que quedan al final: " + (sobrantes - 1);

    box.classList.remove("hidden");
});
// 2. PROBLEMA DEL JOYERO

document.getElementById("formJoyero").addEventListener("submit", function(e) {
    e.preventDefault();

    let v1 = Number(document.getElementById("v1").value);
    let p1 = Number(document.getElementById("p1").value);
    let v2 = Number(document.getElementById("v2").value);
    let p2 = Number(document.getElementById("p2").value);
    let vReal = Number(document.getElementById("vReal").value);

    let resultado = document.getElementById("txtJoyero");

    if (v1 == v2) {
        resultado.textContent = "Los precios de venta deben ser diferentes.";
    } else {
        let diferenciaVenta = v2 - v1;
        let diferenciaHospedaje = p2 - p1;
        let aumentoVenta = vReal - v1;

        let pago = p1 +
            (aumentoVenta * diferenciaHospedaje) / diferenciaVenta;

        resultado.textContent =
            "Diferencia de ventas: " + diferenciaVenta +
            ". Diferencia de hospedaje: " + diferenciaHospedaje +
            ". Pago de hospedaje: " + pago.toFixed(2);
    }

    document.getElementById("resJoyero").classList.remove("hidden");
});


// 3. ECUACIÓN CUADRÁTICA

document.getElementById("formCuadratica").addEventListener("submit", function(e) {
    e.preventDefault();

    let a = Number(document.getElementById("coefA").value);
    let b = Number(document.getElementById("coefB").value);
    let c = Number(document.getElementById("coefC").value);

    let resultado = document.getElementById("txtCuadratica");

    if (a == 0) {
        resultado.textContent = "El valor de a debe ser diferente de cero.";
    } else {
        let D = b * b - 4 * a * c;

        if (D > 0) {
            let x1 = (-b + Math.sqrt(D)) / (2 * a);
            let x2 = (-b - Math.sqrt(D)) / (2 * a);

            resultado.textContent =
                "Dos raíces: x1 = " + x1.toFixed(2) +
                " y x2 = " + x2.toFixed(2);

        } else if (D == 0) {
            let x = -b / (2 * a);

            resultado.textContent =
                "Una raíz: x = " + x.toFixed(2);

        } else {
            resultado.textContent = "No hay raíces reales.";
        }
    }

    document.getElementById("resCuadratica").classList.remove("hidden");
});


// 4. APROXIMACIÓN DE PI

document.getElementById("formPi").addEventListener("submit", function(e) {
    e.preventDefault();

    let n = Number(document.getElementById("valN").value);
    let resultado = document.getElementById("txtPi");

    if (n < 1 || n > 100000 || n % 1 != 0) {
        resultado.textContent = "Ingresa un número entero positivo hasta 100000.";
    } else {
        let suma = 0;

        for (let i = 1; i <= n; i++) {
            suma = suma + 1 / (i * i);
        }

        let pi = Math.sqrt(6 * suma);

        resultado.textContent =
            "Número de repeticiones: " + n +
            ". Pi aproximado: " + pi.toFixed(6) +
            ". Pi real: " + Math.PI.toFixed(6);
    }

    document.getElementById("resPi").classList.remove("hidden");
});

