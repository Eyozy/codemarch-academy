document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle--button');
  const closeButton = document.getElementById('close--button');
  const navbar = document.getElementById('navbar--open');
  const body = document.body;

  if (toggleButton && closeButton && navbar) {
    // Open navigation
    toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.classList.add('is-open');
      body.classList.add('menu-open');
    });

    // Close navigation
    closeButton.addEventListener('click', (e) => {
      e.preventDefault();
      navbar.classList.remove('is-open');
      body.classList.remove('menu-open');
    });

    // Close navigation when a link is clicked
    navbar.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navbar.classList.remove('is-open');
        body.classList.remove('menu-open');
      }
    });

    // Optional: Close navigation when clicking outside of it
    document.addEventListener('click', (e) => {
        if (navbar.classList.contains('is-open') && !navbar.contains(e.target) && !toggleButton.contains(e.target)) {
            navbar.classList.remove('is-open');
            body.classList.remove('menu-open');
        }
    });
  }
});
