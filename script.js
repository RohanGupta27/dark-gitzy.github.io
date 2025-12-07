// --- 1. TYPING ANIMATION ---
const textToType = "Your Name"; // <--- CHANGE THIS TO YOUR NAME
const typingElement = document.getElementById('typing-text');
let typeIndex = 0;

function typeWriter() {
    if (typeIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 150); // Typing speed in milliseconds
    }
}

// --- 2. DYNAMIC PROJECT DATA ---
// Add as many projects as you want here!
const projects = [
    {
        title: "Calculus Helper App",
        description: "A Python tool to solve successive differentiation problems.",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "AI Image Generator",
        description: "An interface using API calls to generate art from text.",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "Linux Setup Script",
        description: "Bash scripts to automate Kali Linux environment setup.",
        liveLink: "#",
        githubLink: "#"
    },
    {
        title: "My Portfolio",
        description: "A fully responsive dynamic website built with JS.",
        liveLink: "#",
        githubLink: "#"
    }
];

// --- 3. RENDER PROJECTS TO PAGE ---
const projectContainer = document.getElementById('project-container');

function loadProjects() {
    projects.forEach((project, index) => {
        // Create a new div for the card
        const card = document.createElement('div');
        card.classList.add('project-card');
        
        // Add AOS animation attribute (staggered delay based on index)
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 100); 

        // Fill the card with HTML
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank">Live Demo &rarr;</a>
                <a href="${project.githubLink}" target="_blank">GitHub Code &rarr;</a>
            </div>
        `;

        // Append to the container
        projectContainer.appendChild(card);
    });
}

// --- 4. INITIALIZE EVERYTHING ---
window.onload = function() {
    typeWriter();
    loadProjects();
    AOS.init({
        duration: 1000, // Animation duration
        once: true      // Only animate once per scroll
    });
};