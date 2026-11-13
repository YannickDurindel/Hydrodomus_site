/* =============================================
   HYDRODOMUS — Main JavaScript
   Translations · Navigation · Animations
   ============================================= */

const translations = {
  fr: {
    'nav.home':     "Accueil",
    'nav.product':  "Produit",
    'nav.contact':  "Contact",

    'home.headline': "Décentralisons la production d’hydrogène",
    'home.subline':  "Production d’hydrogène haute pureté et haute pression, partout",
    'chem.s1':    "Eau non traitée",
    'chem.s2':    "Filtration par osmose inverse",
    'chem.s3':    "Électrolyse",
    'chem.s4':    "Rejet de l’O₂",
    'chem.s5':    "Séchage",
    'chem.s6':    "Filtration finale",
    'chem.s7':    "Compression",



    'ft.tagline': "Hydrogène sur site.",
    'ft.nav':     "Navigation",
    'ft.contact': "Contact",
    'ft.copy':    "© 2026 Hydrodomus. Tous droits réservés.",
    'ft.frenchtech': "Membre de",
    "ft.legal": "Mentions légales",
    "lg.title": "Mentions légales",
    "lg.updated": "Mise à jour : 13 novembre 2026",


    /* ── PRODUCT PAGE ── */
    "pr.eyebrow": "TRN-10 Refuel Node",
    "pr.title": "L’hydrogène de vos drones, produit là où ils atterrissent.",
    "pr.sub": "Une station remorquable qui transforme l’eau et l’électricité en hydrogène à 350 bar et ravitaille un drone en quelques minutes.",
    "pr.cta1": "Discuter d’un pilote",
    "pr.cta2": "Voir l’utilisation",
    "pr.stage": "Rendu illustratif. Le design final peut différer.",
    "pr.k1.v": "10 kg",
    "pr.k1.l": "d’H₂ par jour",
    "pr.k2.v": "350 bar",
    "pr.k2.l": "pression de remplissage",
    "pr.k3.v": "< 5 min",
    "pr.k3.l": "par réservoir de drone",
    "pr.k4.v": "Remorquable",
    "pr.k4.l": "remorque à un essieu",
    "pr.k.note": "Objectifs de conception de la configuration v1, extensible jusqu’à 25 kg par jour. Ils n’ont pas encore été mesurés sur une unité construite.",
    "pr.for.title": "Pour les équipes qui volent loin de toute station.",
    "pr.for1.t": "Opérateurs de drones à hydrogène",
    "pr.for1.p": "Flottes longue endurance, à voilure fixe ou VTOL, qui ont besoin de carburant là où elles volent, pas au dépôt.",
    "pr.for2.t": "Ballons et lancements stratosphériques",
    "pr.for2.p": "Le gaz de gonflage produit sur le site de lancement, au lieu de bouteilles livrées par camion.",
    "pr.for3.t": "Sécurité civile et logistique de défense",
    "pr.for3.p": "Du carburant produit sur place avec l’eau et l’énergie locales, sans convoi de ravitaillement.",
    "pr.use.tag": "Utilisation",
    "pr.use.title": "De l’arrivée au drone ravitaillé en quatre étapes.",
    "pr.u1.t": "Stationner et mettre de niveau",
    "pr.u1.p": "Tractez l’unité sur une zone plane, dételez et abaissez le stabilisateur arrière.",
    "pr.u2.t": "Brancher l’eau et l’énergie",
    "pr.u2.p": "Un tuyau d’eau et un câble : groupe électrogène, réseau ou solaire.",
    "pr.u3.t": "Démarrer",
    "pr.u3.p": "Un seul bouton sur le panneau extérieur. L’unité produit l’hydrogène et affiche son état.",
    "pr.u4.t": "Ravitailler le drone",
    "pr.u4.p": "Raccordez le flexible au réservoir. Moins de 5 minutes (objectif), et le drone repart.",
    "pr.use.note": "Fonctionnement prévu de la version pilote. Images illustratives, le design final peut différer.",
    "pr.spec.title": "Sûr et robuste par conception.",
    "pr.spec1.t": "Sécurité",
    "pr.spec1.p": "Arrêt de sécurité automatique et détection d’hydrogène sur toute la chaîne.",
    "pr.spec2.t": "Toute eau, toute énergie",
    "pr.spec2.p": "Eau du réseau, saumâtre ou filtrée, traitée à bord. Groupe électrogène, réseau, véhicule ou solaire.",
    "pr.spec3.t": "Robustesse",
    "pr.spec3.p": "Conçu pour les essais d’environnement MIL-STD-810, pas encore réalisés.",
    "pr.st.title": "Où nous en sommes.",
    "pr.st1.k": "Maintenant",
    "pr.st1.p": "Spécification, CAO, bilan de masse et devis fournisseurs.",
    "pr.st2.k": "Ensuite",
    "pr.st2.p": "Unité pilote et premiers remplissages mesurés avec un opérateur partenaire.",
    "pr.st3.k": "Plus tard",
    "pr.st3.p": "Qualification environnementale et sécurité (MIL-STD-810, équipements sous pression).",
    "pr.cta.title": "Vous exploitez des drones ou des ballons à hydrogène ?",
    "pr.cta.p": "Dites-nous où vous volez et combien d’hydrogène vous consommez par jour. Nous reviendrons avec une proposition de pilote.",
    "pr.cta.btn": "Nous écrire",

    /* ── CONTACT PAGE ── */
    'ct.tag':      "Contact",
    'ct.title':    "Contactez-nous",
    'ct.sub':      "Une question, un partenariat, une candidature : écrivez-nous.",
    'ct.name':     "Nom complet",
    'ct.email':    "E-mail",
    'ct.company':  "Société (facultatif)",
    'ct.subject':  "Objet",
    'ct.msg':      "Message",
    'ct.send':     "Envoyer le message",
    "ct.loc": "Localisation",
    "ct.time": "Délai de réponse",
    'ct.info':     "Informations",
    'ct.response': "Réponse sous 48 h ouvrées",
    'ct.opt.general':  "Question générale",
    'ct.opt.pilot':    "Pilote / évaluation",
    'ct.sending':  "Envoi…",
    'ct.ok.title': "Message envoyé.",
    'ct.ok.text':  "Merci. Nous répondons sous 48 h ouvrées.",
    'ct.err':      "L’envoi a échoué. Écrivez-nous directement à contact@hydrodomus.com.",
    'ct.opt.careers':  "Candidature / Recrutement",
    'ct.opt.partner':  "Partenariat",
    'ct.opt.press':    "Presse / Médias",
    'ct.opt.other':    "Autre",
    'ct.hiring.tag':   "Nous recrutons",
    'ct.hiring.text':  "Hydrodomus agrandit son équipe. Si vous souhaitez nous rejoindre, sélectionnez « Candidature / Recrutement » dans le formulaire et présentez-vous. Nous n’avons pas de liste de postes fixe pour le moment.",
  },

  en: {
    'nav.home':     'Home',
    'nav.product':  'Product',
    'nav.contact':  'Contact',

    'home.headline': 'Decentralize hydrogen production',
    'home.subline':  "Production of high-purity and high-pressure hydrogen anywhere",
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
    "ft.legal": "Legal notice",
    "lg.title": "Legal notice",
    "lg.updated": "Last updated: 13 November 2026",


    /* ── PRODUCT PAGE ── */
    "pr.eyebrow": "TRN-10 Refuel Node",
    "pr.title": "Hydrogen for your drones, made where they land.",
    "pr.sub": "A towable station that turns water and electricity into 350 bar hydrogen and refuels a drone in minutes.",
    "pr.cta1": "Discuss a pilot",
    "pr.cta2": "See how to use it",
    "pr.stage": "Illustrative rendering. The final design may differ.",
    "pr.k1.v": "10 kg",
    "pr.k1.l": "of H₂ per day",
    "pr.k2.v": "350 bar",
    "pr.k2.l": "fill pressure",
    "pr.k3.v": "< 5 min",
    "pr.k3.l": "per drone tank",
    "pr.k4.v": "Towable",
    "pr.k4.l": "single-axle trailer",
    "pr.k.note": "Design targets for the v1 configuration, modular up to 25 kg per day. Not yet measured on a built unit.",
    "pr.for.title": "For teams that fly far from any fuel supply.",
    "pr.for1.t": "Hydrogen drone operators",
    "pr.for1.p": "Long-endurance fixed-wing and VTOL fleets that need fuel where they fly, not at a depot.",
    "pr.for2.t": "Balloon and stratospheric launch",
    "pr.for2.p": "Lift gas made at the launch site instead of cylinders trucked in.",
    "pr.for3.t": "Civil protection and defence logistics",
    "pr.for3.p": "Fuel made on site from local water and power, without a supply convoy.",
    "pr.use.tag": "How to use it",
    "pr.use.title": "From arrival to a fuelled drone in four steps.",
    "pr.u1.t": "Park and level",
    "pr.u1.p": "Tow the unit to a flat spot, unhitch and lower the rear stabiliser.",
    "pr.u2.t": "Connect water and power",
    "pr.u2.p": "One water hose and one cable: generator, grid or solar.",
    "pr.u3.t": "Start",
    "pr.u3.p": "One button on the outside panel. The unit makes hydrogen and shows its status.",
    "pr.u4.t": "Refuel the drone",
    "pr.u4.p": "Connect the hose to the tank. Under 5 minutes (target), and the drone flies again.",
    "pr.use.note": "Intended operation of the pilot version. Images are illustrations, the final design may differ.",
    "pr.spec.title": "Safe and rugged by design.",
    "pr.spec1.t": "Safety",
    "pr.spec1.p": "Automatic fail-safe shutdown and hydrogen detection throughout.",
    "pr.spec2.t": "Any water, any power",
    "pr.spec2.p": "Tap, brackish or field-filtered water, treated on board. Generator, grid, vehicle or solar.",
    "pr.spec3.t": "Ruggedisation",
    "pr.spec3.p": "Designed for MIL-STD-810 environmental testing, not yet performed.",
    "pr.st.title": "Where we are.",
    "pr.st1.k": "Now",
    "pr.st1.p": "Specification, CAD, mass budget and supplier quotes.",
    "pr.st2.k": "Next",
    "pr.st2.p": "Pilot unit and first measured fills with a partner operator.",
    "pr.st3.k": "Later",
    "pr.st3.p": "Environmental and safety qualification (MIL-STD-810, pressure equipment).",
    "pr.cta.title": "Do you operate hydrogen drones or balloons?",
    "pr.cta.p": "Tell us where you fly and how much hydrogen you use per day. We will come back with a pilot proposal.",
    "pr.cta.btn": "Write to us",

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
    "ct.loc": "Location",
    "ct.time": "Response time",
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
