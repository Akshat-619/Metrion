
  document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));
  });

//bell-rining-animation


document.addEventListener('DOMContentLoaded', () => {
    const bell = document.getElementById('dropdownNotification');

    function ringBell() {
        bell.classList.remove('ring');

        void bell.offsetWidth;

        bell.classList.add('ring');
    }

    ringBell();

    setInterval(ringBell, 3000);
});

