// Manejo suave de los enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        const currentSection = document.querySelector('section.active');

        // Oculta la sección actual
        if (currentSection && currentSection !== targetSection) {
            currentSection.style.opacity = '0'; // Inicia la ocultación
            setTimeout(() => {
                currentSection.classList.remove('active'); // Remueve la clase activa
                currentSection.style.visibility = 'hidden'; // Oculta la visibilidad
            }, 500); // Tiempo de espera igual al de la transición
        }

        // Muestra la nueva sección
        targetSection.style.visibility = 'visible'; // Asegúrate de que la nueva sección sea visible
        targetSection.classList.add('active'); // Añade la clase activa
        setTimeout(() => {
            targetSection.style.opacity = '1'; // Cambia la opacidad
        }, 50); // Tiempo de espera breve antes de cambiar la opacidad
        
         // Cierra el menú hamburguesa al hacer clic en una sección (en pantallas pequeñas)
         const menu = document.querySelector('.ulMenuHorizontal');
         if (menu.classList.contains('show')) {
             menu.classList.remove('show'); // Oculta el menú hamburguesa
         }
    });
});

// Al cargar la página, muestra la sección de inicio
window.onload = function() {
    const inicioSection = document.getElementById('inicio');
    inicioSection.classList.add('active'); // Asegúrate de que la sección de inicio se muestre
    inicioSection.style.opacity = '1'; // Asegúrate de que sea visible
    inicioSection.style.visibility = 'visible'; // Asegúrate de que sea visible
};

// Seleccionamos el ícono de la hamburguesa y el menú
const hamburguesa = document.querySelector('.hamburguesa');
const menu = document.querySelector('.ulMenuHorizontal');

// Agregamos el evento de clic en el ícono de la hamburguesa
hamburguesa.addEventListener('click', () => {
    // Alternamos la clase "show" en el menú cuando se hace clic en la hamburguesa
    menu.classList.toggle('show');
});
