
const menu = document.getElementById('menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
    navbar.classList.toggle('nav-toggle');
});

document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target)) {
        navbar.classList.remove('nav-toggle');
    }
});


const skills = [
{
    "name": "TailwindCSS",
    "icon": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
},
{
    "name": "Bootstrap",
    "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
},
{
    "name": "Sass",
    "icon": "https://img.icons8.com/color/48/000000/sass.png"
},
{
    "name": "HTML5",
    "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
},
{
    "name": "CSS3",
    "icon": "https://img.icons8.com/color/48/000000/css3.png"
},
{
    "name": "JavaScript",
    "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
},
{
    "name": "PHP",
    "icon": "https://img.icons8.com/offices/48/000000/php-logo.png"
},
{
    "name": "MongoDB",
    "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
},
{
    "name": "MySQL",
    "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
},
{
    "name": "GitHub",
    "icon": "https://img.icons8.com/glyph-neue/48/ffffff/github.png"
},
{
    "name": "Laravel",
    "icon": "https://img.icons8.com/fluency/48/000000/laravel.png"
},
{
    "name": "UML",
    "icon": "https://img.icons8.com/glyph/48/000000/uml.png"
},
{
    "name": "Figma",
    "icon": "https://img.icons8.com/color/48/000000/figma.png"
}
];

// Dynamically create the skill bars
const skillsContainer = document.getElementById("skillsContainer");

skills.forEach(skill => {
const skillBar = document.createElement("div");
skillBar.classList.add("bar");

skillBar.innerHTML = `
    <div class="info">
        <img src="${skill.icon}" alt="${skill.name} Icon"/>
        <span>${skill.name}</span>
    </div>
`;
skillsContainer.appendChild(skillBar);
});
document.addEventListener("DOMContentLoaded", () => {
const navbarLinks = document.querySelectorAll(".navbar ul li a");
const sections = document.querySelectorAll("section");

const makeActive = () => {
let currentSection = "";

// Vérifie la section visible
sections.forEach((section) => {
  const sectionTop = section.offsetTop - 50; // Ajuster selon la hauteur de la navbar
  if (window.scrollY >= sectionTop) {
    currentSection = section.getAttribute("id");
  }
});

// Met à jour la classe active
navbarLinks.forEach((link) => {
  link.classList.remove("active");
  if (link.getAttribute("href").includes(currentSection)) {
    link.classList.add("active");
  }
});
};

// Écoute de l'événement scroll
window.addEventListener("scroll", makeActive);
});


document.addEventListener('DOMContentLoaded', () => {
const projectsData = [
{
  title: 'Proxime',
  description: "Proxime est une plateforme conçue pour vous aider à organiser vos projets de manière simple, efficace et collaborative. Notre mission est de simplifier la gestion de vos tâches et de vous permettre de vous concentrer sur ce qui compte vraiment : l'accomplissement de vos objectifs.",
  imageUrl: 'assets/images/projet1.png',
  projectUrl: 'https://github.com/Hanane-Abounouh/Proxime.git',
  demoUrl: '',
},
{
  title: 'Event-Planner',
  description: "Event-Planner est une plateforme qui permet d'afficher des événements et aux utilisateurs de proposer les leurs, facilitant la gestion et la découverte d'événements mémorables.",
  imageUrl: 'assets/images/projet2.png',
  projectUrl: 'https://github.com/Hanane-Abounouh/gestion_evenements',
  demoUrl: '', // Pas de démo
},
{
  title: 'Notely',
  description: "Notely est un site conçu pour vous aider à organiser vos idées, suivre vos projets et maximiser votre productivité. Simple, intuitif et efficace, il vous permet de gérer vos notes en toute simplicité.",
  imageUrl: 'assets/images/projet5.png',
  projectUrl: 'https://github.com/Hanane-Abounouh/Notely',
  demoUrl: '', 
},
{
  title: 'VueMastery',
  description: "VueMastery est une plateforme dédiée à la création et à la gestion de blogs avec Vue.js. Grâce à une interface intuitive, elle permet aux utilisateurs de créer, publier et administrer leurs contenus facilement, tout en offrant des outils pour analyser l'engagement des lecteurs et améliorer leurs performances.",
  imageUrl: 'assets/images/projet4.png',
  projectUrl: 'https://github.com/Hanane-Abounouh/vuemastery.git',
  demoUrl: '', // Pas de démo
},
{
    title: 'CLENFIX',
    description: "site Web front-end pour un service de nettoyage.",
    imageUrl: 'assets/images/projet7.png',
    projectUrl: 'https://github.com/Hanane-Abounouh/-CLENFIX',
    demoUrl: '', // Pas de démo
  },
  {
    title: 'Elevator Simulation',
    description: "Une simulation web interactive en JavaScript permettant de visualiser le déplacement d'un ascenseur entre différents étages avec des animations des portes et du mouvement. L'utilisateur peut sélectionner des étages et réinitialiser l'ascenseur facilement.",
    imageUrl: 'assets/images/projet8.png',
    projectUrl: 'https://github.com/Hanane-Abounouh/BriefElevator-Simulator---Copie',
    demoUrl: 'https://hanane-abounouh.github.io/BriefElevator-Simulator---Copie/', 
  }


//Ajoutez plus de projets ici si nécessaire
];

const projectContainer = document.getElementById('project-container');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const itemsPerPage = 4; // Nombre de projets par page
let currentPage = 1;

function renderProjects(page) {
projectContainer.innerHTML = '';
const start = (page - 1) * itemsPerPage;
const end = start + itemsPerPage;
const projectsToShow = projectsData.slice(start, end);

projectsToShow.forEach(project => {
  const projectBox = document.createElement('div');
  projectBox.classList.add('box', 'tilt');

  // Bouton "View" uniquement si demoUrl est défini et non vide
  const viewButton = project.demoUrl && project.demoUrl.trim() !== ''
    ? `<a href="${project.demoUrl}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>`
    : '';

  // Contenu du projet
  const projectContent = `
    <img draggable="false" src="${project.imageUrl}" alt="${project.title}" />
    <div class="content">
      <div class="tag">
        <h3>${project.title}</h3>
      </div>
      <div class="desc">
        <p>${project.description}</p>
        <div class="btns">
          ${viewButton}
          <a href="${project.projectUrl}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  `;

  projectBox.innerHTML = projectContent;
  projectContainer.appendChild(projectBox);
});

updatePagination(page);
}

function updatePagination(page) {
const totalPages = Math.ceil(projectsData.length / itemsPerPage);

prevPageBtn.style.display = (page === 1) ? 'none' : 'inline-block';
nextPageBtn.style.display = (page === totalPages) ? 'none' : 'inline-block';
}

prevPageBtn.addEventListener('click', () => {
if (currentPage > 1) {
  currentPage--;
  renderProjects(currentPage);
}
});

nextPageBtn.addEventListener('click', () => {
const totalPages = Math.ceil(projectsData.length / itemsPerPage);
if (currentPage < totalPages) {
  currentPage++;
  renderProjects(currentPage);
}
});

// Initial render of the first page of projects
renderProjects(currentPage);
});





document.getElementById('scroll-up').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-down').addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
