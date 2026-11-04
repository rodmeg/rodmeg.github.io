(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        nav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation');
      }
    });
  }

  const perspectiveLinks = [...document.querySelectorAll('.perspective-nav a')];
  const sections = perspectiveLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const byId = new Map(perspectiveLinks.map((link) => [link.hash.slice(1), link]));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const link = byId.get(entry.target.id);
        if (!link) continue;
        perspectiveLinks.forEach((item) => {
          const active = item === link;
          if (active) item.setAttribute('aria-current', 'location');
          else item.removeAttribute('aria-current');
          item.classList.toggle('active', active);
        });
      }
    }, { rootMargin: '-24% 0px -62% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const dialog = document.querySelector('.lightbox');
  const image = dialog?.querySelector('img');
  const caption = dialog?.querySelector('p');
  dialog?.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
  document.querySelectorAll('[data-lightbox]').forEach((trigger) => trigger.addEventListener('click', () => {
    if (!dialog || !image) return;
    image.src = trigger.dataset.lightbox;
    image.alt = trigger.dataset.alt || '';
    if (caption) caption.textContent = trigger.dataset.caption || '';
    dialog.showModal();
  }));
})();
