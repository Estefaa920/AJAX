window.onload = function () {


    const body1 = document.body;
    if (body1.id == "index1") {
        const resultado1 = document.getElementById("resultado1");
        cargarJSON1(resultado1);
        // alert("Estas en index");
    } else if (body1.id == "detalle1") {
        // alert("Estas en detalle1");
    } else if (body1.id == "index2") {
        const resultado1 = document.getElementById("resultado1");
        // cargarJSON1(resultado1);
        buscarJSON1(resultado1, "mujer");
    } else if (body1.id == "droite") {

    } else if (body1.id == "index3") {
        buscarJSON1(resultado1, "hombre");
    }


}



function cargarJSON1(resultado1) {
    var ajax1 = new XMLHttpRequest();

    ajax1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj0 = this.responseText;
            var obj1 = JSON.parse(obj0);
            var obj2 = obj1["datos1"];
            const body1 = document.body;
            var buscar = document.getElementById("campo1").value;
            var resultado = "";


            // for (var i = 0; i < obj2.length; i++) {

            // if (obj2[i].articulo.search(resultado1)) {
            // resultado += "<div><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";
            // // ?v1=valor&v2=valor&v3=valor

            //     document.getElementById(resultado1.id).innerHTML = resultado;
            // }

            if (buscar == "") {
                if (body1.id == "index1") {
                    video.style.display = "block";
                    resultado1.style.display = "none";
                } else if (body1.id == "index2") {
                    for (var i = 0; i < obj2.length; i++) {
                        resultado += "<div class = 'tamanio' ><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";
                    }
                }
            } else {

                for (var i = 0; i < obj2.length; i++) {

                    if (buscar.substring(0, buscar.length).toLowerCase().toUpperCase().replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U") ==
                        obj2[i].articulo.substring(0, buscar.length).toLowerCase().toUpperCase()) {
                        resultado += "<div class = 'tamanio' ><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";


                    }
                }

            }

            document.getElementById(resultado1.id).innerHTML = resultado;

        }


    };
    ajax1.open("GET", "json/db1.json");
    ajax1.send();


}

function buscarJSON1(resultado1, genero) {

    var ajax1 = new XMLHttpRequest();

    ajax1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj0 = this.responseText;
            var obj1 = JSON.parse(obj0);
            var obj2 = obj1["datos1"];
            const body1 = document.body;
            var buscar = document.getElementById("campo1").value;

            var resultado = "";

            // if (buscar == " ") {
            //     if (body1.id == "index1") {
            //         console.log("l")
            //         video.style.display = "block";
            //         resultado1.style.display = "none";
            //     } else if (body1.id == "index2") {
            //         // resultado += "<div class = 'tamanio' ><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";
            //     }
            // } else {

            console.log(buscar, "b")
            console.log(genero, "g")
            console.log(resultado, "r")


            for (var i = 0; i < obj2.length; i++) {

                if ((buscar.substring(0, buscar.length).toLowerCase().toUpperCase().replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U") ==
                    obj2[i].articulo.substring(0, buscar.length).toLowerCase()) & obj2[i].genero == genero) {
                    console.log("aaaaa")
                    resultado += "<div class = 'tamanio' ><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";
                }
                // else if (buscar.substring(0, buscar.length).toLowerCase().toUpperCase().replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U") ==
                //     obj2[i].articulo.substring(0, buscar.length).toLowerCase()) {
                //     resultado += "<div class = 'tamanio' ><a href='detalle.php?ide=" + obj2[i].ide + "'><div><img src='" + obj2[i].ruta + "'></div><div>" + obj2[i].articulo + "</div><div>" + obj2[i].pvp + "</div></a></div>";
                // }
            }
            document.getElementById(resultado1.id).innerHTML = resultado;


            // }

        }


    };
    ajax1.open("GET", "json/db1.json");
    ajax1.send();
}

window.addEventListener("load", function (event) {
    const Sinboton1 = this.document.getElementById("campo1");
    // const campo1 = this.document.getElementById("campo1");
    const resultado1 = this.document.getElementById("resultado1");
    const body1 = document.body;
    var video = document.getElementById("video");

    let sexo = "todo";
    let sexos = this.document.querySelectorAll(".sexo .mh");

    for (let i = 0; i < sexos.length; i++) {
        sexos[i].addEventListener("click", function () {
            sexo = sexos[i].getAttribute("id");

            buscarJSON1(resultado1, sexo)
        });
    }

    if (Sinboton1) {
        Sinboton1.addEventListener("keyup", function (event) {
            if (body1.id == "index1") {
                event.preventDefault();
                video.style.display = "none";
                cargarJSON1(resultado1);
            }
            event.preventDefault();
            cargarJSON1(resultado1);
        });

    }


});