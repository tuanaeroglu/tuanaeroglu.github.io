const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact",
        nav_language: "Language",

        // Hero Section
        hero_title: "Architecture is frozen music.",
        hero_subtitle: "Tuana Eroglu, Architecture Student at Yeditepe University",
        hero_button: "View My Work",
        hero_download_cv: "Download CV",

        // About Section
        about_title: "Passionate About Design",
        about_description: "As an architecture student at Yeditepe University, I blend creativity with technical expertise to design spaces that inspire. My academic journey, combined with my experience as a Technical Project Design Intern at Arcelor Mittal RZK, has equipped me with strong skills in project planning, architectural visualization, and problem-solving.",
        about_languages: "Being fluent in Italian and English allows me to bring a global perspective to my architectural projects.",
        about_skills: "Software Proficiency",

        // Projects Section
        projects_title: "Projects",
        project1_title: "Modern Residential Complex<br>(Hand-drawn Sketch)",
        project1_desc: "Sustainable living spaces with contemporary design",
        project2_title: "Urban Planning Project<br>(3D Model)",
        project2_desc: "City development with focus on community spaces",
        project3_title: "Cultural Center Design<br>(Digital Rendering)",
        project3_desc: "Merging traditional elements with modern architecture",

        // Contact Section
        contact_title: "Contact",
        contact_subtitle: "Let's connect and discuss architecture!",

        // Footer
        footer_text: "All rights reserved."
    },
    tr: {
        // Navigation
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_projects: "Projeler",
        nav_contact: "İletişim",
        nav_language: "Dil",

        // Hero Section
        hero_title: "Mimarlık donmuş müziktir.",
        hero_subtitle: "Tuana Eroğlu, Yeditepe Üniversitesi Mimarlık Öğrencisi",
        hero_button: "Çalışmalarımı Gör",
        hero_download_cv: "CV İndir",

        // About Section
        about_title: "Tasarım Tutkusu",
        about_description: "Yeditepe Üniversitesi'nde mimarlık öğrencisi olarak, yaratıcılığı teknik uzmanlıkla birleştirerek ilham veren mekanlar tasarlıyorum. Akademik yolculuğum ve Arcelor Mittal RZK'daki Teknik Proje Tasarım Stajyeri deneyimim, proje planlama, mimari görselleştirme ve problem çözme konularında güçlü beceriler kazanmamı sağladı.",
        about_languages: "İtalyanca ve İngilizce dillerindeki akıcılığım, mimari projelerime global bir bakış açısı katmamı sağlıyor.",
        about_skills: "Yazılım Yetkinlikleri",

        // Projects Section
        projects_title: "Projeler",
        project1_title: "Modern Konut Kompleksi<br>(El Çizimi)",
        project1_desc: "Çağdaş tasarımlı sürdürülebilir yaşam alanları",
        project2_title: "Kentsel Planlama Projesi<br>(3B Model)",
        project2_desc: "Topluluk alanlarına odaklanan şehir gelişimi",
        project3_title: "Kültür Merkezi Tasarımı<br>(Dijital Render)",
        project3_desc: "Geleneksel öğeleri modern mimari ile birleştirme",

        // Contact Section
        contact_title: "İletişim",
        contact_subtitle: "Mimarlık hakkında konuşalım!",

        // Footer
        footer_text: "Tüm hakları saklıdır."
    },
    it: {
        // Navigation
        nav_home: "Home",
        nav_about: "Chi Sono",
        nav_projects: "Progetti",
        nav_contact: "Contatti",
        nav_language: "Lingua",

        // Hero Section
        hero_title: "L'architettura è musica congelata.",
        hero_subtitle: "Tuana Eroglu, Studentessa di Architettura all'Università Yeditepe",
        hero_button: "Vedi i Miei Lavori",
        hero_download_cv: "Scarica CV",

        // About Section
        about_title: "Passione per il Design",
        about_description: "Come studentessa di architettura all'Università Yeditepe, unisco creatività e competenza tecnica per progettare spazi che ispirano. Il mio percorso accademico, combinato con la mia esperienza come Tirocinante in Progettazione Tecnica presso Arcelor Mittal RZK, mi ha fornito solide competenze nella pianificazione dei progetti, nella visualizzazione architettonica e nella risoluzione dei problemi.",
        about_languages: "La mia padronanza dell'italiano e dell'inglese mi permette di portare una prospettiva globale ai miei progetti architettonici.",
        about_skills: "Competenze Software",

        // Projects Section
        projects_title: "Progetti",
        project1_title: "Complesso Residenziale Moderno<br>(Schizzo a Mano)",
        project1_desc: "Spazi abitativi sostenibili con design contemporaneo",
        project2_title: "Progetto di Pianificazione Urbana<br>(Modello 3D)",
        project2_desc: "Sviluppo urbano con focus sugli spazi comuni",
        project3_title: "Design del Centro Culturale<br>(Rendering Digitale)",
        project3_desc: "Fusione di elementi tradizionali con architettura moderna",

        // Contact Section
        contact_title: "Contatti",
        contact_subtitle: "Parliamo di architettura!",

        // Footer
        footer_text: "Tutti i diritti riservati."
    }
};

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                element.innerHTML = translations[language][key];
            }
        }
    });
    
    // Store the selected language
    localStorage.setItem('preferred_language', language);
    
    // Update active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === language);
    });
}

// Initialize language based on stored preference or default to English
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferred_language') || 'en';
    setLanguage(storedLang);
});
