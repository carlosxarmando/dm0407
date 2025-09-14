// Menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Abrir/cerrar menú al hacer click en hamburguesa
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Calcular altura del menú dinámicamente
const menuHeight = document.querySelector('nav').offsetHeight;

// Scroll suave + cierre de menú
const navItems = document.querySelectorAll('#nav-links a');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const targetId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Cerrar menú en móvil
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }

    // Ajustar posición con altura del menú
    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - menuHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Cerrar menú si se hace clic fuera
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    navLinks.classList.remove('active');
  }
});
