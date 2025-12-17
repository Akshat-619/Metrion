/* =========================================================
   BOOTSTRAP TOOLTIPS
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el));
});


/* =========================================================
   NOTIFICATION BELL ANIMATION
========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const bell = document.getElementById('dropdownNotification');
  if (!bell) return;

  function ringBell() {
    bell.classList.remove('ring');
    void bell.offsetWidth;
    bell.classList.add('ring');
  }

  ringBell();
  setInterval(ringBell, 3000);
});


document.addEventListener('DOMContentLoaded', () => {

  /* ================= SIDEBAR DROPDOWN ================= */
  document.querySelectorAll('.sidebar-menu li > a').forEach(link => {
    link.addEventListener('click', function (e) {
      const li = this.parentElement;
      const submenu = li.querySelector(':scope > .child-menu');

      if (submenu) {
        e.preventDefault();

        // close siblings
        Array.from(li.parentElement.children).forEach(sibling => {
          if (sibling !== li) {
            sibling.classList.remove('open');
          }
        });

        li.classList.toggle('open');
      }
    });
  });


  /* ================= ACTIVE MAIN MENU ================= */
  const currentPage = window.location.pathname.split('/').pop();

  // clear all active/open states
  document
    .querySelectorAll('.sidebar-menu > li')
    .forEach(li => li.classList.remove('active', 'open'));

  // ONLY Dashboard.html activates HOME
  if (currentPage === 'Dashboard.html') {
    const homeLi = document.querySelector('.sidebar-menu > li:first-child');
    if (homeLi) {
      homeLi.classList.add('active', 'open');
    }
  }

});
