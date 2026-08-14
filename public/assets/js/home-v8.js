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

  const filters = document.querySelectorAll('[data-filter]');
  const projects = document.querySelectorAll('[data-category]');
  filters.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.filter;
      filters.forEach(btn => btn.classList.toggle('active', btn === button));
      projects.forEach(card => card.classList.toggle('hide', value !== 'all' && card.dataset.category !== value));
    });
  });

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
