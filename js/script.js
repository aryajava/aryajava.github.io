// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
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

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .contact-method');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial state for animated elements
document.querySelectorAll('.project-card, .skill-category, .contact-method').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

// Run animation function on scroll and load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize project image carousels
document.addEventListener('DOMContentLoaded', function() {
    // Auto-rotate carousels
    const carousels = document.querySelectorAll('.project-carousel .carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 10000, // 10 detik
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
});