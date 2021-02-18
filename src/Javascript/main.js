import projects from './Helpers/Data/projectsData';
import organizations from './Helpers/Data/orgData';
import packages from './Helpers/Data/packagesData';
import { repos, favoriteRepos } from './Helpers/Data/packagesData';
import pins from './Helpers/Data/pinsData';
import printToDom from './Helpers/printToDom';
import createCards from './Components/createCards';
import projectsForm from './Components/projectsForm';
import orgCard from '../Javascript/Components/orgCard';
import packageCardString from '../Javascript/Components/packageCardString';


// Runs page's functions
const pageInit = () => {
  const fileName = location.pathname.split("/").slice(-1);

  if (fileName[0] === "repos.html") {
    buildReposPage();
    repoEvents();
  } else if (fileName[0] === "") {
    createCards(pins, pinCard, "#pin-container");
    pinButtonEvent();
  } else if (fileName[0] === "packages.html") {
    createCards(packages, packageCardString, "#package-container");
    document
      .querySelector("#create-package")
      .addEventListener("click", packageMaker);
    document
      .querySelector('#package-container')
      .addEventListener('click', deletePackage);  
  } else if (fileName[0] === 'organizations.html') {
    createCards(organizations, orgCard, '#org-objects-container');
  } else if (fileName[0] === 'projects.html') {
    createCards(projects, projectCards, '#project-container');
    document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
    projectsForm();
  }
};

// Init function
const init = () => {
  printToDom("#profile-card", profileString);
  pageInit();
  orgButtonEvents();
};

init();
