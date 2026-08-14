(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  function setMenu(open) {
    if (!menuBtn || !mobileMenu) return;
    menuBtn.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    mobileMenu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn?.addEventListener('click', () => setMenu(!mobileMenu.classList.contains('open')));
  menuLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 980) setMenu(false); }, { passive:true });

  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      filters.forEach(btn => btn.classList.toggle('active', btn === button));
      projects.forEach(card => card.classList.toggle('hide', value !== 'all' && card.dataset.category !== value));
    });
  });

  const cfg = window.SITE_CONFIG || {};
  const email = document.querySelector('[data-email]');
  if (email && cfg.email) {
    email.href = `mailto:${cfg.email}`;
    email.firstChild.nodeValue = `${cfg.email} `;
  }
  const socialMap = [
    ['[data-instagram]', cfg.instagram],
    ['[data-behance]', cfg.behance],
    ['[data-linkedin]', cfg.linkedin]
  ];
  socialMap.forEach(([selector, href]) => {
    const el = document.querySelector(selector);
    if (el && href) { el.href = href; el.target = '_blank'; el.rel = 'noopener'; }
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
