/* Contact form: sends to Formspree in the background and shows the result
   inline, so visitors never leave hydrodomus.com. Pre-selects the subject
   from ?subject=pilot (used by the Product page). */
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const btn = document.getElementById('contact-submit');
  const select = document.getElementById('subject');

  const wanted = new URLSearchParams(location.search).get('subject');
  if (wanted && select && [...select.options].some(o => o.value === wanted)) select.value = wanted;

  function show(kind, text) {
    status.className = 'form-status ' + kind;
    status.textContent = text;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.className = 'form-status';
    if (!form.checkValidity()) { form.reportValidity(); return; }

    const label = btn.textContent;
    btn.disabled = true;
    btn.textContent = t('ct.sending');
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      form.reset();
      if (select) select.value = 'general';
      show('ok', t('ct.ok.title') + ' ' + t('ct.ok.text'));
    } catch (err) {
      show('err', t('ct.err'));
    } finally {
      btn.disabled = false;
      btn.textContent = label;
    }
  });
})();
