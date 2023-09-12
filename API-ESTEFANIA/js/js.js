window.onload = function () {
    const body1 = document.body;

    ajax();
    ajax2();
    ajax3();


}


function ajax() {



    var ajax1 = new XMLHttpRequest();
    ajax1.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            let buscar = document.getElementById("busqueda");

            buscar.style.display = "none";
            //Muestra toda la información
            // console.log(this.responseText);
            var obj = this.responseText;
            var obj1 = JSON.parse(obj);
            var obj2 = obj1["top"];

            // obj2.forEach(element => console.log(element));


            obj2.forEach(anime => {

                // console.log(anime);

                var div = document.createElement("div");
                div.className = "col-3 pelis";
                document.querySelector("#pelis").appendChild(div);


                var nombre = document.createElement("h3");
                nombre.innerText = anime.title;
                nombre.className = "grid";
                div.appendChild(nombre);

                var foto = document.createElement("img");
                var url = document.createElement("a");
                link = anime.url
                url.setAttribute("href", link);
                div.appendChild(url);
                foto.src = anime.image_url;
                url.appendChild(foto);
                url.className = "col-9";

                var info = document.createElement("div");
                info.className = "info";
                div.appendChild(info);

                var start_date = document.createElement("p");
                start_date.className = "infoP1";
                start_date.innerText = anime.start_date + " - " + anime.end_date;
                info.appendChild(start_date);


                var episodes = document.createElement("p");
                episodes.className = "infoP2 ep";
                episodes.innerText = anime.episodes + " Vídeos ";
                info.appendChild(episodes);


                // document.getElementById('foto').src += anime.image_url;
                // document.getElementById('nombre').innerHTML += anime.title;

            });



        }

    };


    ajax1.open("GET", "https://api.jikan.moe/v3/top/anime/1/bypopularity", true);

    // ajax1.open("GET", " https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10", true);



    ajax1.send();


}



function ajax2() {



    let titBuscar = document.createElement("h1");
    titBuscar.className = "respuesta";

    let pelis = document.querySelector("#busqueda");
    let todo = document.createElement("div");
    pelis.appendChild(titBuscar);
    todo.setAttribute("id", "borrar");
    pelis.appendChild(todo);


    if (document.querySelector("#busqueda") == "") {
        let borrar = document.getElementById("borrar");
        borrar.remove();
        ajax();

    }


    document.getElementById("search").addEventListener("click", function () {
        let buscar = document.getElementById("busqueda");

        buscar.style.display = "block";

        let reciente = document.querySelector("#recientes");
        let mangas = document.getElementById("mangas");
        let quitar = document.getElementById("pelis");
        let quitar2 = document.getElementById("top");


        let fot2 = document.querySelector("#Hsub");


        fot2.style.display = "none";

        reciente.style.display = "none";
        mangas.style.display = "none";
        quitar.style.display = "none";
        quitar2.style.display = "none";




        let busqueda = document.getElementById("buscar1").value;
        let url = " https://api.jikan.moe/v4/anime?q=" + busqueda + "&sfw";


        titBuscar.innerText = "Resultado de: ' " + busqueda + " ' ";

        var ajax1 = new XMLHttpRequest();


        ajax1.onreadystatechange = function () {


            if (this.readyState == 4 && this.status == 200) {
                let busqueda = document.getElementById("buscar1").value;
                let url = " https://api.jikan.moe/v4/anime?q=" + busqueda + "&sfw";
                //Muestra toda la información
                // console.log(this.responseText);
                var obj = this.responseText;
                var obj1 = JSON.parse(obj);
                var obj2 = obj1["data"];

                // console.log(url)
                // console.log(obj2)
                todo.innerText = "";


                obj2.forEach(anime => {

                    // console.log(anime);


                    var div = document.createElement("div");
                    todo.appendChild(div);
                    div.className = "col-3 pelis";

                    var nombre = document.createElement("h3");
                    nombre.innerText = anime.title;
                    nombre.className = "grid";
                    div.appendChild(nombre);

                    var foto = document.createElement("img");
                    foto.className = "";
                    var url = document.createElement("a");
                    link = anime.url
                    url.setAttribute("href", link);
                    div.appendChild(url);
                    foto.src = anime.images.jpg.image_url;
                    url.appendChild(foto);

                    var info = document.createElement("div");
                    info.className = "info";
                    div.appendChild(info);

                    var start_date = document.createElement("p");
                    start_date.className = "infoP1";
                    start_date.innerText = anime.aired.string;
                    info.appendChild(start_date);


                    var episodes = document.createElement("p");
                    episodes.className = "infoP2 ep";
                    episodes.innerText = anime.episodes + " Vídeos ";
                    info.appendChild(episodes);







                });

            }

        };



        ajax1.open("GET", url, true);
        ajax1.send();
    });


}




function ajax3() {



    var ajax1 = new XMLHttpRequest();
    ajax1.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            //Muestra toda la información
            // console.log(this.responseText);
            var obj = this.responseText;
            var obj1 = JSON.parse(obj);
            var obj2 = obj1["data"];

            // obj2.forEach(element => console.log(element));


            obj2.forEach(anime => {

                console.log(anime);

                var div = document.createElement("div");
                div.className = "";
                document.querySelector("#recientes").appendChild(div);


                var info = document.createElement("div");
                info.className = "info jeje ";
                div.appendChild(info);

                var foto = document.createElement("img");

                var url = document.createElement("a");
                link = anime.entry.url;
                url.setAttribute("href", link);
                info.appendChild(url);
                foto.src = anime.entry.images.jpg.large_image_url;
                url.appendChild(foto);
                foto.className = "";
                url.className = "col-5 url";

                var nombre = document.createElement("a");
                var link = anime.episodes[0].url
                nombre.setAttribute("href", link);
                nombre.innerText = anime.entry.title;
                nombre.className = "p-left manga col-5";
                info.appendChild(nombre);

                var type = document.createElement("a");
                type.className = "type col-5";
                type.innerText = anime.episodes[0].title
                info.appendChild(type);


                // document.getElementById('foto').src += anime.image_url;
                // document.getElementById('nombre').innerHTML += anime.title;

            });



        }

    };


    ajax1.open("GET", " https://api.jikan.moe/v4/watch/episodes", true);



    ajax1.send();



}
