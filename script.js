// Limiti sugli input numerici: valori fuori scala tornano nel range invece di rompere la grafica.
(function(){function c(e,full){var i=e.target;if(!i||i.type!=='number'&&i.type!=='range')return;var v=parseFloat(i.value),lo=parseFloat(i.min),hi=parseFloat(i.max);if(isNaN(v)){if(full&&!isNaN(lo))i.value=lo;return}if(!isNaN(hi)&&v>hi)i.value=hi;else if(full&&!isNaN(lo)&&v<lo)i.value=lo}document.addEventListener('input',function(e){c(e,false)},true);document.addEventListener('change',function(e){c(e,true)},true);document.addEventListener('focusout',function(e){var i=e.target;if(i&&i.type==='number'){c(e,true);i.dispatchEvent(new Event('input',{bubbles:true}))}},true)})();
(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  function apri(t, fuoco) {
    tabs.forEach(x => {
      const on = x === t;
      x.setAttribute('aria-selected', on);
      x.tabIndex = on ? 0 : -1;
      document.getElementById(x.getAttribute('aria-controls')).hidden = !on;
    });
    if (fuoco) t.focus();
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => apri(t));
    t.addEventListener('keydown', e => {
      const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (d) { e.preventDefault(); apri(tabs[(i + d + tabs.length) % tabs.length], true); }
    });
  });
})();
