function initNavbar() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const darkmodeToggles = document.querySelectorAll('.darkmode-toggle');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  if (darkmodeToggles.length > 0) {
    function setDarkmode(state) {
      if (state) {
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'true');
      } else {
        document.body.classList.remove('darkmode');
        localStorage.setItem('darkmode', 'false');
      }
    }

    darkmodeToggles.forEach(button => {
      button.addEventListener('click', () => {
        const isDark = document.body.classList.contains('darkmode');
        setDarkmode(!isDark);
      });
    });

    const savedMode = localStorage.getItem('darkmode');
    if (savedMode === 'true') {
      document.body.classList.add('darkmode');
    }
  }
}

// Direkt beim Laden des Skripts ausführen
initNavbar();


// AOS Scroll Animation aktivieren
AOS.init();