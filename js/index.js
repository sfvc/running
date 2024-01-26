// Función para ocultar el contenedor de carga y mostrar el contenido principal cuando todas las imágenes se hayan cargado
function hideLoading() {
    document.getElementById('loading-container').style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

// Evento que se activa cuando todas las imágenes se han cargado
window.addEventListener('load', hideLoading);