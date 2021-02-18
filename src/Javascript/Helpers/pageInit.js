import { buildReposPage, repoEvents } from '../../Javascript/Helpers/Data/reposData';
import createCards from '../../Javascript/Components/createCards';
import { pins, pinButtonEvent } from '../../Javascript/Helpers/Data/pinsData';
import pinCard from '../../Javascript/Components/pinCard';
import { packages, deletePackage, packageMaker } from '../../Javascript/Helpers/Data/packagesData';
import packageCardString from '../../Javascript/Components/packageCardString';
import { organizations, orgButtonEvents } from '../../Javascript/Helpers/Data/orgData';
import orgCard from '../../Javascript/Components/orgCard';
import { projects, sortProjectCards } from '../../Javascript/Helpers/Data/projectsData';
import projectCards from '../../Javascript/Components/projectCards';
import projectsForm from '../../Javascript/Components/projectsForm';



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
    orgButtonEvents();
  } else if (fileName[0] === 'projects.html') {
    createCards(projects, projectCards, '#project-container');
    document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
    projectsForm();
  }
};

export default pageInit;
