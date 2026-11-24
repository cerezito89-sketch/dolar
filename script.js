function convertir() {

    let pesos = parseFloat(document.getElementById("pesos").value);

    let tipoDolar = 18.50;

    let tipoEuro = 20.10;

    let tipoYen = 0.125;

    let dolares = pesos / tipoDolar;

    let euros = pesos / tipoEuro;

    let yenes = pesos / tipoYen;


    document.getElementById("dolar").innerHTML =
        "Dólares: $" + dolares.toFixed(2);


    document.getElementById("euro").innerHTML =
        "Euros: €" + euros.toFixed(2);


    document.getElementById("yen").innerHTML =
        "Yenes: ¥" + yenes.toFixed(2);

}
function calcular() {

    var cm = parseFloat(document.getElementById("cantidad").value);
    var unidad = document.getElementById("unidad").value;
    var resultado;

    if (isNaN(cm)) {
        alert("Ingresa una cantidad");
        return;
    }

    if (unidad == "mm") {
        resultado = cm * 10;
    }
    else if (unidad == "m") {
        resultado = cm / 100;
    }
    else if (unidad == "km") {
        resultado = cm / 100000;
    }
    else if (unidad == "p") {
        resultado = cm / 2.54;
    }

    document.getElementById("resultado").innerHTML =
    "Resultado: " + resultado;

}