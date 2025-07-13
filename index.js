// ===== DATA =====
const data = {
    email: "prangya1712@gmail.com",
    name: "Prangya Jyoti Mohanty",
    skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "Python", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Java", level: 75 },
        { name: "C", level: 75 },
        { name: "Git", level: 85 },
        { name: "SQL", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "React", level: 50 },
        { name: "Node.js", level: 50 },
        // { name: "Express", level: 50 },
        { name: "MongoDB", level: 50 },
    ],
    additional_skills: [
        { name: "Figma" },
        { name: "AWS" },
    ],

    projects: [
        {
            id: 1,
            title: "Snake Game",
            description: "Developed a classic Snake game using Python, implementing core game mechanics and interactive features.",
            technologies: ["Python", "Pygame"],
            date: "2023-08-23",
            details: "A simple yet addictive Snake game built with Python and Pygame. The game features classic mechanics where the player controls a snake to eat food, growing longer with each bite while avoiding collisions with walls and itself. The project showcases my understanding of game loops, event handling, and basic graphics rendering in Pygame. It also includes sound effects and a scoring system to enhance the gameplay experience.",
            github: "https://github.com/Prangya2003",
            link: "",
            image: "./assets/projects/Snake.jpg",
            features: [
                { li: "Responsive design that works on all devices" },
                { li: "Comprehensive error handling" },
                { li: "User authentication and authorization" },
            ],
            moreImages: [
                { src: "./assets/projects/Snake.jpg" },
                { src: "./assets/projects/Snake.jpg" },
                { src: "./assets/projects/Snake.jpg" },
            ],
            challenges: [
                {
                    sol: `One of the main challenges was implementing real-time updates without 
                        compromising performance. I solved this by using WebSockets for 
                        critical updates and implementing efficient data fetching strategies 
                        to minimize unnecessary requests.`},
                {
                    sol: `Another challenge was ensuring accessibility compliance across all 
                                components. I addressed this by using semantic HTML, proper ARIA 
                                attributes, and thorough testing with screen readers and keyboard 
                                navigation.`}

            ]
        },
        {
            id: 2,
            title: "Instagram clone",
            description: " Created an Instagram clone using Django with features like user authentication, photo uploads, likes, comments, messaging, and saving posts.",
            technologies: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap"],
            date: "2024-08-23",
            details: "A fully functional Instagram clone built with Django, featuring user authentication, photo uploads, likes, comments, and messaging. The project includes a responsive design using Bootstrap and custom CSS for styling. Users can create accounts, follow others, like and comment on posts, and send direct messages. The application also implements a save feature for posts, allowing users to bookmark their favorite content. This project demonstrates my skills in full-stack development, database management with Django ORM, and front-end design.",
            github: "https://github.com/Prangya2003/Echoes",
            link: "",
            image: "https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png",
            features: [
                { li: "Responsive design that works on all devices" },
                { li: "Comprehensive error handling" },
                { li: "User authentication and authorization" },
            ],
            moreImages: [
                { src: "./assets/projects/Snake.jpg" },
                { src: "./assets/projects/Snake.jpg" },
                { src: "./assets/projects/Snake.jpg" },
            ],
            challenges: [
                {
                    sol: `One of the main challenges was implementing real-time updates without 
                        compromising performance. I solved this by using WebSockets for 
                        critical updates and implementing efficient data fetching strategies 
                        to minimize unnecessary requests.`},
                {
                    sol: `Another challenge was ensuring accessibility compliance across all 
                                components. I addressed this by using semantic HTML, proper ARIA 
                                attributes, and thorough testing with screen readers and keyboard 
                                navigation.`}

            ]
        },
        {
            id: 3,
            title: "Recipe-Sharing Website",
            description: "Created a dynamic recipe-sharing platform with user authentication, recipe CRUD operations, and a user-friendly interface.",
            technologies: ["Django", "HTML", "CSS", "JavaScript", "Bootstrap", "Github"],
            date: "2024-08-24",
            details: "A dynamic recipe-sharing website built with Django, allowing users to create accounts, share recipes, and interact with others. The platform features user authentication, enabling users to log in, register, and manage their profiles. Users can create, read, update, and delete (CRUD) their recipes, complete with ingredients, instructions, and images. The site is designed with a responsive layout using Bootstrap and custom CSS for an appealing user experience. This project showcases my ability to develop full-stack web applications with Django and implement user-friendly interfaces.",
            github: "https://github.com/Prangya2003/Recipe-sharing-website",
            link: "",
            image: "./assets/projects/Recipe.jpg",
            features: [
                { li: "Responsive design that works on all devices" },
                { li: "Comprehensive error handling" },
                { li: "User authentication and authorization" },
            ],
            moreImages: [
                { src: "./assets/projects/Recipe.jpg" },
                { src: "./assets/projects/Recipe.jpg" },
                { src: "./assets/projects/Recipe.jpg" },
            ],
            challenges: [
                {
                    sol: `One of the main challenges was implementing real-time updates without 
                        compromising performance. I solved this by using WebSockets for 
                        critical updates and implementing efficient data fetching strategies 
                        to minimize unnecessary requests.`},
                {
                    sol: `Another challenge was ensuring accessibility compliance across all 
                                components. I addressed this by using semantic HTML, proper ARIA 
                                attributes, and thorough testing with screen readers and keyboard 
                                navigation.`}

            ]
        }
    ],

    certificates: [
        {
            id: 1,
            title: "Smart India Hackathon 2023",
            issuer: "Silicon Institute of Technology",
            date: "2023-09-30",
            credential: "CERT001",
            document: "./assets/certificates/SIH2023.png",
        },
        {
            id: 2,
            title: "Python Internship",
            issuer: "Prep Labs",
            date: "2023-09-01",
            credential: "CERT002",
            document: "./assets/certificates/Python.png",
        },
        {
            id: 3,
            title: "Developer's Summit",
            issuer: "Silicon Institute of Technology",
            date: "2025-02-22",
            credential: "CERT003",
            document: "./assets/certificates/DevSummit.png",
        },
        {
            id: 4,
            title: "Django With Python",
            issuer: "Code Beat",
            date: "2024-07-25",
            credential: "CERT004",
            document: "./assets/certificates/Django.png",
        },
        {
            id: 5,
            title: "Spark up Summit",
            issuer: "Silicon Institute of Technology",
            date: "2024-12-01",
            credential: "CERT005",
            document: "./assets/certificates/SparkUp.png",
        },
        {
            id: 6,
            title: "The Joy of Computing Using Python",
            issuer: "NPTEL",
            date: "2024-10-01",
            credential: "CERT006",
            document: "./assets/certificates/NptelPython.png",
        },
        {
            id: 7,
            title: "Understanding Incubation and Entrepreneurship",
            issuer: "NPTEL",
            date: "2025-04-01",
            credential: "CERT007",
            document: "./assets/certificates/NptelED.png",
        },
        {
            id: 6,
            title: "Full Stack Development with MERN",
            issuer: "ZIDIO",
            date: "2024-08-20",
            credential: "CERT008",
            document: "./assets/certificates/ZidioMERN.png",
        },
    ],
};

