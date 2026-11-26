// ==========================================================
// Nguonheng Hout · personal website scripts
//   1. Page navigation (About / Publications / CV / Contact)
//   2. Dark / light mode toggle
//   3. Email menu (Gmail, mail app, copy address)
// ==========================================================

// ---------- 1. Page navigation ----------
// Each page is a <div class="view" data-view="...">. The URL hash
// (#about, #publications, #cv, #contact) decides which one is shown.
(function setupPages() {
  const navLinks = [...document.querySelectorAll('.nav a')];
  const views = [...document.querySelectorAll('.view')];

  function showPage() {
    const hash = location.hash.slice(1);
    let view = views.find((v) => v.dataset.view === hash);
    let target = null;

    // A hash like #news points to a section inside a page: open that page, then scroll to it.
    if (!view && hash) {
      const el = document.getElementById(hash);
      if (el) {
        view = el.closest('.view');
        target = el;
      }
    }
    view = view || views[0]; // default: About

    views.forEach((v) => { v.hidden = v !== view; });
    navLinks.forEach((a) => {
      a.classList.toggle('on', a.getAttribute('href') === '#' + view.dataset.view);
    });

    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', showPage);
  showPage();
})();

// ---------- 2. Dark / light mode ----------
// First visit follows the device setting; after a click the choice is saved.
(function setupTheme() {
  const root = document.documentElement;
  const button = document.getElementById('mode');

  const systemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) { /* storage blocked */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    root.classList.toggle('dark', theme === 'dark');
    button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  applyTheme(saved || root.dataset.theme || systemTheme());

  button.addEventListener('click', () => {
    const next = root.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked */ }
  });
})();

// ---------- 3. Email menu ----------
// Clicking any link with class="mailto" opens a small menu instead of
// going straight to the mail app.
(function setupEmailMenu() {
  const menu = document.getElementById('mailmenu');
  const copyButton = document.getElementById('mm-copy');
  const email = menu.querySelector('.mm-addr').textContent;
  let trigger = null; // the link that opened the menu

  function closeMenu() {
    menu.hidden = true;
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    trigger = null;
  }

  function openMenu(link) {
    menu.hidden = false;
    trigger = link;
    link.setAttribute('aria-expanded', 'true');

    // Position the menu just below the link, kept inside the screen.
    const rect = link.getBoundingClientRect();
    const maxLeft = window.scrollX + document.documentElement.clientWidth - menu.offsetWidth - 12;
    const left = Math.max(12, Math.min(rect.left + window.scrollX, maxLeft));
    menu.style.left = left + 'px';
    menu.style.top = rect.bottom + window.scrollY + 8 + 'px';
    menu.querySelector('a').focus({ preventScroll: true });
  }

  document.querySelectorAll('.mailto').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (trigger === link) closeMenu();
      else { closeMenu(); openMenu(link); }
    });
  });

  // Close when clicking outside, pressing Escape, or choosing an option.
  document.addEventListener('click', (e) => {
    if (!menu.hidden && !menu.contains(e.target)) closeMenu();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      const link = trigger;
      closeMenu();
      if (link) link.focus();
    }
  });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setTimeout(closeMenu, 50)));

  copyButton.addEventListener('click', async () => {
    const label = copyButton.querySelector('span');
    try {
      await navigator.clipboard.writeText(email);
      label.textContent = 'Copied!';
    } catch (err) {
      label.textContent = 'Select: ' + email;
    }
    setTimeout(() => { label.textContent = 'Copy address'; }, 1800);
  });
})();
