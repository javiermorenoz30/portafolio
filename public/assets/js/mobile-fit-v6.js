(() => {
  const media = window.matchMedia('(max-width: 700px)');
  let resizeTimer;

  const polish = document.createElement('style');
  polish.textContent = `
    @media (max-width:700px){
      .hero-kicker{margin-bottom:30px!important}
      .hero-badge{width:58px!important;height:58px!important;right:2px!important;top:-44px!important;font-size:6px!important;transform:rotate(7deg)!important}
      .hero-badge strong{font-size:16.5px!important}
      .hero-title-wrap{padding-top:2px}
      .hero-footer{padding-top:28px!important}
    }
    @media (max-width:390px){
      .hero-badge{width:54px!important;height:54px!important;top:-41px!important;right:0!important}
      .hero-badge strong{font-size:15.5px!important}
    }
  `;
  document.head.appendChild(polish);

  function resetWord(word) {
    word.style.transform = '';
  }

  function fitWord(word) {
    const line = word.parentElement;
    if (!line) return;

    resetWord(word);

    const available = Math.max(0, line.clientWidth - 4);
    const natural = word.scrollWidth;

    if (!available || !natural) return;

    const scale = Math.min(1, available / natural);
    word.style.transformOrigin = 'left center';
    word.style.transform = `scaleX(${scale})`;
  }

  function applyMobileFit() {
    const words = document.querySelectorAll('[data-fit-mobile]');

    if (!media.matches) {
      words.forEach(resetWord);
      return;
    }

    words.forEach(fitWord);
  }

  function scheduleFit() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(applyMobileFit, 80);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      applyMobileFit();
      window.setTimeout(applyMobileFit, 120);
    });
  } else {
    window.addEventListener('load', applyMobileFit, { once: true });
  }

  window.addEventListener('resize', scheduleFit, { passive: true });
  window.addEventListener('orientationchange', scheduleFit, { passive: true });
  media.addEventListener?.('change', applyMobileFit);
})();