// Daftar terjemahan
const translations = {
    en: {
        // Navigasi
        "title": "Muhammad Arya Java",
        "brand": "Muhammad Arya Java",
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "language.id": "ID",
        "language.en": "EN",
        
        // Hero Section
        "hero.title": "Hi, I'm ",
        "hero.name": "Muhammad Arya Java",
        "hero.subtitle": "Backend Engineer",
        "hero.description": "Building scalable distributed systems & microservices architecture.",
        "hero.cta.about": "About Me",
        "hero.cta.projects": "View Projects",
        "hero.cta.contact": "Contact Me",

        // About Section
        "about.title": "About Me",
        "about.subtitle": "Get to know me better",
        "about.description": "Bachelor of Informatics Engineering graduate from Universitas Budi Luhur with a strong focus on Back-End Development and Distributed Systems. Experienced in building scalable microservices with hands-on experience implementing the Saga Pattern for complex transactions and ensuring code excellence through SonarQube static analysis.",
        "about.education": "Education",
        "about.current": "Currently",
        "about.location": "Location",
        "about.locationValue": "Jakarta, Indonesia",
        "about.cta.experience": "See Experience",

        // Experience
        "experience.title": "Work Experience",
        "experience.subtitle": "My professional career journey",
        "experience.exp1.role1.title": "Back End Developer",
        "experience.exp1.role1.type": "Full-time",
        "experience.exp1.role1.location": "Surabaya, East Java, Indonesia · Remote",
        "experience.exp1.role1.project": "Supply Chain Management (SCM)",
        "experience.exp1.role1.summary": "Building and managing distributed backend architecture that separates the data persistence layer from the business orchestration layer.",
        "experience.exp1.role1.achievement1": "Business Logic Orchestration: Designed a business federation layer to manage complex workflows, domain rules, and centralized data transformation.",
        "experience.exp1.role1.achievement2": "Distributed Transactions: Implemented the Saga Pattern to ensure eventual consistency and atomicity in business transactions involving multiple microservices.",
        "experience.exp1.role1.achievement3": "Data Persistence Management: Managed an authoritative gateway to standardize the entire data lifecycle (CRUD) ensuring high performance and storage integrity.",
        "experience.exp1.role1.achievement4": "Code Governance: Integrated SonarQube into the development pipeline for static code analysis, ensuring application security and maintaining clean code standards.",
        "experience.exp1.role2.title": "Back End Developer",
        "experience.exp1.role2.type": "Contract",
        "experience.exp1.role2.location": "North Jakarta, Jakarta, Indonesia · On-site",
        "experience.exp1.role2.project": "Dealer Management System (DMS)",
        "experience.exp1.role2.summary": "Played a role in system maintenance and technical support to ensure data accuracy and application stability.",
        "experience.exp1.role2.achievement1": "Query Optimization: Analyzed and troubleshot complex Stored Procedures (SP) to fix logic errors and improve data retrieval efficiency.",
        "experience.exp1.role2.achievement2": "Technical Support & Bug Fixing: Collaborated with QA/Tester teams to identify root causes of data inconsistency reports and performed fixes on the backend code.",
        "experience.exp2.title": "IT & Research and Development Intern",
        "experience.exp2.type": "Internship",
        "experience.exp2.summary": "Assisted the R&D team in developing CCTV Analytics using Python, PyTorch, YOLO, CNN models, OpenCV, FastAPI, and PostgreSQL.",
        "experience.exp2.projectsLabel": "Projects involved:",
        "experience.exp2.project1": "LPR (License Plate Recognition) Project",
        "experience.exp2.project2": "Fire and Smoke Detection Project",
        "experience.exp2.project3": "Crowd Detection Project",
        "experience.exp2.project4": "CCTV Web Report (Log)",
        "experience.viewDetails": "View Details",
        "experience.labels.position": "Position:",
        "experience.labels.type": "Type:",
        "experience.labels.project": "Project:",
        "experience.labels.location": "Location:",

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

        "projects.project2.title": "Todo List",
        "projects.project2.description": "A simple Todo List application for managing tasks.",
        "projects.project2.feature1": "User Management with BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project2.feature2": "Task Management with BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project2.feature3": "Single Page Application (SPA)",
        "projects.project2.techStackFe1": "Bootstrap",
        "projects.project2.techStackFe2": "EJS (Embedded JavaScript)",
        "projects.project2.techStackFe3": "JQuery",
        "projects.project2.techStackFe4": "DataTables",
        "projects.project2.techStackBe1": "Node.js",
        "projects.project2.techStackBe2": "Express.js",
        "projects.project2.techStackBe3": "MongoDB",

        "projects.project3.title": "GLRC: GitLab Repo Cloner",
        "projects.project3.description": "Cross-platform desktop app to batch clone, update, and manage GitLab repositories.",
        "projects.project3.feature1": "Batch repository selection and concurrent execution",
        "projects.project3.feature2": "Smart auto-pull for existing local repositories",
        "projects.project3.feature3": "HTTPS or SSH clone mode with retry mechanism",
        "projects.project3.feature4": "Workspace export/import (.json)",
        "projects.project3.feature5": "Bilingual UI (English & Indonesian) with theme options",
        "projects.project3.feature6": "Packaged standalone binaries for Windows, Linux, macOS",
        "projects.project3.techStack1": "Python",
        "projects.project3.techStack2": "CustomTkinter",
        "projects.project3.techStack3": "PyInstaller",
        "projects.project3.techStack4": "GitLab API",
        "projects.project3.techStack5": "GitPython",

        "projects.releases": "Releases",
        "projects.viewAll": "View All Projects on GitHub",
        
        // Skills
        "skills.title": "My Skills",
        "skills.subtitle": "Technologies I work with",
        "skills.cat.backend": "Backend & Architecture",
        "skills.cat.database": "Database",
        "skills.cat.frontend": "Frontend",
        "skills.cat.ai": "AI & Computer Vision",
        "skills.cat.devops": "DevOps & Tools",
        "skills.cat.testing": "Testing & QA",
        
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
        "nav.about": "Tentang",
        "nav.experience": "Pengalaman",
        "nav.projects": "Proyek",
        "nav.skills": "Keahlian",
        "nav.contact": "Kontak",
        "language.id": "ID",
        "language.en": "EN",
        
        // Hero Section
        "hero.title": "Hai, saya",
        "hero.name": "Muhammad Arya Java",
        "hero.subtitle": "Backend Engineer",
        "hero.description": "Membangun sistem terdistribusi & arsitektur microservices yang scalable.",
        "hero.cta.about": "Tentang Saya",
        "hero.cta.projects": "Lihat Proyek",
        "hero.cta.contact": "Hubungi Saya",

        // About Section
        "about.title": "Tentang Saya",
        "about.subtitle": "Mengenal lebih dekat",
        "about.description": "Lulusan S1 Teknik Informatika dari Universitas Budi Luhur dengan fokus kuat pada Back-End Development dan Distributed Systems. Berpengalaman dalam membangun microservices yang scalable dengan pengalaman langsung mengimplementasikan Saga Pattern untuk transaksi kompleks serta memastikan kualitas kode melalui analisis statis SonarQube.",
        "about.education": "Pendidikan",
        "about.current": "Saat Ini",
        "about.location": "Lokasi",
        "about.locationValue": "Jakarta, Indonesia",
        "about.cta.experience": "Lihat Pengalaman",

        // Experience
        "experience.title": "Pengalaman Kerja",
        "experience.subtitle": "Perjalanan karir profesional saya",
        "experience.exp1.role1.title": "Back End Developer",
        "experience.exp1.role1.type": "Full-time",
        "experience.exp1.role1.location": "Surabaya, Jawa Timur, Indonesia · Remote",
        "experience.exp1.role1.project": "Supply Chain Management (SCM)",
        "experience.exp1.role1.summary": "Membangun dan mengelola arsitektur backend terdistribusi yang memisahkan lapisan persistensi data dengan lapisan orkestrasi bisnis.",
        "experience.exp1.role1.achievement1": "Business Logic Orchestration: Merancang lapisan federasi bisnis untuk mengelola workflow kompleks, aturan domain, dan transformasi data secara terpusat.",
        "experience.exp1.role1.achievement2": "Distributed Transactions: Mengimplementasikan Saga Pattern untuk menjamin eventual consistency dan atomisitas pada transaksi bisnis yang melibatkan berbagai microservices.",
        "experience.exp1.role1.achievement3": "Data Persistence Management: Mengelola authoritative gateway untuk standarisasi seluruh siklus hidup data (CRUD) guna memastikan performa tinggi dan integritas penyimpanan.",
        "experience.exp1.role1.achievement4": "Code Governance: Mengintegrasikan SonarQube dalam alur pengembangan untuk analisis kode statis, memastikan keamanan aplikasi, dan menjaga standar clean code.",
        "experience.exp1.role2.title": "Back End Developer",
        "experience.exp1.role2.type": "Kontrak",
        "experience.exp1.role2.location": "Jakarta Utara, Jakarta, Indonesia · On-site",
        "experience.exp1.role2.project": "Dealer Management System (DMS)",
        "experience.exp1.role2.summary": "Berperan dalam pemeliharaan sistem dan dukungan teknis untuk memastikan akurasi data dan stabilitas aplikasi.",
        "experience.exp1.role2.achievement1": "Query Optimization: Menganalisis dan melakukan troubleshooting pada Stored Procedures (SP) yang kompleks untuk memperbaiki kesalahan logika dan meningkatkan efisiensi penarikan data.",
        "experience.exp1.role2.achievement2": "Technical Support & Bug Fixing: Berkolaborasi dengan tim QA/Tester dalam mengidentifikasi root cause dari laporan inkonsistensi data serta melakukan perbaikan pada sisi backend code.",
        "experience.exp2.title": "IT & Research and Development Intern",
        "experience.exp2.type": "Magang",
        "experience.exp2.summary": "Membantu tim R&D dalam mengembangkan CCTV Analytics menggunakan Python, PyTorch, YOLO, CNN models, OpenCV, FastAPI, dan PostgreSQL.",
        "experience.exp2.projectsLabel": "Proyek yang dikerjakan:",
        "experience.exp2.project1": "LPR (License Plate Recognition) Project",
        "experience.exp2.project2": "Fire and Smoke Detection Project",
        "experience.exp2.project3": "Crowd Detection Project",
        "experience.exp2.project4": "CCTV Web Report (Log)",
        "experience.viewDetails": "Lihat Detail",
        "experience.labels.position": "Posisi:",
        "experience.labels.type": "Tipe:",
        "experience.labels.project": "Proyek:",
        "experience.labels.location": "Lokasi:",

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

        "projects.project2.title": "Todo List",
        "projects.project2.description": "Aplikasi Todo List sederhana untuk mengelola tugas.",
        "projects.project2.feature1": "Manajemen Pengguna dengan BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project2.feature2": "Manajemen Tugas dengan BREADS (Browse, Read, Edit, Add, Delete, Search)",
        "projects.project2.feature3": "Single Page Application (SPA)",
        "projects.project2.techStackFe1": "Bootstrap",
        "projects.project2.techStackFe2": "EJS (Embedded JavaScript)",
        "projects.project2.techStackFe3": "JQuery",
        "projects.project2.techStackFe4": "DataTables",
        "projects.project2.techStackBe1": "Node.js",
        "projects.project2.techStackBe2": "Express.js",
        "projects.project2.techStackBe3": "MongoDB",

        "projects.project3.title": "GLRC: GitLab Repo Cloner",
        "projects.project3.description": "Aplikasi desktop cross-platform untuk batch clone, update, dan manajemen repositori GitLab.",
        "projects.project3.feature1": "Seleksi repositori batch dan eksekusi bersamaan",
        "projects.project3.feature2": "Auto-pull cerdas untuk repositori lokal yang sudah ada",
        "projects.project3.feature3": "Mode clone HTTPS atau SSH dengan mekanisme retry",
        "projects.project3.feature4": "Ekspor/impor workspace (.json)",
        "projects.project3.feature5": "UI dwibahasa (Inggris & Indonesia) dengan opsi tema",
        "projects.project3.feature6": "Binary standalone untuk Windows, Linux, macOS",
        "projects.project3.techStack1": "Python",
        "projects.project3.techStack2": "CustomTkinter",
        "projects.project3.techStack3": "PyInstaller",
        "projects.project3.techStack4": "GitLab API",
        "projects.project3.techStack5": "GitPython",

        "projects.releases": "Releases",
        "projects.viewAll": "Lihat Semua Proyek di GitHub",
        
        // Skills
        "skills.title": "Keahlian Saya",
        "skills.subtitle": "Teknologi yang saya kuasai",
        "skills.cat.backend": "Backend & Arsitektur",
        "skills.cat.database": "Database",
        "skills.cat.frontend": "Frontend",
        "skills.cat.ai": "AI & Computer Vision",
        "skills.cat.devops": "DevOps & Tools",
        "skills.cat.testing": "Testing & QA",
        
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

const experiencePeriodLabels = {
    id: {
        present: 'Sekarang',
        monthOne: 'bln',
        monthMany: 'bln'
    },
    en: {
        present: 'Present',
        monthOne: 'mo',
        monthMany: 'mos'
    }
};

function parseExperienceDate(value) {
    if (!value) return null;
    return new Date(`${value}T00:00:00`);
}

function formatExperienceMonth(date, lang) {
    const locale = lang === 'id' ? 'id-ID' : 'en-US';
    return new Intl.DateTimeFormat(locale, {
        month: 'short',
        year: 'numeric'
    }).format(date);
}

function getExperienceMonthCount(startDate, endDate) {
    const start = parseExperienceDate(startDate);
    const end = parseExperienceDate(endDate) || new Date();

    if (!start || Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
        return null;
    }

    const monthDiff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return Math.max(monthDiff + 1, 1);
}

function formatExperienceDuration(monthCount, lang) {
    const labels = experiencePeriodLabels[lang] || experiencePeriodLabels.id;
    const suffix = monthCount === 1 ? labels.monthOne : labels.monthMany;
    return `${monthCount} ${suffix}`;
}

function updateExperiencePeriods(lang) {
    document.querySelectorAll('[data-period-start]').forEach(element => {
        const startDate = element.getAttribute('data-period-start');
        const endDate = element.getAttribute('data-period-end');
        const periodTemplate = element.getAttribute('data-period-template') || 'range';
        const months = getExperienceMonthCount(startDate, endDate);

        if (months === null) {
            return;
        }

        const labels = experiencePeriodLabels[lang] || experiencePeriodLabels.id;
        const startLabel = formatExperienceMonth(parseExperienceDate(startDate), lang);
        const endLabel = endDate ? formatExperienceMonth(parseExperienceDate(endDate), lang) : labels.present;
        const durationLabel = formatExperienceDuration(months, lang);

        element.textContent = periodTemplate === 'duration'
            ? durationLabel
            : `${startLabel} - ${endLabel} · ${durationLabel}`;
    });
}

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

    // Update resume download links based on language
    const resumeLinks = {
        id: 'https://drive.google.com/uc?export=download&id=1IyJfDqmWUHiwtf6iN0SJc6K4vay9DfCF',
        en: 'https://drive.google.com/uc?export=download&id=1IyJfDqmWUHiwtf6iN0SJc6K4vay9DfCF'
    };
    document.querySelectorAll('.resume-link').forEach(link => {
        link.href = resumeLinks[lang];
    });

    updateExperiencePeriods(lang);
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
    const savedLang = localStorage.getItem('language') || 'id';
    document.documentElement.lang = savedLang;
    switchLanguage(savedLang);
    
    // Set tahun di footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
