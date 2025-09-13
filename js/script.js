// ===========================
// Variables principales
// ===========================
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');
const menu = document.querySelector('nav');

// ===========================
// Función para abrir/cerrar menú
// ===========================
function toggleMenu() {
  navLinks.classList.toggle('active');
}

// ===========================
// Scroll suave a secciones
// ===========================
function scrollToSection(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);

  // Cerrar menú en móvil
  if (navLinks.classList.contains('active')) {
    navLinks.classList.remove('active');
  }

  const menuHeight = menu.offsetHeight;
  const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - menuHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// ===========================
// Cerrar menú al hacer clic fuera (solo móvil)
// ===========================
function closeMenuOnOutsideClick(e) {
  if (
    navLinks.classList.contains('active') &&
    !navLinks.contains(e.target) &&
    !mobileMenu.contains(e.target) &&
    window.innerWidth <= 768 // solo en móvil
  ) {
    navLinks.classList.remove('active');
  }
}

// ===========================
// Inicialización
// ===========================
function init() {
  // Abrir/cerrar menú al hacer click en hamburguesa
  mobileMenu.addEventListener('click', toggleMenu);

  // Scroll suave al presionar un link
  navItems.forEach(item => item.addEventListener('click', scrollToSection));

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', closeMenuOnOutsideClick);

  // Ajustar scroll-margin-top dinámicamente para todas las secciones
  const menuHeight = menu.offsetHeight;
  document.querySelectorAll('section').forEach(sec => {
    sec.style.scrollMarginTop = menuHeight + 'px';
  });
}

// Ejecutar inicialización
init();
