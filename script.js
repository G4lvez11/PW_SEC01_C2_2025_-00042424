
document.getElementById("btn-ordenar").addEventListener("click", () => {
    const contenedor = document.querySelector(".contenido-columnas");
    if (contenedor.style.flexDirection === "column") {
        contenedor.style.flexDirection = "row";
    } else {
        contenedor.style.flexDirection = "column";
    }
});


document.getElementById("btn-cambiar-titulo").addEventListener("click", () => {
    const titulo = document.getElementById("titulo-principal");
    titulo.textContent = "Escalosfrios por R.L Stine";
});


document.getElementById("btn-cambiar-color").addEventListener("click", () => {
    const subtitulo = document.querySelector("#descripcion h2");
    const parrafo = document.querySelector("#descripcion p");


    if (subtitulo.style.color === "red") {
        subtitulo.style.color = "#004080";
        parrafo.style.color = "#333";
    } else {
        subtitulo.style.color = "red";
        parrafo.style.color = "darkred";
    }
});

document.getElementById("btn-agregar-imagen").addEventListener("click", () => {
    const seccionDatos = document.getElementById("datos-libro");
    const urlImagen = document.getElementById("input-imagen").value.trim();

    if (!urlImagen) {
        alert("Por favor ingrese una URL de imagen.");
        return;
    }

    let img = document.getElementById("imagen-libro");
    if (!img) {
        img = document.createElement("img");
        img.id = "imagen-libro";
        seccionDatos.appendChild(img);
    }

    img.src = urlImagen;
    img.alt = "Portada del libro";
    img.style.display = "block";
    img.style.margin = "15px auto";
    img.style.maxWidth = "300px";
});
