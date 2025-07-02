document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menuMobile = document.getElementById('menu-mobile');
  let menuOuvert = false;
  if (typeof gsap !== 'undefined') {
    gsap.set(menuMobile, { x: '100%', autoAlpha: 0 });
  }
  hamburger.addEventListener('click', function() {
    menuOuvert = !menuOuvert;
    this.setAttribute('aria-expanded', menuOuvert);
    this.classList.toggle('open', menuOuvert);
    if(menuOuvert) {
      menuMobile.classList.add('open');
      if (typeof gsap !== 'undefined') {
        gsap.to(menuMobile, { x: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' });
      }
    } else {
      if (typeof gsap !== 'undefined') {
        gsap.to(menuMobile, { x: '100%', autoAlpha: 0, duration: 0.3, ease: 'power2.in', onComplete: () => menuMobile.classList.remove('open') });
      } else {
        menuMobile.classList.remove('open');
      }
    }
  });
}); 