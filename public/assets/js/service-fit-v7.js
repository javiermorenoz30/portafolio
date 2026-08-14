(() => {
  const mq = window.matchMedia('(max-width:700px)');
  let timer;

  function reset(el){
    el.style.transform='';
  }

  function fit(el){
    const line=el.parentElement;
    if(!line) return;
    reset(el);
    const available=Math.max(0,line.clientWidth-4);
    const natural=el.scrollWidth;
    if(!available||!natural) return;
    const scale=Math.min(1,available/natural);
    el.style.transformOrigin='left center';
    el.style.transform=`scaleX(${scale})`;
  }

  function apply(){
    const words=document.querySelectorAll('[data-fit-service]');
    if(!mq.matches){ words.forEach(reset); return; }
    words.forEach(fit);
  }

  function schedule(){
    clearTimeout(timer);
    timer=setTimeout(apply,80);
  }

  if(document.fonts&&document.fonts.ready){
    document.fonts.ready.then(()=>{
      apply();
      setTimeout(apply,120);
    });
  }else{
    window.addEventListener('load',apply,{once:true});
  }

  window.addEventListener('resize',schedule,{passive:true});
  window.addEventListener('orientationchange',schedule,{passive:true});
  mq.addEventListener?.('change',apply);
})();
