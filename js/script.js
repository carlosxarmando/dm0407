/* ------------------ MENÚ HAMBURGUESA ------------------ */
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', e => {
  if (navLinks.classList.contains('active') &&
      !navLinks.contains(e.target) &&
      !mobileMenu.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

/* ------------------ SCROLL SUAVE ------------------ */
const menuHeight = document.querySelector('nav').offsetHeight;
const scrollLinks = document.querySelectorAll('#nav-links a, .nav-logo');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    let targetId = link.getAttribute('href');
    if(targetId.startsWith('#')) targetId = targetId.substring(1);
    const targetSection = document.getElementById(targetId);
    if(!targetSection) return;

    // Cerrar menú en móvil
    if (navLinks.classList.contains('active')) navLinks.classList.remove('active');

    const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - menuHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  });
});

// Aplicar scroll-margin-top a todas las secciones (considera altura del nav)
document.querySelectorAll('section').forEach(sec => {
  sec.style.scrollMarginTop = menuHeight + 'px';
});

/* ------------------ FADE IN DE SECCIONES ------------------ */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

/* ------------------ IMAGE COMPARISON SLIDER ------------------ */
document.querySelectorAll('.comparison-slider').forEach(slider => {
  const range = slider.querySelector('.slider');
  const afterImg = slider.querySelector('.after-img');

  range.addEventListener('input', () => {
    afterImg.style.width = range.value + '%';
  });
});

/* ------------------ slider galeria ------------------ */
// Inicializar Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* ------------------ FIN DEL SCRIPT ------------------ */