// ===== Theme toggle =====
(function () {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  function syncIcons() {
    const dark = root.getAttribute('data-theme') === 'dark';
    document.querySelectorAll('.theme-toggle i').forEach(i => {
      i.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    });
  }
  syncIcons();

  function toggle() {
    const dark = root.getAttribute('data-theme') === 'dark';
    const next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncIcons();
  }
  document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(b => b.addEventListener('click', toggle));
})();

// ===== Mobile nav =====
(function () {
  const btn = document.getElementById('mobile-menu-btn');
  const nav = document.getElementById('mobile-nav');
  if (!btn) return;
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
})();

// ===== Experience tabs =====
(function () {
  const tabs = document.querySelectorAll('.exp-tab');
  const panels = document.querySelectorAll('.exp-panel');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const i = tab.dataset.tab;
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`.exp-panel[data-panel="${i}"]`).classList.add('active');
  }));
})();

// ===== Scroll reveal =====
(function () {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// ===== Load more projects =====
(function () {
  const btn = document.getElementById('load-more');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.querySelectorAll('.hidden-project').forEach(el => {
      el.classList.remove('hidden-project');
      // ensure the newly shown items animate in
      requestAnimationFrame(() => el.classList.add('visible'));
    });
    btn.parentElement.classList.add('done');
  });
})();

// ===== Scroll-spy for sidebar =====
(function () {
  const sections = document.querySelectorAll('main section[id]');
  const links = document.querySelectorAll('.side-nav .nav-link');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.getAttribute('id');
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => io.observe(s));
})();
