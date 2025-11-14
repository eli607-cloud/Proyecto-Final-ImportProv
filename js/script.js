function guardarCarritoLocalStorage(arrCarrito) {
    localStorage.setItem('carrito', JSON.stringify(arrCarrito));
}

function cargarCarritoLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
}

// ===================================================================
// 1. INICIO DEL SCRIPT: Espera a que el DOM cargue
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Carga el carrito desde localStorage o lo inicializa vacío.
    let carrito = cargarCarritoLocalStorage(); 
    
    // -------------------------------------------------------------------
    // 2. FUNCIÓN PRINCIPAL DE AGREGAR PRODUCTO (DEFINIDA AQUÍ)
    // Debe estar definida ANTES de ser asignada en el addEventListener.
    // -------------------------------------------------------------------

    function agregarProducto(e) {
        e.preventDefault(); 
        
        const botonClickeado = e.target;
        
        // La lectura del precio es CRÍTICA. Limpieza de puntos de miles.
        const precioLimpio = botonClickeado.dataset.precio.replace(/\./g, '');

        const producto = {
            id: botonClickeado.dataset.id,
            nombre: botonClickeado.dataset.nombre,
            precio: parseFloat(precioLimpio), 
            cantidad: 1 
        };

        const productoExistente = carrito.find(item => item.id === producto.id);

        if (productoExistente) {
            productoExistente.cantidad++;
            console.log(`[CARRITO] Cantidad de ${producto.nombre} actualizada.`);
        } else {
            carrito.push(producto);
            console.log(`[CARRITO] ${producto.nombre} agregado por primera vez.`);
        }
        
        guardarCarritoLocalStorage(carrito); 
        alert(`¡${producto.nombre} agregado al carrito!`);
    }

    // -------------------------------------------------------------------
    // 3. INICIALIZACIÓN DE BOTONES
    // Asigna el EventListener DESPUÉS de definir la función 'agregarProducto'.
    // -------------------------------------------------------------------
    
    const botonesAgregar = document.querySelectorAll('.btn-agregar'); 

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarProducto);
    });

    // -------------------------------------------------------------------
    // 4. LÓGICA DEL SLIDESHOW (CARRUSEL DE IMÁGENES)
    // -------------------------------------------------------------------

    const slides = document.querySelectorAll('#hero-slideshow .slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    setInterval(nextSlide, 4000); 

}); // CIERRE DEL DOMContentLoaded