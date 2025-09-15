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

// FADE IN DE SECCIONES AL HACER SCROLL
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});
// FIN FADE IN DE SECCIONES AL HACER SCROLL

// LIGHTBOX PARA GALERÍA DE IMÁGENES
document.addEventListener('DOMContentLoaded', function() {
  const galleryLinks = document.querySelectorAll('[data-lightbox="gallery"]');
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  galleryLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const img = document.createElement('img');
      img.src = this.href;
      img.classList.add('lightbox-content');

      const closeBtn = document.createElement('span');
      closeBtn.classList.add('lightbox-close');
      closeBtn.innerHTML = '&times;';

      lightbox.innerHTML = '';
      lightbox.appendChild(img);
      lightbox.appendChild(closeBtn);
      lightbox.style.display = 'block';

      closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
      });

      lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
          lightbox.style.display = 'none';
        }
      });
    });
  });
});
// FIN LIGHTBOX PARA GALERÍA DE IMÁGENES

// ---- INICIO IMAGE COMPARISON SLIDER ----
document.querySelectorAll('.comparison-slider').forEach(slider => {
  const range = slider.querySelector('.slider');
  const afterImg = slider.querySelector('.after-img');

  range.addEventListener('input', () => {
    afterImg.style.width = range.value + '%';
  });
});
// ---- FIN IMAGE COMPARISON SLIDER ----
