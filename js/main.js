const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const msg = form.querySelector('.form-message');
    if (msg) msg.textContent = 'Dank je. In de echte versie koppelen we dit formulier aan e-mail, CRM of bestelmodule.';
  });
}
