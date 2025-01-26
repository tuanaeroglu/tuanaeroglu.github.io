// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar color change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    }
});

// Active link highlighting
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        let top = section.offsetTop - 100;
        let bottom = top + section.offsetHeight;
        let scroll = window.scrollY;
        let id = section.getAttribute('id');
        
        if (scroll >= top && scroll < bottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Language switcher initialization
document.addEventListener('DOMContentLoaded', () => {
    // Add click events to language options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedLang = option.getAttribute('data-lang');
            setLanguage(selectedLang);
            
            // Update active state in dropdown
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
    
    // Set initial language
    const storedLang = localStorage.getItem('preferred_language') || 'en';
    setLanguage(storedLang);
    
    // Set initial active state in dropdown
    const activeLangOption = document.querySelector(`.lang-option[data-lang="${storedLang}"]`);
    if (activeLangOption) {
        activeLangOption.classList.add('active');
    }
});
