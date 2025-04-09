// Daftar terjemahan
const translations = {
    en: {
        "title": "Muhammad Arya Java Portfolio",
        "name": "Muhammad Arya Java",
        "profession": "Your Profession/Title",
        "language.id": "ID",
        "language.en": "EN",
        "nav.about": "About Me",
        "nav.education": "Education",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "about.title": "About Me",
        "about.description": "Computer Science graduate skilled in Full-Stack Development (React, Node.js, MongoDB) and building scalable web applications. Strong problem-solving abilities with experience in competitive programming and Python-based machine learning. Passionate about efficient and user-centric solutions.",
        "education.title": "Education",
        "education.university.name": "Budi Luhur University",
        "education.university.detail": "Computer Science - Bachelor of Computer Science (2023)",
        "education.university.description": "Brief description about your education, achievements, or study concentration.",
        "education.highschool.name": "Semen Gresik Vocational High School",
        "education.highschool.detail": "Software Engineering - 2018",
        "experience.title": "Work Experience",
        "experience.job1.position": "Position Name",
        "experience.job1.company": "Company Name",
        "experience.job1.period": "Work Period (Month/Year - Month/Year)",
        "experience.job1.description": "Description of responsibilities and achievements in this role.",
        "experience.job1.responsibility1": "Main achievement or responsibility 1",
        "experience.job1.responsibility2": "Main achievement or responsibility 2",
        "projects.title": "My Projects",
        "projects.project1.name": "Project Name 1",
        "projects.project1.description": "Brief description about this project, technologies used, and project purpose.",
        "projects.demo": "Demo Video:",
        "projects.viewRepo": "View Repository",
        "footer.copyright": "Muhammad Arya Java. All rights reserved."
    },
    id: {
        "title": "Portofolio Muhammad Arya Java",
        "name": "Muhammad Arya Java",
        "profession": "Profesi/Jabatan Anda",
        "language.id": "ID",
        "language.en": "EN",
        "nav.about": "Tentang Saya",
        "nav.education": "Pendidikan",
        "nav.experience": "Pengalaman",
        "nav.projects": "Proyek",
        "about.title": "Tentang Saya",
        "about.description": "Lulusan Teknik Informatika dengan keahlian dalam Full-Stack Development (React, Node.js, MongoDB) dan pembuatan aplikasi web yang skalabel. Memiliki kemampuan pemecahan masalah yang kuat, berpengalaman dalam competitive programming dan pengembangan machine learning berbasis Python. Berkomitmen untuk menghadirkan solusi yang efisien dan berfokus pada pengguna.",
        "education.title": "Riwayat Pendidikan",
        "education.university.name": "Universitas Budi Luhur | Jakarta - Indonesia",
        "education.university.detail": "Teknik Informatika - Sarjana Komputer (S.kom) | 2023",
        "education.university.description": "Deskripsi singkat tentang pendidikan Anda, pencapaian, atau konsentrasi studi.",
        "education.highschool.name": "SMK Semen Gresik | Gresik - Indonesia",
        "education.highschool.detail": "Rekayasa Perangkat Lunak (RPL) | 2018",
        "experience.title": "Pengalaman Kerja",
        "experience.job1.position": "Nama Posisi",
        "experience.job1.company": "Nama Perusahaan",
        "experience.job1.period": "Periode Kerja (Bulan/Tahun - Bulan/Tahun)",
        "experience.job1.description": "Deskripsi tanggung jawab dan pencapaian dalam peran ini.",
        "experience.job1.responsibility1": "Pencapaian atau tanggung jawab utama 1",
        "experience.job1.responsibility2": "Pencapaian atau tanggung jawab utama 2",
        "projects.title": "Proyek Saya",
        "projects.project1.name": "Nama Project 1",
        "projects.project1.description": "Deskripsi singkat tentang project ini, teknologi yang digunakan, dan tujuan project.",
        "projects.demo": "Video Demo:",
        "projects.viewRepo": "Lihat Repository",
        "footer.copyright": "Muhammad Arya Java. All rights reserved."
    }
};

// Fungsi untuk mengganti bahasa dengan animasi
function switchLanguage(lang) {
    // Animasi fade out
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => el.classList.add('fade-out'));
    
    setTimeout(() => {
        // Simpan preferensi bahasa
        localStorage.setItem('language', lang);
        document.querySelector('html').lang = lang;
        
        // Update toggle position
        document.getElementById('languageToggle').checked = lang === 'en';
        
        // Terapkan terjemahan
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.value = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        
        // Animasi fade in
        setTimeout(() => {
            elements.forEach(el => el.classList.remove('fade-out'));
            elements.forEach(el => el.classList.add('fade-in'));
            setTimeout(() => {
                elements.forEach(el => el.classList.remove('fade-in'));
            }, 300);
        }, 50);
    }, 300);
}

// Event listener untuk toggle
document.getElementById('languageToggle').addEventListener('change', function() {
    const newLang = this.checked ? 'en' : 'id';
    switchLanguage(newLang);
});

// Inisialisasi bahasa saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('language') || 'id';
    document.querySelector('html').lang = savedLang;
    document.getElementById('languageToggle').checked = savedLang === 'en';
    switchLanguage(savedLang);
});