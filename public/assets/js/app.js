(() => {
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const config = window.SITE_CONFIG || {};

  // Loader
  window.addEventListener('load', () => setTimeout(() => $('#loader')?.classList.add('is-done'), 450));

  // Year + contact configuration
  $('#year').textContent = new Date().getFullYear();
  const emailLink = $('#emailLink');
  if (emailLink && config.email) {
    emailLink.href = `mailto:${config.email}`;
    emailLink.childNodes[0].nodeValue = `${config.email} `;
  }
  $$('[data-social]').forEach(a => {
    const key = a.dataset.social;
    if (config[key]) a.href = config[key];
  });

  // Cursor
  const dot = $('.cursor-dot');
  const ring = $('.cursor-ring');
  if (dot && ring && window.matchMedia('(pointer:fine)').matches) {
    let mx=0,my=0,rx=0,ry=0;
    window.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; dot.style.left=`${mx}px`; dot.style.top=`${my}px`; });
    const tick = () => { rx += (mx-rx)*.14; ry += (my-ry)*.14; ring.style.left=`${rx}px`; ring.style.top=`${ry}px`; requestAnimationFrame(tick); };
    tick();
    $$('a, button, .project-card').forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('is-hover'));
    });
  }

  // Magnetic micro-interaction
  if (window.matchMedia('(pointer:fine) and (hover:hover)').matches) $$('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width/2;
      const y = e.clientY - r.top - r.height/2;
      el.style.transform = `translate(${x*.12}px,${y*.12}px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  // Mobile menu
  const toggle = $('#menuToggle'), menu = $('#mobileMenu');
  const closeMenu = () => {
    toggle?.classList.remove('open'); menu?.classList.remove('open'); document.body.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded','false'); menu?.setAttribute('aria-hidden','true');
  };
  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    toggle.classList.toggle('open', open); menu.classList.toggle('open', open); document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-hidden', String(!open));
  });
  $$('#mobileMenu a').forEach(a => a.addEventListener('click', closeMenu));

  // Reveal
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }
  }), { threshold: .12, rootMargin: '0px 0px -5% 0px' });
  $$('.reveal').forEach(el => observer.observe(el));

  // Render projects
  const grid = $('#projectGrid');
  const modal = $('#projectModal');
  function renderProjects() {
    if (!grid) return;
    grid.innerHTML = projects.map((p,i) => `
      <button class="project-card reveal" data-category="${p.category}" data-id="${p.id}" aria-label="Abrir proyecto ${p.title}, ${p.categoryLabel}" style="transition-delay:${(i%4)*45}ms">
        <img src="${p.image}" alt="${p.title} — proyecto de ${p.categoryLabel.toLowerCase()} de Javier Moreno" loading="lazy" decoding="async">
        <div class="project-info">
          <div><h3>${p.title}</h3><p>${p.categoryLabel} · ${p.year}</p></div>
          <div class="project-arrow">↗</div>
        </div>
      </button>`).join('');
    $$('.project-card', grid).forEach(card => {
      observer.observe(card);
      card.addEventListener('click', () => openProject(Number(card.dataset.id)));
    });
  }
  renderProjects();

  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    const filter = btn.dataset.filter;
    $$('.project-card').forEach(card => card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter));
  }));

  function openProject(id) {
    const p = projects.find(x => x.id === id); if (!p || !modal) return;
    $('#modalMedia').innerHTML = `<img src="${p.image}" alt="${p.title}">`;
    $('#modalMeta').textContent = `${p.categoryLabel} / ${p.role} / ${p.year}`;
    $('#modalTitle').textContent = p.title;
    $('#modalDescription').textContent = p.description;
    const link = $('#modalLink'); link.href = p.link || '#'; link.style.display = p.link && p.link !== '#' ? 'inline-flex' : 'none';
    modal.showModal(); document.body.classList.add('modal-open');
  }
  $('#projectClose')?.addEventListener('click', () => modal.close());
  modal?.addEventListener('close', () => document.body.classList.remove('modal-open'));
  modal?.addEventListener('click', e => { if (e.target === modal) modal.close(); });

  // Reel
  const reel = $('#reelModal'), video = $('#showreelVideo');
  $('#openReel')?.addEventListener('click', () => { reel.showModal(); document.body.classList.add('modal-open'); });
  $('#reelClose')?.addEventListener('click', () => reel.close());
  reel?.addEventListener('close', () => { document.body.classList.remove('modal-open'); video?.pause(); });
  reel?.addEventListener('click', e => { if (e.target === reel) reel.close(); });
  if (video) {
    const source = video.querySelector('source');
    fetch(source.src, {method:'HEAD'}).then(r => { if(r.ok) video.style.display='block'; }).catch(()=>{});
  }

  // Escape
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeMenu(); });
})();
