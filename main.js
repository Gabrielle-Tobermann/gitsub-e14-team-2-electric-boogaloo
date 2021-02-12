const projects = [
  {
    name: 'Project 1',
    description: 'no description',
  },
  {
    name: 'Project 2',
    description: 'no description',
  },
  {
    name: 'Project 3',
    description: 'no description',
  },
  {
    name: 'project 4',
    description: 'no description',
  },
  {
    name: 'project 5',
    description: 'no description',
  },
];
// Start arrays
const organizations = [
  {
    img: 'images/orgImgs/oi_nss.png',
    name: 'nss-evening-cohort-14',
    repos: 30,
  },
  {
    img: 'images/orgImgs/oi_org1.png',
    name: 'React Ladies',
    repos: 32,
  },
  {
    img: 'images/orgImgs/oi_org2.png',
    name: 'TN Code Pros',
    repos: 20,
  },
  {
    img: 'images/orgImgs/oi_org3.png',
    name: 'Fortune 500 Devs',
    repos: 27,
  },
];

// Array of package objects
const packages = [
  {
    name: 'Docker',
    description:
      'A software platform used for building applications based on containers — small and lightweight execution environments.',
    iconImgSrc: 'packagesIcons/Docker.png',
    id: 0,
  },
  {
    name: 'Apache Maven',
    description:
      'A default package manager used for the Java programming language and the Java runtime environment.',
    iconImgSrc: 'packagesIcons/Apache-Maven.png',
    id: 1,
  },
  {
    name: 'NuGet',
    description:
      'A free and open source package manager used for the Microsoft development platforms including .NET.',
    iconImgSrc: 'packagesIcons/NuGet.png',
    id: 2,
  },
  {
    name: 'RubyGems',
    description:
      'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.',
    iconImgSrc: 'packagesIcons/RubyGems.png',
    id: 3,
  },
  {
    name: 'npm',
    description:
      'A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.',
    iconImgSrc: 'packagesIcons/npm.png',
    id: 4,
  },
  {
    name: 'Containers',
    description:
      'A single place for your team to manage Docker images and decide who can see and access your images.',
    iconImgSrc: 'packagesIcons/Containers.png',
    id: 5,
  },
];

const repos = [
  {
    name: 'example-repo',
    description: 'This is an example of what a repository will look like.',
  },
  {
    name: 'create-your-own-repo',
    description: 'Use the form below to create repositories of your own.',
  },
];

const pins = [
  {
    name: 'affirmation-generator',
    description:
      'This app randomly generates an affirmation statement. Built by React.js.',
  },
  {
    name: 'github-clone',
    description: 'Powered by HTML, CSS, Vanilla Javascript, Bootstrap.',
  },
  {
    name: 'accessibility-hacks',
    description: 'Snippets to enhance app accessibility.',
  },
  {
    name: 'portfolio',
    description: 'Personal portfolio site, deployed through Netlify.',
  },
];

// Creates new packages after package form is submitted
const packageMaker = (e) => {
  e.preventDefault();

  const name = document.querySelector('#package-name').value;
  const description = document.querySelector('#package-description').value;
  const id = 1;
  const newPackageCardString = (item) => {
    return `<div class="card border-secondary mb-3 bg-transparent" style="width: 18rem; height: 18rem;" id="${item.id}">
              <div class="card-body text-secondary">
                <img src="${item.iconImgSrc}">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <div class="d-flex align-contnent-end">
                  <button type="button" class="btn btn-secondary">Learn More</button>
                  <button type="button" class="btn btn-danger" id="${item.id}">Delete</button>
                </div>
              </div>
            </div>`;
  };

  const newPackage = {
    name,
    description,
    id,
  };

  packages.push(newPackage);
  createCards(packages, newPackageCardString, '#package-container');
};

// HTML string of Package cards to be printed to DOM
const packageCardString = (item) => {
  return `<div class="card border-secondary mb-3 bg-transparent" style="width: 18rem; height: 18rem;" id="${item.id}">
            <div class="card-body text-secondary">
              <img src="${item.iconImgSrc}">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <div class="d-flex align-contnent-end">
                <button type="button" class="btn btn-secondary">Learn More</button>
                <button type="button" class="btn btn-danger" id="${item.id}">Delete</button>
              </div>
            </div>
          </div>`;
};
//Holly - card to print after submitting form
const pinCard = (item) => {
  return `<div class="card text-white bg-dark mb-3" style="max-width: 18rem;" id="${item.id}">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <div class="card-footer text-center font-weight-bolder" id="pinned">
        <img
        src="images/profileImgs/pi_fullStar.png"
        alt="image of solid star"
      />
        </div>
      </div>
    </div>`;
};

//Upon clicking 'customize' button, this form appears
const pinButtonEvent = () => {
  document.querySelector('#customize').addEventListener('click', pinCardForm);
};

//Stretch goal: add a search form to add items from other pages
const pinCardForm = () => {
  console.log('click');
  let form = `<div class="mb-3 text-white">
                <label for="title" class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control bg-dark text-white"
                  id="text-input"
                  placeholder="Your Project Name"
                />
              </div>
              <div class="mb-3 text-white border-white">
                <label for="description" class="form-label">Description</label>
                <textarea
                  class="form-control bg-dark text-white"
                  id="pin-description"
                  rows="3"
                ></textarea>
              </div>
              <br />
              <button type="button" class="btn btn-outline-info" id="submitButton">Submit</button>`;
  printToDom('#form-container', form);
  document
    .querySelector('#submitButton')
    .addEventListener('click', submitPinnedCard);
};

