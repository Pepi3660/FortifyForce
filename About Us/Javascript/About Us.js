window.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', function(event) {
    var sidebar = document.getElementById("sidebar");
    var hamburger = document.querySelector('.hamburger');
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Detectar clics fuera del sidebar
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideSidebar && !isClickOnHamburger && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        hamburger.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content') || document.body;
    const links = document.querySelectorAll('.transition-link');

    content.classList.add('page-transition-enter');
    setTimeout(() => {
        content.classList.add('page-transition-enter-active');
    }, 10);

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href');
            content.classList.add('page-transition-exit');
            content.classList.add('page-transition-exit-active');
            setTimeout(() => {
                window.location.href = url;
            }, 500);
        });
    });
});

AOS.init({
    duration: 1200, // Duración de la animación en milisegundos
    offset: 200, // Offset (desplazamiento) en píxeles
    easing: 'ease-in-out', // Tipo de transición
    once: true, // Animar sólo una vez
    mirror: false, // Animar elementos en scroll hacia arriba
});
