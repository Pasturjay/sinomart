const SELLER_EMAIL = 'fecundintegrated@gmail.com';
const form = document.querySelector('#form');
const status = document.querySelector('#status');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  if (data.get('website')) return;
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const message = String(data.get('message') || '').trim();
  if (!name || !email || !message) { status.textContent = 'Please complete all required fields.'; return; }
  const subject = encodeURIComponent('Acquisition inquiry for sinomart.ng');
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:${SELLER_EMAIL}?subject=${subject}&body=${body}`;
  status.textContent = 'Thank you. Your inquiry has been received. The domain holder will respond using the contact information provided.';
  form.reset();
});
