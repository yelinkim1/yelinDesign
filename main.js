/* ── ACCORDION ──────────────────────────────── */
document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    const isOpen = item.classList.contains('open');

    // close all
    document.querySelectorAll('.accordion-item.open').forEach(el => el.classList.remove('open'));

    // open clicked (if was closed)
    if (!isOpen) item.classList.add('open');
  });
});

/* ── HEADER SCROLL SHADOW ─────────────────── */
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 8
    ? '0 2px 20px rgba(0,0,0,.06)'
    : 'none';
}, { passive: true });

/* ── SMOOTH ANCHOR ───────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
