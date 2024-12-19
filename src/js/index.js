// Navigation
const showMobileNav = () => {
    const navbar = document.getElementById("navbar");
    navbar.className === "navibar" ? 
        navbar.className += " responsive" : 
        navbar.className = "navibar";
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active Navigation Highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// Contact Form Handler
const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // You can implement your form submission logic here
    console.log('Form submitted:', formData);
    
    // Clear form
    e.target.reset();
    alert('Thank you for your message! I will get back to you soon.');
};

// Animation on Scroll (optional)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .skill-tags span');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 50) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);