// Lógica para el Slideshow del Hero
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todas las imágenes del slideshow
    const slides = document.querySelectorAll('#hero-slideshow .slide');
    let currentSlide = 0;
    
    // Justificación: Esta función cambia la clase 'active' de una imagen a la siguiente
    function nextSlide() {
        // Oculta la imagen actual (quita la clase 'active')
        slides[currentSlide].classList.remove('active');
        
        // Mueve al siguiente índice (o vuelve a 0 si llega al final)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Muestra la nueva imagen (agrega la clase 'active')
        slides[currentSlide].classList.add('active');
    }
    
    // Inicia el carrusel para que cambie cada 4 segundos (4000 milisegundos)
    // Justificación: setInterval ejecuta la función 'nextSlide' repetidamente cada 4 segundos
    setInterval(nextSlide, 4000);
});


