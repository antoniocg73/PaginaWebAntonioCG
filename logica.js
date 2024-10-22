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
    });
});

// Al cargar la página, muestra la sección de inicio
window.onload = function() {
    const inicioSection = document.getElementById('inicio');
    inicioSection.classList.add('active'); // Asegúrate de que la sección de inicio se muestre
    inicioSection.style.opacity = '1'; // Asegúrate de que sea visible
    inicioSection.style.visibility = 'visible'; // Asegúrate de que sea visible
};
