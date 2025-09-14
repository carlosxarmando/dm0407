// Menú hamburguesa
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Abrir/cerrar menú al hacer click en hamburguesa
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Calcular altura del menú dinámicamente y aplicar scroll-margin-top a todas las secciones
const menuHeight = document.querySelector('nav').offsetHeight;
document.querySelectorAll('section').forEach(sec => {
  sec.style.scrollMarginTop = menuHeight + 'px';
});

// Scroll suave y cierre de menú al presionar un link
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

    // Scroll suave exacto considerando altura del menú
    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - menuHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});

// Cerrar menú hamburguesa al hacer clic fuera
document.addEventListener('click', (e) => {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !mobileMenu.contains(e.target)
  ) {
    navLinks.classList.remove('active');
  }
});