//Holly - this will take in the form info + push to pins array; then will reset form
const submitPinnedCard = (e) => {
  e.preventDefault();

  const name = document.querySelector('#text-input').value;
  const description = document.querySelector('#pin-description').value;
  const id = 1;

  const newPin = {
    name,
    description,
    id,
  };

  pins.push(newPin);
  createCards(pins, pinCard, '#pin-container');
};

// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Create card function
const createCards = (arr, card, id) => {
  let domString = '';

  for (let item of arr) {
    domString += card(item);
  }
  printToDom(id, domString);
};

// Start Create Profile Card
const profileString = `<!-- Profile -->
<!-- Picture -->
<img
  src="images/profileImgs/Monica.png"
  class="img-fluid rounded-circle"
  alt="profile picture"
  height="200"
  width="200"
/>
<!-- Name -->
<h4>Monica Powell</h4>
<!-- Git handle -->
<p>M0nica</p>
<!-- Blurb -->
<p>
  Building tech to elevate people. Founder of React Ladies a community for
  React JS develops.
</p>
<!-- Buttons? -->
<!-- Stats? -->
<!-- Contact info -->
<p>
  <img src="images/profileImgs/pi_location.png" alt="pin drop image" />New York, New
  York<br/>
  <img
    src="images/profileImgs/pi_email.png"
    alt="emil image"
  />github@aboutmonica.com<br />
  <img
    src="images/profileImgs/pi_link.png"
    alt="chain link image"
  />https://www.aboutmonica.com<br />
  <img src="images/profileImgs/pi_twitter.png" alt="twitter bird image" />@indigitalcolor
</p>
<!-- Highlights -->
<h5>Highlights</h5>
<p>
  <img
    src="images/profileImgs/pi_asterisk.png"
    alt="asterisk image"
  />Arctic Code Vault Contributor<br />
  <img
    src="images/profileImgs/pi_fullStar.png"
    alt="image of solid star"
  />GitHub Star<br />
  <img
    src="images/profileImgs/pi_hollowStar.png"
    alt="image of hollowed star"
  />PRO
</p>
<!-- Organizations -->
  <!-- Print Images of Organizations Object Here -->
  <div></div>
<!-- Sponsors -->
  <!-- Print Images of Sponsors Object Here -->`;

// end my code

const repoCard = (item) => `<div class="repo-card w-100" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
  </div>`;

const buildReposPage = () => {
  createCards(repos, repoCard, '#reposContainer');
};


// End Create Profile Card

// MG - Start Create Organizations Cards
const orgCard = (item) => {
  return `<div class="card bg-transparent" >
  <div class="card-body">
    <img src=${item.img} alt="${item.name} logo">
    <h6 class="card-subtitle text-muted">${item.name}</h6>
    member and collaborator on ${item.repos} repositories
    <button type="button">Leave</button>
  </div>
</div>`;
};
// MG - End Create Organizations Cards

// Gabby - projects page
const projectCards = (projects) => {
  return `<div class="card">
  <h5 class="card-header"></h5>
  <div class="card-body">
    <h5 class="card-title">${projects.name}</h5>
    <p class="card-text">${projects.description}</p>
  </div>
</div>`;
};

const projectsForm = () => {
  let formString = `<form>
  <div class="mb-3">
    <div class='form-text'>Create a new project</div>
    <div class='form-text'>Coordinate, track and update all in one place, so projects stay transparent and on schedule</div>
    <label for="projectsForm" class="form-label">Project board name</label>
    <input type="text" class="form-control" id="project-board-name" aria-describedby="projectBoardNameHelp">
  </div>
  <div class="mb-3">
    <label for="projectDescription" class="form-label">Description (optional)</label>
    <input type="text" class="form-control" id="project-description">
  </div>
  <button type="submit" class="btn btn-primary">Create project</button>
</form>`

printToDom('#project-form', formString);
document.querySelector('form').addEventListener('submit', projectsFormInfo);
}

// Gabby - updating projects when form is filled in 
const projectsFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-board-name').value;
  const description = document.querySelector('#project-description').value;

  const obj = {
    name,
    description,
  }
  projects.push(obj);
  createCards(projects, projectCards, '#project-container'); 
  //This will have to call onProjectsPage instead of createcards after PR is approved
  document.querySelector('form').reset();
}

// Runs page's functions
const pageInit = () => {
  const fileName = location.pathname.split('/').slice(-1);

  if (fileName[0] === 'repos.html') {
    buildReposPage();
  } else if (fileName[0] === 'index.html') {
    createCards(pins, pinCard, '#pin-container');
    pinButtonEvent();
  } else if (fileName[0] === 'packages.html') {
    createCards(packages, packageCardString, '#package-container');
    document
      .querySelector('#create-package')
      .addEventListener('click', packageMaker);
  } else if (fileName[0] === 'organizations.html') {
    createCards(organizations, orgCard, '#org-objects-container');
  } else if (fileName[0] === 'projects.html') {
    createCards(projects, projectCards, '#project-container');
    projectsForm();
  }
};

// Init function
const init = () => {
  printToDom('#profile-card', profileString);
  pageInit();
};

init();
