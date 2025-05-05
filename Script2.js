// JavaScript source code
<script>
    const imagenesGaleria = [
    "Carpeta de Imagenes/ODS4.jpg",
    "Carpeta de Imagenes/alumnos.jpg",
    "Carpeta de Imagenes/estudiantes.jpg",
    "Carpeta de Imagenes/Calidad.jpg",
    "Carpeta de Imagenes/explicacion.jpg",
    "Carpeta de Imagenes/clasepizarron.jpg"
    ];

    const imagenPrincipalGaleria = document.getElementById("imagenPrincipalGaleria");
    const contenedorMiniaturasGaleria = document.getElementById("contenedorMiniaturasGaleria");

        imagenesGaleria.forEach((ruta, indice) => {
            const miniatura = document.createElement("img");
    miniatura.src = ruta;
    miniatura.alt = `Miniatura del Proyecto ${indice + 1}`;
    miniatura.classList.add("miniaturaGaleria");
            miniatura.addEventListener("click", () => {
        imagenPrincipalGaleria.src = ruta;
    imagenPrincipalGaleria.alt = `Imagen del Proyecto ${indice + 1}`;
            });
    contenedorMiniaturasGaleria.appendChild(miniatura);

    if (indice === 0) {
        imagenPrincipalGaleria.src = ruta;
    imagenPrincipalGaleria.alt = `Imagen del Proyecto ${indice + 1}`;
            }
        });
</script>