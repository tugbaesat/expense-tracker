document.addEventListener('DOMContentLoaded', function() {
    let menuButton = document.getElementById('menu-button');
    let dropdownMenu = document.querySelector('.absolute');

    menuButton.addEventListener('click', function() {
      let isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', !isExpanded);
      dropdownMenu.style.display = isExpanded ? 'none' : 'block';
    });

    // Close the dropdown menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        menuButton.setAttribute('aria-expanded', 'false');
        dropdownMenu.style.display = 'none';
      }
    });
  });