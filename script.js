const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-button]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const menuLabel = menuButton.querySelector('.sr-only');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuLabel.textContent = isOpen ? 'Close navigation' : 'Open navigation';
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

const enquiryText = (data, context) => [
  'Hello Sahastitwa Solutions,',
  '',
  `*${context}*`,
  '',
  `*Name:* ${data.get('name')}`,
  `*Company:* ${data.get('company')}`,
  `*Role:* ${data.get('role')}`,
  `*Contact No:* ${data.get('phone')}`,
  `*Email:* ${data.get('email')}`,
  `*Preferred contact:* ${data.get('contact_mode')}`,
  '',
  '*Project / Problem:*',
  data.get('project_description'),
].join('\n');

const openWhatsApp = (data, context) => {
  const text = encodeURIComponent(enquiryText(data, context));
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener');
};

const setStatus = (form, message) => {
  const status = form.querySelector('[data-form-status]');
  status.hidden = false;
  status.textContent = message;
};

document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    if (data.get('bot-field')) return;

    const submitButton = form.querySelector('[type="submit"]');
    const context = form.dataset.contactForm || 'Website enquiry';
    const contactMode = data.get('contact_mode');
    submitButton.disabled = true;
    const body = new URLSearchParams(data);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Form endpoint rejected the enquiry');
      setStatus(form, 'Enquiry received. We will use the contact method you selected.');
      form.reset();
      if (contactMode === 'WhatsApp') openWhatsApp(data, context);
    } catch (error) {
      setStatus(form, 'We could not store the enquiry from this preview. Use Open in WhatsApp to send it directly, or try again after the site is published.');
    } finally {
      submitButton.disabled = false;
    }
  });

  form.querySelector('[data-whatsapp]').addEventListener('click', () => {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    openWhatsApp(new FormData(form), form.dataset.contactForm || 'Website enquiry');
  });
});
