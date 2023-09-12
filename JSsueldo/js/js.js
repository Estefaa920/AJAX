function hijos() {

    let selector = document.getElementById("hijos").value;
    let sueldo = document.getElementById("sueldo").value;

    console.log(selector)

    if (selector == "no1") {
        selector = 0;
    } else if (selector == "si") {
        selector = sueldo / 10;
    } else if (selector == "no") {
        selector = (sueldo * 15) / 100;
    }
    return selector

}

function edad() {

    let selector = document.getElementById("edad").value;
    let sueldo = document.getElementById("sueldo").value;

    console.log(selector)

    if (selector == "no2") {
        selector = 0;
    } else if (selector == "menor") {
        resultado.innerHTML = "No pagas impuesto"
    } else if (selector == "entre") {
        selector = (sueldo * 15) / 100;
    } else if (selector == "mayor") {
        selector = sueldo / 10;
    }
    return selector

}

function pagas() {

    let selector = document.getElementById("pagas").value;
    let sueldo = document.getElementById("sueldo").value;

    console.log(selector)

    if (selector == "no3") {
        selector = 0;
    } else if (selector == "doce") {
        selector = 12;
    } else if (selector == "catorce") {
        selector = 14;
    }
    return selector

}

function calcular() {

    let resultado = document.getElementById("resultado");
    let sueldo = document.getElementById("sueldo").value;


    let primero = hijos();
    let segundo = edad();
    let tercero = pagas();

    let total1 = (sueldo - primero) / tercero;

    let total2 = ((sueldo - primero) - segundo) / tercero;



    if (primero == 0) {

        resultado.innerHTML = "Selecciona si tienes hijos o no"

    } else if (segundo == 0) {

        resultado.innerHTML = "Selecciona su edad"

    } else if (tercero == 0) {

        resultado.innerHTML = "Selecciona cuantas pagas recibes"

    } else {

        if (segundo == "menor") {
            resultado.innerHTML = "El salario neto es: " + total1.toFixed(2) + " €";
        } else {
            resultado.innerHTML = "El salario neto es: " + total2.toFixed(2) + " €";
        }
    }
}