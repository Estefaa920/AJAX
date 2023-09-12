window.onload = function () {

    let todos = document.querySelector("#resultado");
    let precio = document.querySelector("#precio");
    let tipos = document.querySelector("#tipos");

    inicio();

    categoriaProductos();

    precioProductos();

}



function inicio() {

    fetch("json/productos.json")
        .then(response => response.json())
        .then(productos => {
            productos.forEach(data => {

                let todos = document.querySelector("#resultado");
                let precio = document.querySelector("#precio");
                let tipos = document.querySelector("#tipos");

                let destacadosSi = data.destacado == "si";

                if (destacadosSi) {
                    let destacados = document.querySelector("#destacados");
                    let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                    destacados.appendChild(producto.mostrarProductos());
                }

                let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                todos.appendChild(producto.mostrarProductos());

            });

        });
}


function categoriaProductos() {

    tipos.addEventListener('change', (event) => {
        eliminarPorductos();
        fetch("json/productos.json")
            .then(response => response.json())
            .then(productos => {
                productos.forEach(data => {

                    let tipos = document.querySelector("#tipos");
                    let categoriaElegida = tipos.value;
                    let todos = document.querySelector("#resultado");
                    let precio = document.querySelector("#precio");

                    if (data.categoria == categoriaElegida) {

                        let categorias = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(categorias.mostrarProductos());

                    } else if (categoriaElegida == "todo") {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    };

                });
            });
    });
}


function precioProductos() {

    precio.addEventListener('change', (event) => {
        eliminarPorductos();

        fetch("json/productos.json")
            .then(response => response.json())
            .then(productos => {
                productos.forEach(data => {


                    let todos = document.querySelector("#resultado");
                    let precio = document.querySelector("#precio");
                    let precioElegir = precio.value;


                    if ((precioElegir < 100)
                        && (data.precio < 100)) {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    } else if ((precioElegir == 100) &&
                        (data.precio >= 100 && data.precio < 200)) {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    } else if ((precioElegir == 200) &&
                        (data.precio >= 200 && data.precio < 300)) {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    } else if ((precioElegir == 300) &&
                        (data.precio >= 300)) {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    } else if (precioElegir == "todo") {

                        let producto = new Producto(data.categoria, data.nombre, data.precio, data.destacado, data.foto);
                        todos.appendChild(producto.mostrarProductos());

                    };
                });
            });
    });
}


function eliminarPorductos() {

    let todos = document.querySelector("#resultado");

    let eliminarPorductos = document.querySelectorAll("#resultado .producto");

    for (let i = 0; i < eliminarPorductos.length; i++) {

        todos.removeChild(eliminarPorductos[i]);

    }


}
