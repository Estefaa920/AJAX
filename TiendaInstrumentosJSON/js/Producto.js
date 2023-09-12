function Producto(categoria, nombre, precio, destacado, foto) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.destacado = destacado;
    this.foto = foto;

    this.mostrarProductos = function () {

        let div = document.createElement("div");
        div.className = "producto";

        let div2 = document.createElement("div");
        div2.className = "img";

        let foto = document.createElement("img");
        foto.src = "images/" + this.foto;

        let nombre = document.createElement("h3");
        nombre.innerHTML = this.nombre;

        let precio = document.createElement("p");
        precio.innerHTML = this.precio + " €";

        div2.appendChild(foto);
        div.appendChild(div2);
        div.appendChild(nombre);
        div.appendChild(precio);

        return div;


    }
}