// ===== UTILITY FUNCTIONS =====
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
document.getElementById('currYear').textContent = new Date().getFullYear();

// ===== DOM ELEMENTS =====
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
const themeToggle = document.getElementById('themeToggle');
const rotatingText = document.getElementById('rotatingText');
const skillsContainer = document.getElementById('skillsContainer');
const toolsGrid = document.getElementById('toolsGrid');
const projectsContainer = document.getElementById('projectsContainer');
const certCarousel = document.getElementById('certCarousel');
const certDots = document.getElementById('certDots');
const prevCert = document.getElementById('prevCert');
const nextCert = document.getElementById('nextCert');
const contactForm = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');
const backToTop = document.getElementById('backToTop');
const projectModal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
const projectDetails = document.getElementById('projectDetails');

const skillCards = document.querySelectorAll('.skill-card');

// ===== ROLES ROTATION =====
const roles = ["Web Developer", "Problem Solver", "UI/UX Designer", "Tech Enthusiast", "Entrepreneur"];
let roleIndex = 0;

function rotateText() {
    rotatingText.style.opacity = 0;
    rotatingText.style.transform = 'translateY(-20px)';
    rotatingText.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        rotatingText.textContent = roles[roleIndex];
        rotatingText.style.opacity = 1;
        rotatingText.style.transition = 'all 0.5s ease';
        rotatingText.style.transform = 'translateY(0px)';
        roleIndex = (roleIndex + 1) % roles.length;
    }, 500);
}

