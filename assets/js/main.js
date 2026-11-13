/* =============================================
   HYDRODOMUS — Main JavaScript
   Translations · Navigation · Animations
   ============================================= */

const translations = {
  fr: {
    'nav.home':     'Accueil',
    'nav.product':  'Produit',
    'nav.contact':  'Contact',

    'home.headline': "Décentralisons la production d'hydrogène",
    'home.subline':  "Conçu pour le terrain, avec pour cible la norme MIL-STD-810",

    'chem.s1':    'Eau non traitée',
    'chem.s2':    'Filtration par osmose inverse',
    'chem.s3':    'Électrolyse',
    'chem.s4':    "Rejet de l'O₂",
    'chem.s5':    'Séchage',
    'chem.s6':    'Filtration finale',
    'chem.s7':    'Compression',

    'ft.tagline': "Hydrogène sur site.",
    'ft.nav':     'Navigation',
    'ft.contact': 'Contact',
    'ft.copy':    '© 2026 Hydrodomus. Tous droits réservés.',
    'ft.frenchtech': 'Membre de',


    /* ── PRODUCT PAGE ── */
    'pr.tag':      'Produit',
    'pr.title':    'TRN-10 Refuel Node',
    'pr.sub':      "De l'eau et de l'électricité en entrée, de l'hydrogène à 350 bar en sortie. Une station de ravitaillement remorquable pour drones à hydrogène.",
    'pr.cta1':     'Discuter d’un pilote',
    'pr.cta2':     "Voir l'utilisation",
    'pr.use.tag':   'Utilisation',
    'pr.use.title': "De l'arrivée au drone ravitaillé en quatre étapes.",
    'pr.u1.t': 'Poser et mettre à niveau',
    'pr.u1.p': "Tractez l'unité sur une zone plane, dételez et abaissez le stabilisateur arrière.",
    'pr.u2.t': "Brancher l'eau et l'énergie",
    'pr.u2.p': "Un tuyau d'eau et un câble : groupe électrogène, réseau ou solaire. Eau du réseau, saumâtre ou filtrée, traitée à bord.",
    'pr.u3.t': 'Démarrer',
    'pr.u3.p': "Un seul bouton sur le panneau extérieur. L'unité se met à produire et affiche son état.",
    'pr.u4.t': 'Ravitailler le drone',
    'pr.u4.p': "Raccordez le flexible au réservoir du drone. Remplissage en moins de 5 minutes (objectif), puis le drone est prêt à voler.",
    'pr.use.note': "Fonctionnement prévu de la version pilote. Images illustratives, le design final peut différer.",
    'pr.stage':    "Rendu illustratif. Le design final peut différer.",
    'pr.fig.tag':   'Chiffres clés',
    'pr.fig.title': 'Configuration v1',
    'pr.fig1.v': '10 kg', 'pr.fig1.l': "d'H₂ par jour",
    'pr.fig2.v': '350 bar', 'pr.fig2.l': 'pression de remplissage',
    'pr.fig3.v': '25 kg', 'pr.fig3.l': "par jour avec des modules supplémentaires",
    'pr.fig4.v': '< 5 min', 'pr.fig4.l': 'par réservoir de drone (objectif)',
    'pr.fig.note': "Valeurs de conception de la configuration v1. Elles n'ont pas encore été mesurées sur une unité construite.",
    'pr.field.tag':   'Conçu pour le terrain',
    'pr.field.title': 'Un seul équipement à tracter, à brancher, à remplir.',
    'pr.f1.t': 'Remorquable', 'pr.f1.p': "Monté sur remorque pour changer de site, pas seulement pour être posé une fois.",
    'pr.f2.t': "N'importe quelle eau", 'pr.f2.p': "Le traitement est à bord. Pas de livraison d'eau traitée.",
    'pr.f3.t': "N'importe quelle source d'énergie", 'pr.f3.p': "Fonctionne sur groupe électrogène, réseau, véhicule ou solaire.",
    'pr.f4.t': 'Sécurité par conception', 'pr.f4.p': "Arrêt de sécurité automatique et détection d'hydrogène sur toute la chaîne.",
    'pr.f5.t': 'Durcissement militaire visé', 'pr.f5.p': "Les essais d'environnement MIL-STD-810 sont visés, pas encore réalisés.",
    'pr.st.tag':   'Où nous en sommes',
    'pr.st.title': 'Du dossier de conception au premier ravitaillement mesuré.',
    'pr.st1.k': 'Maintenant', 'pr.st1.p': 'Spécification, CAO, bilan de masse et devis fournisseurs.',
    'pr.st2.k': 'Ensuite',   'pr.st2.p': 'Unité pilote et premiers remplissages mesurés avec un opérateur partenaire.',
    'pr.st3.k': 'Plus tard', 'pr.st3.p': "Qualification environnementale et sécurité (MIL-STD-810, certification des équipements sous pression).",
    'pr.cta.title': "Vous exploitez des drones ou des ballons à hydrogène ?",
    'pr.cta.p':     "Dites-nous où vous volez et combien d'hydrogène vous consommez par jour. Nous reviendrons avec une proposition de pilote.",
    'pr.cta.btn':   'Nous écrire',

    /* ── CONTACT PAGE ── */
    'ct.tag':      'Contact',
    'ct.title':    'Contactez-nous',
    'ct.sub':      "Une question, un partenariat, une candidature : écrivez-nous.",
    'ct.name':     'Nom complet',
    'ct.email':    'Email',
    'ct.company':  'Société (optionnel)',
    'ct.subject':  'Objet',
    'ct.msg':      'Message',
    'ct.send':     'Envoyer le message',
    'ct.info':     'Informations',
    'ct.response': 'Réponse sous 48h ouvrées',
    'ct.opt.general':  'Question générale',
    'ct.opt.pilot':    'Pilote / évaluation',
    'ct.sending':  'Envoi…',
    'ct.ok.title': 'Message envoyé.',
    'ct.ok.text':  'Merci. Nous répondons sous 48 h ouvrées.',
    'ct.err':      "L'envoi a échoué. Écrivez-nous directement à contact@hydrodomus.com.",
    'ct.opt.careers':  'Candidature / Recrutement',
    'ct.opt.partner':  'Partenariat',
    'ct.opt.press':    'Presse / Médias',
    'ct.opt.other':    'Autre',
    'ct.hiring.tag':   'Nous recrutons',
    'ct.hiring.text':  "Hydrodomus agrandit son équipe. Si vous souhaitez nous rejoindre, sélectionnez « Candidature / Recrutement » dans le formulaire et présentez-vous. Nous n'avons pas de liste de postes fixe pour le moment.",
  },

  en: {
    'nav.home':     'Home',
    'nav.product':  'Product',
    'nav.contact':  'Contact',

    'home.headline': 'Decentralize hydrogen production',
    'home.subline':  "Built for the field, targeting MIL-STD-810",

    'chem.s1':    'Untreated water',
    'chem.s2':    'Reverse osmosis filtration',
    'chem.s3':    'Electrolysis',
    'chem.s4':    'O₂ released',
    'chem.s5':    'Drying',
    'chem.s6':    'Final filtration',
    'chem.s7':    'Compression',

    'ft.tagline': 'On-site hydrogen.',
    'ft.nav':     'Navigation',
    'ft.contact': 'Contact',
    'ft.copy':    '© 2026 Hydrodomus. All rights reserved.',
    'ft.frenchtech': 'Member of',


    /* ── PRODUCT PAGE ── */
    'pr.tag':      'Product',
    'pr.title':    'TRN-10 Refuel Node',
    'pr.sub':      'Water and power in, 350 bar hydrogen out. A towable refuelling station for hydrogen drones.',
    'pr.cta1':     'Discuss a pilot',
    'pr.cta2':     'See how to use it',
    'pr.use.tag':   'How to use it',
    'pr.use.title': 'From arrival to a fuelled drone in four steps.',
    'pr.u1.t': 'Park and level',
    'pr.u1.p': 'Tow the unit to a flat spot, unhitch and lower the rear stabiliser.',
    'pr.u2.t': 'Connect water and power',
    'pr.u2.p': 'One water hose and one cable: generator, grid or solar. Tap, brackish or field-filtered water, treated on board.',
    'pr.u3.t': 'Start',
    'pr.u3.p': 'One button on the outside control panel. The unit starts making hydrogen and shows its status.',
    'pr.u4.t': 'Refuel the drone',
    'pr.u4.p': 'Connect the hose to the drone tank. Filling takes under 5 minutes (target), then the drone is ready to fly.',
    'pr.use.note': 'Intended operation of the pilot version. Images are illustrations, the final design may differ.',
    'pr.stage':    "Illustrative rendering. The final design may differ.",
    'pr.fig.tag':   'Key figures',
    'pr.fig.title': 'v1 configuration',
    'pr.fig1.v': '10 kg', 'pr.fig1.l': "of H₂ per day",
    'pr.fig2.v': '350 bar', 'pr.fig2.l': 'fill pressure',
    'pr.fig3.v': '25 kg', 'pr.fig3.l': 'per day with additional modules',
    'pr.fig4.v': '< 5 min', 'pr.fig4.l': 'per drone tank (target)',
    'pr.fig.note': 'Design values for the v1 configuration. They have not yet been measured on a built unit.',
    'pr.field.tag':   'Built for the field',
    'pr.field.title': 'One unit to tow, plug in and fill.',
    'pr.f1.t': 'Towable', 'pr.f1.p': 'Trailer-mounted to move between sites, not just to be set down once.',
    'pr.f2.t': 'Any water', 'pr.f2.p': "Treatment is on board. No deliveries of treated water.",
    'pr.f3.t': 'Any power source', 'pr.f3.p': "Runs from a generator, the grid, a vehicle or solar.",
    'pr.f4.t': 'Safety by design', 'pr.f4.p': "Automatic fail-safe shutdown and hydrogen detection throughout.",
    'pr.f5.t': 'Military ruggedisation targeted', 'pr.f5.p': 'MIL-STD-810 environmental testing is targeted, not yet performed.',
    'pr.st.tag':   'Where we are',
    'pr.st.title': 'From design file to first measured refuelling.',
    'pr.st1.k': 'Now',   'pr.st1.p': 'Specification, CAD, mass budget and supplier quotes.',
    'pr.st2.k': 'Next',  'pr.st2.p': 'Pilot unit and first measured fills with a partner operator.',
    'pr.st3.k': 'Later', 'pr.st3.p': 'Environmental and safety qualification (MIL-STD-810, pressure-equipment certification).',
    'pr.cta.title': 'Do you operate hydrogen drones or balloons?',
    'pr.cta.p':     'Tell us where you fly and how much hydrogen you use per day. We will come back with a pilot proposal.',
    'pr.cta.btn':   'Write to us',

    /* ── CONTACT PAGE ── */
    'ct.tag':      'Contact',
    'ct.title':    'Get in touch',
    'ct.sub':      'A question, a partnership, an application: write to us.',
    'ct.name':     'Full name',
    'ct.email':    'Email',
    'ct.company':  'Company (optional)',
    'ct.subject':  'Subject',
    'ct.msg':      'Message',
    'ct.send':     'Send message',
    'ct.info':     'Information',
    'ct.response': 'Response within 48 business hours',
    'ct.opt.general':  'General question',
    'ct.opt.pilot':    'Pilot / evaluation',
    'ct.sending':  'Sending…',
    'ct.ok.title': 'Message sent.',
    'ct.ok.text':  'Thank you. We reply within 48 business hours.',
    'ct.err':      'Sending failed. Please write to us directly at contact@hydrodomus.com.',
    'ct.opt.careers':  'Application / Careers',
    'ct.opt.partner':  'Partnership',
    'ct.opt.press':    'Press / Media',
    'ct.opt.other':    'Other',
    'ct.hiring.tag':   "We're hiring",
    'ct.hiring.text':  'Hydrodomus is growing its team. If you would like to join us, select "Application / Careers" in the form and introduce yourself. We do not have a fixed list of open roles right now.',
  }
};

/* =========================================
   LANGUAGE SYSTEM
   ========================================= */
let lang = localStorage.getItem('hd_lang') || 'en';

function t(key) {
  return (translations[lang] && translations[lang][key]) ||
         (translations.en[key]) || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLang(l) {
  lang = l;
  localStorage.setItem('hd_lang', l);
  applyTranslations();
}

/* =========================================
   NAVIGATION
   ========================================= */
function initNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileMenu) {
    mobileClose.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  const norm = s => s.replace(/\.html$/, '').replace(/^(\.\/|index)$/, '');
  const page = norm(location.pathname.split('/').pop());
  document.querySelectorAll('.nav-page-link').forEach(a => {
    if (norm(a.getAttribute('href')) === page) a.classList.add('active');
  });
}

/* =========================================
   SCROLL REVEAL
   ========================================= */
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-l, .reveal-r');

  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObs.observe(el));
}

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNav();
  initScrollReveal();

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
