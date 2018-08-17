(function () {

  function checkWidth() {
    var enop = document.getElementById('enop');
    var frop = document.getElementById('frop');
    var cnop = document.getElementById('cnop');
    if (window.innerWidth < 600) {
      enop.innerHTML = 'en';
      frop.innerHTML = 'fr';
      cnop.innerHTML = 'cn';
      cnop.classList.remove('cn');
    } else {
      enop.innerHTML = 'english';
      frop.innerHTML = 'français';
      cnop.innerHTML = '中文';
      cnop.classList.add('cn');
    }
  }

  function setLang(lang) {
    var en = document.getElementById('en');
    var fr = document.getElementById('fr');
    var cn = document.getElementById('cn');
    en.style.opacity = 0;
    fr.style.opacity = 0;
    cn.style.opacity = 0;
    if (lang == 'en') {
      en.style.display = 'flex';
    } else if (lang == 'fr') {
      fr.style.display = 'flex';
    } else if (lang == 'cn') {
      cn.style.display = 'flex';
    }
    setTimeout(() => {
      en.style.display = 'none';
      fr.style.display = 'none';
      cn.style.display = 'none';
      if (lang == 'en') {
        en.style.display = 'flex';
        en.style.opacity = 1;
      } else if (lang == 'fr') {
        fr.style.display = 'flex';
        fr.style.opacity = 1;
      } else if (lang == 'cn') {
        cn.style.display = 'flex';
        cn.style.opacity = 1;
      }
    }, 1200);

  }

  window.onresize = checkWidth;
  window.onload = () => {
    // Set header
    checkWidth();
    // Set click listeners
    document.getElementById('enop').addEventListener('click', () => {
      setLang('en')
    });
    document.getElementById('frop').addEventListener('click', () => {
      setLang('fr')
    });
    document.getElementById('cnop').addEventListener('click', () => {
      setLang('cn')
    });
    // Fade in
    setTimeout(() => {
      document.getElementById("en").style.opacity = 1;
    }, 500);
  }
})();