setInterval(rotateText, 3000);
// ===== MOBILE MENU TOGGLE =====
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuToggle.querySelector('.hamburger').classList.toggle('open');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.querySelector('.hamburger').classList.remove('open');
    });
});

// ===== THEME TOGGLE =====
function initTheme() {
    localStorage.setItem('darkMode', 'true');
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('light-theme', !isDark);
    themeToggle.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon" style="color: #1a2e3c;"></i>';
    document.getElementById('vmw').style.Color = isDark ? '#e9ecef' : 'none';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('light-theme');
    console.log('Dark mode:', isDark);
    localStorage.setItem('darkMode', isDark);
    document.body.classList.toggle('light-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fa-solid fa-moon" style="color: #1a2e3c;"></i>';
    if (!isDark) {
        document.body.style = '--dark-text : black ; --dark-card : none ; --vmw-bg : #121212';

    } else {
        document.body.style = '--dark-text : #e9ecef ; --navBG : rgba(14, 13, 13, 0.9); ';

    }
});


// Initialize theme
initTheme();

// ===== SKILLS RENDERING =====
function renderSkills() {
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card animate';
        skillCard.innerHTML = `
                    <div class="skill-header">
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-level">${skill.level}%</div>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${skill.level}%"></div>
                    </div>
                `;
        skillsContainer.appendChild(skillCard);
    });
}

function renderAddSkills() {
    toolsGrid.innerHTML = '';
    data.additional_skills.forEach(additional_skills => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card animate';
        skillCard.innerHTML = `
                    <div class="tool-item">${additional_skills.name}</div>
                `;
        toolsGrid.appendChild(skillCard);
    });
}

// ===== PROJECTS RENDERING =====
function renderProjects() {
    projectsContainer.innerHTML = '';
    data.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card animate';
        projectCard.innerHTML = `
                    <div class="project-image">
                    ${project.image == "" ?

                `<div class="image-placeholder"></div>` :
                `<img src="${project.image}" alt="${project.title}">`
            }
                    <div class="date-badge">${formatDate(project.date)}</div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <div class="tech-stack">
                            ${project.technologies.map(tech =>
                `<span class="tech-item">${tech}</span>`
            ).join('')}
                        </div>
                        <div class="project-buttons">
                            <button class="details-button" data-id="${project.id}">View Details</button>
                            <div class="link-group">
                                <a href="${project.github}" target="_blank" class="link-button" aria-label="GitHub repository">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="${project.link}" class="link-button" aria-label="Live demo">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
        projectsContainer.appendChild(projectCard);
    });

    // Add event listeners to details buttons
    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const projectId = e.target.getAttribute('data-id');
            showProjectDetails(projectId);
        });
    });
}

// ===== CERTIFICATES RENDERING =====

let currentCertIndex = 1;

function renderCertificates() {
    certCarousel.innerHTML = '';
    certDots.innerHTML = '';

    data.certificates.forEach((cert, index) => {

        const certCard = document.createElement('div');
        certCard.className = `certificate-card`;
        certCard.dataset.index = index;
        certCard.innerHTML = `
                <div class="certificate-image">
                    <img src="${cert.document}" alt="${cert.title}" class="certificate-img">
                </div>
                <div class="certificate-content">
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-issuer">${cert.issuer}</p>
                    <p class="certificate-date">Issued: ${formatDate(cert.date)}</p>
                </div>
            `;
        certCard.addEventListener('click', () => scrollToCertificate(index));
        certCarousel.appendChild(certCard);

        // Create dot
        const dot = document.createElement('button');
        dot.className = `dot`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => scrollToCertificate(index));
        certDots.appendChild(dot);
    });

    updateActiveState();
}

function scrollToCertificate(index) {
    currentCertIndex = index;
    const cards = certCarousel.querySelectorAll('.certificate-card');
    const targetCard = cards[index];

    if (targetCard) {
        targetCard.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
        });
    }

    updateActiveState();
}

function updateActiveState() {
    const cards = certCarousel.querySelectorAll('.certificate-card');
    const dots = certDots.querySelectorAll('.dot');

    cards.forEach((card, idx) => {
        card.classList.toggle('active', idx === currentCertIndex);
    });

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active-dot', idx === currentCertIndex);
    });
}

prevCert.addEventListener('click', () => {
    currentCertIndex = (currentCertIndex - 1 + data.certificates.length) % data.certificates.length;
    scrollToCertificate(currentCertIndex);
});

nextCert.addEventListener('click', () => {
    currentCertIndex = (currentCertIndex + 1) % data.certificates.length;
    scrollToCertificate(currentCertIndex);
});

document.addEventListener('keydown', (e) => {
    const section = document.getElementById('certificates');
    const inView = section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom > 0;

    if (!inView) return; // Exit if section isn't in view

    if (e.key === 'ArrowRight') {
        currentCertIndex = (currentCertIndex + 1) % data.certificates.length;
        scrollToCertificate(currentCertIndex);
    } else if (e.key === 'ArrowLeft') {
        currentCertIndex = (currentCertIndex - 1 + data.certificates.length) % data.certificates.length;
        scrollToCertificate(currentCertIndex);
    }
});



// ===== CONTACT FORM =====
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    const recipient = data.email;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `From: ${name} <${email}>\n\n${message}`
    )}`;

    window.open(gmailURL, "_blank");

    // Simulate form submission
    setTimeout(() => {
        // Reset form
        contactForm.reset();

        // Show success message
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';

        // Reset button
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }, 1500);
});

