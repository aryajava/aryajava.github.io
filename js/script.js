// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
});

// Navbar scroll effect & back-to-top button
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (backToTop) {
        if (window.scrollY > 400) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    }
});

// Back to top button
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Scroll reveal animation using IntersectionObserver
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .project-card, .skill-category, .contact-card, .exp-card').forEach(el => {
    observer.observe(el);
    if (!el.classList.contains('fade-up')) {
        el.classList.add('fade-up');
    }
});

// Initialize project image carousels
document.addEventListener('DOMContentLoaded', function() {
    // Auto-rotate carousels
    const carousels = document.querySelectorAll('.project-carousel .carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 10000,
            ride: 'carousel',
            wrap: true,
            pause: 'hover'
        });
    });
    
    // Hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const carousel = this.querySelector('.carousel');
            if (carousel) {
                bootstrap.Carousel.getInstance(carousel).pause();
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const carousel = this.querySelector('.carousel');
            if (carousel) {
                bootstrap.Carousel.getInstance(carousel).cycle();
            }
        });
    });
});

// Lightbox functionality
function initLightbox() {
    // Get all project carousels
    const projectCarousels = document.querySelectorAll('.project-carousel .carousel');
    
    projectCarousels.forEach(carousel => {
        // Get all images from this carousel
        const images = carousel.querySelectorAll('.carousel-item img');
        const carouselId = carousel.id;
        
        // Add click event to each image
        images.forEach((img, index) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                openLightbox(carouselId, index);
            });
        });
    });
    
    // Function to open lightbox
    function openLightbox(carouselId, startIndex) {
        const lightboxModal = new bootstrap.Modal(document.getElementById('lightboxModal'), {
            backdrop: true,
            keyboard: true
        });
        const lightboxCarouselInner = document.getElementById('lightboxCarouselInner');
        const sourceCarousel = document.getElementById(carouselId);
        const images = sourceCarousel.querySelectorAll('.carousel-item img');
        
        // Clear previous content
        lightboxCarouselInner.innerHTML = '';
        
        // Add indicator container
        const indicator = document.createElement('div');
        indicator.className = 'lightbox-indicator';
        indicator.id = 'lightboxIndicator';
        
        // Add images to lightbox
        images.forEach((img, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item ${index === startIndex ? 'active' : ''}`;
            
            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.className = 'img-fluid';
            lightboxImg.alt = img.alt;
            
            carouselItem.appendChild(lightboxImg);
            lightboxCarouselInner.appendChild(carouselItem);
        });
        
        // Add indicator to modal
        document.querySelector('#lightboxModal .modal-body').appendChild(indicator);
        
        // Initialize lightbox carousel
        const lightboxCarousel = new bootstrap.Carousel(document.getElementById('lightboxCarousel'), {
            interval: false
        });
        
        // Update indicator on slide
        document.getElementById('lightboxCarousel').addEventListener('slid.bs.carousel', function() {
            const activeIndex = Array.from(this.querySelectorAll('.carousel-item')).findIndex(item => 
                item.classList.contains('active')
            );
            document.getElementById('lightboxIndicator').textContent = `${activeIndex + 1} / ${images.length}`;
        });

        // Close when clicking outside image
        document.getElementById('lightboxModal').addEventListener('click', function(e) {
            if (e.target === this || e.target.classList.contains('modal-content')) {
                lightboxModal.hide();
            }
        });
        
        // Prevent modal close when clicking on image or controls
        document.getElementById('lightboxCarousel').addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        // Show lightbox
        lightboxModal.show();
        lightboxCarousel.to(startIndex);
        document.getElementById('lightboxIndicator').textContent = `${startIndex + 1} / ${images.length}`;
        
        // Go to clicked image and set initial indicator
        lightboxCarousel.to(startIndex);
        document.getElementById('lightboxIndicator').textContent = `${startIndex + 1} / ${images.length}`;
        
        // Remove indicator when modal is hidden
        document.getElementById('lightboxModal').addEventListener('hidden.bs.modal', function() {
            const indicator = document.getElementById('lightboxIndicator');
            if (indicator) indicator.remove();
        });
    }
}

// Initialize lightbox when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initLightbox();
    
    // Active nav link highlighting
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id') || '';
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Animate progress bars when skills section is visible
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.progress-bar').forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => { bar.style.width = width; }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) skillsObserver.observe(skillsSection);

    // Experience Timeline Switching
    document.querySelectorAll('.exp-timeline-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.exp-card');
            const targetId = this.getAttribute('data-target');

            // Deactivate all timeline buttons in this card
            card.querySelectorAll('.exp-timeline-item').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Hide all role contents in this card, show target
            card.querySelectorAll('.exp-role-content').forEach(content => {
                content.classList.remove('active');
            });
            const target = document.getElementById(targetId);
            if (target) target.classList.add('active');
        });
    });
});