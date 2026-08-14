(() => {
  const media = window.matchMedia('(max-width: 700px)');
  let resizeTimer;

  function resetWord(word) {
    word.style.transform = '';
  }

  function fitWord(word) {
    const line = word.parentElement;
    if (!line) return;

    resetWord(word);

    // Measure after the actual webfont has loaded. The small safety margin
    // prevents one-pixel clipping on Android browsers with rounded scaling.
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
