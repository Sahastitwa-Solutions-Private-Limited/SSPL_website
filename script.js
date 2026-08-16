const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
document.querySelector('[data-year]').textContent = new Date().getFullYear();

const WHATSAPP_NUMBER = '919944865583';

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const context = form.dataset.contactForm || 'Website enquiry';
    const message = [
      'Hello Sahastitwa Solutions,',
      '',
      `*${context}*`,
      '',
      `*Contact No:* ${data.get('phone')}`,
      `*Email:* ${data.get('email')}`,
      `*Preferred contact:* ${data.get('contact_mode')}`,
      '',
      '*Project / Problem:*',
      data.get('project_description'),
      '',
      '*Message:*',
      data.get('message'),
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});
