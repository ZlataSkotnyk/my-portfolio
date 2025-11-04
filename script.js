const projectDetails = {
    1: {
        title: "Interactive Quiz Game",
        description: "A dynamic quiz application built with HTML, CSS, and JavaScript. Features multiple-choice questions, score tracking, and immediate feedback.",
        technologies: "Technologies: HTML5, CSS3, JavaScript",
        link: "https://zlataskotnyk.github.io/Quiz-website/"
    },
    2: {
        title: "Registration Form",
        description: "A responsive registration form with client-side validation. Includes input validation, password strength checking, and form submission handling.",
        technologies: "Technologies: HTML5, CSS3, JavaScript, Form Validation",
        link: "https://zlataskotnyk.github.io/lab-css-fundamentals/"
    },
    3: {
        title: "Tasty Bites",
        description: "A modern restaurant website featuring a menu system, reservation form, and responsive design for all devices.",
        technologies: "Technologies: HTML5, CSS3, Bootstrap 5",
        link: "https://zlataskotnyk.github.io/Recipe-Website-Makeover-main/"
    }
};


const buttons = document.querySelectorAll('.details-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        const projectNum = button.getAttribute('data-project');
        const detailsElement = document.getElementById(`details${projectNum}`);
        const project = projectDetails[projectNum];

        if (detailsElement.innerHTML !== '') {
            detailsElement.innerHTML = '';
            button.textContent = 'More Details';
        } else {
            detailsElement.innerHTML = `
                <div class="project-details">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <p>${project.technologies}</p>
                    <a href="${project.link}" target="_blank" class="project-link">View Website</a>
                </div>
            `;
            button.textContent = 'Hide Details';
        }
    });
});