// ===== BACK TO TOP =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== PROJECT DETAILS =====
function showProjectDetails(projectId) {
    const project = data.projects.find(p => p.id == projectId);
    if (!project) return;

    projectDetails.innerHTML = `
                <div class="back-button" id="backButton">
                    <i class="fas fa-arrow-left"></i> Back to Portfolio
                </div>
                
                <div class="project-hero">
                    <div class="project-image-container">
                        <img src="${project.image}" alt="${project.title}" class="project-image">
                    </div>
                    
                    <div class="project-hero-content">
                        <h1>${project.title}</h1>
                        <p class="date">Completed: ${formatDate(project.date)}</p>
                        
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" class="project-link-button">
                                <i class="fab fa-github"></i> GitHub Repository
                            </a>
                            <a href="${project.link}" target="_blank" class="project-link-button">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="project-content-container">
                    <div class="project-details-content">
                        <div class="project-section">
                            <h2>Project Overview</h2>
                            <p>${project.details}</p>
                        </div>
                        
                        <div class="project-section">
                            <h2>Technologies Used</h2>
                            <div class="project-tech-list">
                                ${project.technologies.map(tech => `<span class="project-tech-item">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="project-section">
                            <h2>Key Features</h2>
                            <ul class="project-features-list">
                                ${project.features.map(feature => `<li>${feature.li}</li>`).join('')}
                                <!-- <li>Responsive design that works on all devices</li>
                                <li>User authentication and authorization</li>
                                <li>Real-time data updates</li>
                                <li>Performance optimization for fast loading</li>
                                <li>Comprehensive error handling</li>
                                <li>Accessibility compliance</li> -->
                            </ul>
                        </div>
                        
                        <div class="project-section">
                            <h2>Challenges & Solutions</h2>
                            <p>
                                One of the main challenges was implementing real-time updates without 
                                compromising performance. I solved this by using WebSockets for 
                                critical updates and implementing efficient data fetching strategies 
                                to minimize unnecessary requests.
                            </p>
                            <p>
                                Another challenge was ensuring accessibility compliance across all 
                                components. I addressed this by using semantic HTML, proper ARIA 
                                attributes, and thorough testing with screen readers and keyboard 
                                navigation.
                            </p>
                        </div>
                    </div>
                    
                    <div class="project-gallery">
                        <h2>Project Gallery</h2>
                        <br>
                        <div class="gallery-grid">
                        ${project.moreImages.map(img =>
        `<div class="gallery-item">
                                <img src="${img.src}" alt="${project.title} Screenshot 1">
                            </div>`).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="project-cta">
                    <h2>Like What You See?</h2>
                    <p>Feel free to reach out if you're interested in working together!</p>
                    <a href="index.html#contact" id="closeContact" class="project-cta-button">Contact Me</a>
                </div>
            `;

    // Add event listener to back button
    document.getElementById('backButton').addEventListener('click', () => {
        projectModal.style.display = 'none';
    });
    document.getElementById('closeContact').addEventListener('click', () => {
        projectModal.style.display = 'none';
    });

    // Show modal
    projectModal.style.display = 'block';
}

closeModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
});

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        projectModal.style.display = 'none';
    }
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const animateElements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== INITIALIZE =====
function init() {
    renderSkills();
    renderAddSkills();
    renderProjects();
    renderCertificates();
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScrolling();
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
