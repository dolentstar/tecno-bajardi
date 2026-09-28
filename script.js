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
