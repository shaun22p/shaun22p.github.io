// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });
    
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Navigation link smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Skip if it's the back to top button
            if (this.getAttribute('href') === '#' && this.id === 'back-to-top') return;
            
            e.preventDefault();
            
            // Close mobile menu if it's open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Skip if href is just "#"
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                pcbType: document.getElementById('pcb-type').value,
                quantity: document.getElementById('quantity').value,
                description: document.getElementById('description').value
            };
            
            // In a real application, you would send this data to a server
            // For now, we'll just show a success message
            alert('Thank you for your quote request. We will contact you shortly!');
            quoteForm.reset();
            
            // You could use fetch or XMLHttpRequest to send the data to a server:
            /*
            fetch('your-server-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                alert('Thank you for your quote request. We will contact you shortly!');
                quoteForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting your request. Please try again later.');
            });
            */
        });
    }
    
    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPosition = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.add('active');
            } else {
                document.querySelector('.navbar-nav a[href="#' + sectionId + '"]').classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
});