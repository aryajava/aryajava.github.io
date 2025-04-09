// Mobile Menu Toggle
document.getElementById('mobileMenuButton').addEventListener('click', function() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
});

// Smooth scrolling untuk semua navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Tutup mobile menu jika terbuka
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
        
        // Smooth scroll ke target
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Sesuaikan dengan tinggi header
                behavior: 'smooth'
            });
        }
    });
});

// Sinkronisasi toggle bahasa mobile dengan desktop
document.getElementById('languageToggleMobile').addEventListener('change', function() {
    document.getElementById('languageToggle').checked = this.checked;
    const newLang = this.checked ? 'en' : 'id';
    switchLanguage(newLang);
});

document.getElementById('languageToggle').addEventListener('change', function() {
    document.getElementById('languageToggleMobile').checked = this.checked;
    const newLang = this.checked ? 'en' : 'id';
    switchLanguage(newLang);
});