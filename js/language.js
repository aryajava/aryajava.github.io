// Daftar terjemahan
const translations = {
    en: {
        // Navigasi
        "title": "Muhammad Arya Java",
        "brand": "Muhammad Arya Java",
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "language.id": "ID",
        "language.en": "EN",
        
        // Hero Section
        "hero.title": "Hi, I'm ",
        "hero.name": "Muhammad Arya Java",
        "hero.subtitle": "Job Title/Profession",
        "hero.description": "Full Stack Developer with experience in building scalable web applications using React.js, Node.js, and modern databases. Strong background in software engineering and a passion for learning new technologies.",
        "hero.cta.projects": "View Projects",
        "hero.cta.contact": "Contact Me",
        
        // Projects
        "projects.title": "Featured Projects",
        "projects.subtitle": "Some of my best works",
        "projects.demo": "Demo",
        "projects.code": "Code",

        "projects.project1.title": "Point of Sale System",
        "projects.project1.description": "A web-based point of sale system for managing sales and inventory.",
        "projects.project1.feature1": "User authentication and authorization with Role-Based Access Control",
        "projects.project1.feature6": "Advanced analytics and reporting dashboard",
        "projects.project1.feature2": "Real-time data updates using Socket.io",
        "projects.project1.feature3": "Responsive design with Bootstrap and custom CSS",
        "projects.project1.feature4": "RESTful API for data management",
        "projects.project1.feature5": "Database integration with PostgreSQL",
        "projects.project1.techStackFe1": "Bootstrap",
        "projects.project1.techStackFe2": "EJS (Embedded JavaScript)",
        "projects.project1.techStackFe3": "JQuery",
        "projects.project1.techStackFe4": "DataTables",
        "projects.project1.techStackBe1": "Node.js",
        "projects.project1.techStackBe2": "Express.js",
        "projects.project1.techStackBe4": "PostgreSQL",
        "projects.project1.techStackBe3": "Socket.io",

        "projects.project2.title": "GLRC: GitLab Repo Cloner",
        "projects.project2.description": "Cross-platform desktop app to batch clone, update, and manage GitLab repositories.",
        "projects.project2.feature1": "Batch repository selection and concurrent execution",
        "projects.project2.feature2": "Smart auto-pull for existing local repositories",
        "projects.project2.feature3": "HTTPS or SSH clone mode with retry mechanism",
        "projects.project2.feature4": "Workspace export/import (.json)",
        "projects.project2.feature5": "Bilingual UI (English & Indonesian) with theme options",
        "projects.project2.feature6": "Packaged standalone binaries for Windows, Linux, macOS",
        "projects.project2.techStack1": "Python",
        "projects.project2.techStack2": "CustomTkinter",
        "projects.project2.techStack3": "PyInstaller",
        "projects.project2.techStack4": "GitLab API",
        "projects.project2.techStack5": "GitPython",

        "projects.project3.title": "Todo List",
        "projects.project3.description": "A simple Todo List application for managing tasks.",
        "projects.project3.feature1": "User Management with BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project3.feature2": "Task Management with BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project3.feature3": "Single Page Application (SPA)",
        "projects.project3.techStackFe1": "Bootstrap",
        "projects.project3.techStackFe2": "EJS (Embedded JavaScript)",
        "projects.project3.techStackFe3": "JQuery",
        "projects.project3.techStackFe4": "FontAwesome",
        "projects.project3.techStackBe1": "Node.js",
        "projects.project3.techStackBe2": "Express.js",
        "projects.project3.techStackBe3": "MongoDB",

        "projects.releases": "Releases",
        "projects.viewAll": "View All Projects on GitHub",
        
        // Skills
        "skills.title": "My Skills",
        "skills.subtitle": "Technologies I work with",
        "skills.frontend": "Frontend Development",
        "skills.backend": "Backend Development",
        "skills.fe1": "HTML",
        "skills.fe2": "CSS",
        "skills.fe3": "JavaScript",
        "skills.fe4": "React.js",
        "skills.fe5": "Bootstrap",
        "skills.fe6": "jQuery",
        "skills.be1": "Node.js",
        "skills.be2": "Express.js",
        "skills.be3": "PostgreSQL",
        "skills.be4": "MySQL",
        "skills.be5": "MongoDB",
        "skills.be6": "SQLite",
        "skills.other1": "Git",
        "skills.other2": "Socket.io",
        "skills.other3": "Mocha",
        "skills.other4": "Chai",
        "skills.other5": "Docker",
        "skills.level.expert": "Expert",
        "skills.level.advanced": "Advanced",
        "skills.level.intermediate": "Intermediate",
        "skills.level.basic": "Basic",
        
        // Contact
        "contact.title": "Contact Me",
        "contact.subtitle": "I'm available for freelance work and collaborations",
        "contact.downloadResume": "Download Resume",
        "contact.resumeNote": "Download my Resume in PDF format",
        
        // Footer
        "footer.brand": "Muhammad Arya Java",
        "footer.text": "A showcase of my works and skills.",
        "footer.copyright": "Muhammad Arya Java. All rights reserved."
    },
    id: {
        // Navigasi
        "title": "Muhammad Arya Java",
        "brand": "Muhammad Arya Java",
        "nav.home": "Beranda",
        "nav.projects": "Proyek",
        "nav.skills": "Keahlian",
        "nav.contact": "Kontak",
        "language.id": "ID",
        "language.en": "EN",
        
        // Hero Section
        "hero.title": "Hai, saya",
        "hero.name": "Muhammad Arya Java",
        "hero.subtitle": "Profesi/Jabatan",
        "hero.description": "Full Stack Developer dengan pengalaman dalam membangun aplikasi web yang dapat diskalakan menggunakan React.js, Node.js, dan basis data modern. Memiliki latar belakang yang kuat dalam rekayasa perangkat lunak dan semangat untuk mempelajari teknologi baru.",
        "hero.cta.projects": "Lihat Proyek",
        "hero.cta.contact": "Hubungi Saya",
        
        // Projects
        "projects.title": "Proyek Unggulan",
        "projects.subtitle": "Beberapa karya terbaik saya",
        "projects.demo": "Demo",
        "projects.code": "Kode",
        
        "projects.project1.title": "Point of Sale System",
        "projects.project1.description": "Sistem point of sale berbasis web untuk mengelola penjualan dan inventaris.",
        "projects.project1.feature1": "Autentikasi dan otorisasi pengguna dengan Role-Based Access Control",
        "projects.project1.feature6": "Dasbor analitik dan pelaporan yang canggih",
        "projects.project1.feature2": "Pembaruan data real-time menggunakan Socket.io",
        "projects.project1.feature3": "Desain responsif dengan Bootstrap dan CSS kustom",
        "projects.project1.feature4": "RESTful API untuk manajemen data",
        "projects.project1.feature5": "Integrasi basis data dengan PostgreSQL",
        "projects.project1.techStackFe1": "Bootstrap",
        "projects.project1.techStackFe2": "EJS (Embedded JavaScript)",
        "projects.project1.techStackFe3": "JQuery",
        "projects.project1.techStackFe4": "DataTables",
        "projects.project1.techStackBe1": "Node.js",
        "projects.project1.techStackBe2": "Express.js",
        "projects.project1.techStackBe4": "PostgreSQL",
        "projects.project1.techStackBe3": "Socket.io",

        "projects.project2.title": "GLRC: GitLab Repo Cloner",
        "projects.project2.description": "Aplikasi desktop cross-platform untuk batch clone, update, dan manajemen repositori GitLab.",
        "projects.project2.feature1": "Seleksi repositori batch dan eksekusi bersamaan",
        "projects.project2.feature2": "Auto-pull cerdas untuk repositori lokal yang sudah ada",
        "projects.project2.feature3": "Mode clone HTTPS atau SSH dengan mekanisme retry",
        "projects.project2.feature4": "Ekspor/impor workspace (.json)",
        "projects.project2.feature5": "UI dwibahasa (Inggris & Indonesia) dengan opsi tema",
        "projects.project2.feature6": "Binary standalone untuk Windows, Linux, macOS",
        "projects.project2.techStack1": "Python",
        "projects.project2.techStack2": "CustomTkinter",
        "projects.project2.techStack3": "PyInstaller",
        "projects.project2.techStack4": "GitLab API",
        "projects.project2.techStack5": "GitPython",

        "projects.project3.title": "Todo List",
        "projects.project3.description": "Aplikasi Todo List sederhana untuk mengelola tugas.",

        "projects.releases": "Releases",
        "projects.viewAll": "Lihat Semua Proyek di GitHub",
        
        // Skills
        "skills.title": "Keahlian Saya",
        "skills.subtitle": "Teknologi yang saya kuasai",
        "skills.frontend": "Frontend Development",
        "skills.backend": "Backend Development",
        "skills.fe1": "HTML",
        "skills.fe2": "CSS",
        "skills.fe3": "JavaScript",
        "skills.fe4": "React.js",
        "skills.fe5": "Bootstrap",
        "skills.fe6": "jQuery",
        "skills.be1": "Node.js",
        "skills.be2": "Express.js",
        "skills.be3": "PostgreSQL",
        "skills.be4": "MySQL",
        "skills.be5": "MongoDB",
        "skills.be6": "SQLite",
        "skills.other1": "Git",
        "skills.other2": "Socket.io",
        "skills.other3": "Mocha",
        "skills.other4": "Chai",
        "skills.other5": "Docker",
        "skills.level.expert": "Ahli",
        "skills.level.advanced": "Lanjutan",
        "skills.level.intermediate": "Menengah",
        "skills.level.basic": "Dasar",
        
        // Contact
        "contact.title": "Hubungi Saya",
        "contact.subtitle": "Saya terbuka untuk pekerjaan freelance dan kolaborasi",
        "contact.downloadResume": "Unduh Resume",
        "contact.resumeNote": "Unduh Resume saya dalam format PDF",
        
        // Footer
        "footer.brand": "Muhammad Arya Java",
        "footer.text": "Portofolio karya dan keahlian saya.",
        "footer.copyright": "Muhammad Arya Java. Hak cipta dilindungi undang-undang."
    }
};

// Fungsi untuk mengganti bahasa
function switchLanguage(lang) {
    // Simpan preferensi bahasa
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    
    // Update toggle switch
    document.getElementById('languageSwitch').checked = lang === 'en';
    document.getElementById('languageSwitchMobile').checked = lang === 'en';
    
    // Terapkan terjemahan
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Terapkan placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
}

// Event listener untuk toggle bahasa
document.getElementById('languageSwitch').addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'id';
    switchLanguage(lang);
});

document.getElementById('languageSwitchMobile').addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'id';
    switchLanguage(lang);
});

// Inisialisasi bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'en';
    document.documentElement.lang = savedLang;
    switchLanguage(savedLang);
    
    // Set tahun di footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
