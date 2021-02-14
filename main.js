// Start Arrays
// Projects Array
const projects = [
  {
    name: 'Project 1',
    description: 'No description',
  },
  {
    name: 'Project 2',
    description: 'No description',
  },
  {
    name: 'Project 3',
    description: 'No description',
  },
  {
    name: 'Project 4',
    description: 'No description',
  },
  {
    name: 'Project 5',
    description: 'No description',
  },
];
// Organizations Array
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
// Packages Array
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
// Repos Array
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

const favoriteRepos = [];

// Pins Array
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
// End Arrays

// HTML string of Package cards to be printed to DOM
const packageCardString = (item) => {
  return `<div class="card border-secondary m-2 bg-transparent" style="width: 20rem; height: 18rem;" id="${item.id}">
            <div class="card-body text-secondary">
              <img src="${item.iconImgSrc}" style="width: 3rem; height: 3rem;">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <div class="d-flex flex-wrap mt-auto mx-auto mb-3" id="package-buttons">
                <button type="button" class="btn btn-secondary m-1">Learn More</button>
                <button type="button" class="btn btn-danger m-1" id="delete-package">Delete</button>
            </div>
          </div>`;
};

// Creates new packages after package form is submitted
const packageMaker = (e) => {
  e.preventDefault();

  const name = document.querySelector('#package-name').value;
  const description = document.querySelector('#package-description').value;
  const iconImgSrc = document.querySelector('#package-img-src').value;
  const id = 1;

  const newPackage = {
    name,
    description,
    iconImgSrc,
    id,
  };

  if (!name) {
    alert("Please input name");
  } else {
    packages.push(newPackage);
    createCards(packages, packageCardString, '#package-container');
    document.querySelector('form').reset();
  }
};

// Deletes package when delete button is clicked
const deletePackage = (e) => {
  let targetId = e.target.id;
  let targetType = e.target.type;
  
  if (targetId === 'delete-package' && targetType === 'button') {
    packages.splice((packages.length - 1),1);  
  }
  createCards(packages, packageCardString, '#package-container');
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
  React JS developers.
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

const repoCard = (item) => `<div class="repo-card w-100 bottom-border" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
  </div>`;

const buildReposPage = () => {
  createCards(repos, repoCard, '#reposContainer');
};

const repoFormSubmit = (e) => {
  e.preventDefault();

  const repoName = document.querySelector('#repoName').value;
  const repoDescription = document.querySelector('#repoDescription').value;

  document.querySelector('#repoName').value = '';
  document.querySelector('#repoDescription').value = '';

  const newRepo = {
    name: repoName,
    description: repoDescription,
  };

  repos.push(newRepo);
  buildReposPage();
};

const repoEvents = () => {
  document
    .querySelector('#repoForm')
    .addEventListener('submit', repoFormSubmit);
};

// End Create Profile Card

// MG - Start Create Organizations Cards
const orgCard = (item) => {
  return `<div class="card bg-transparent">
            <div class="card-body d-flex flex-row border border-2 border-dark rounded">
              <div>
                <img src=${item.img} alt="${item.name} logo">
              </div>
              <div class="text-center align-self-center px-2">
                <h6 class="card-subtitle" style="color:#58A6FF">${item.name}</h6>
              </div>
              <div class="align-self-center" style="font-size:13px">  
                member and collaborator on ${item.repos} repositories
              </div>
              <button type="button" class="btn btn-dark btn-sm ml-3 ms-auto" style="color:#C9D1D4">Leave</button>
            </div>    
          </div>`;
};
// MG - End Create Organizations Cards
// MG - Start Org Page Functions
// Org Page Functions

// Toggle Form Display
const toggleOrgForm = (e) => {
  const formStatus = document.querySelector("#org-form-container");

  if (formStatus.style.display == "none") {
    formStatus.style.display = "block"
  } else if (formStatus.style.display == "block") {
    formStatus.style.display = "none"
  }
};

// Submit Org Form
const submitOrgForm = (e) => {
  // Prevent page refresh from form submission
  e.preventDefault();
  // Grab form name value
  const formName = document.querySelector("#org-text-input").value;
  // Create img array
  const imgArr = [
    'images/orgImgs/oi_nss.png',
    'images/orgImgs/oi_org1.png',
    'images/orgImgs/oi_org2.png',
    'images/orgImgs/oi_org3.png'
  ];
  // Generate random repos between 35 and 20
  const randomRepos = Math.floor(Math.random() * (35 - 20 +1)) + 20;
  // Create new object properties
  const img = imgArr[Math.floor(Math.random() * imgArr.length)];
  const name = formName;
  const repos = randomRepos;
  // Create new object
  const obj = {
    img,
    name,
    repos,
  };
  // Push object into organizations array
  organizations.push(obj);
  // Rebuild the DOM
  createCards(organizations, orgCard, '#org-objects-container');
  // Reset the form fields
  document.querySelector("form").reset();
};

// Remove Org From Page
const removeOrg = (e) => {
  // Capture type and Id of button click
  const targetType = e.target.type;
  const targetId = e.target.id;
  // Remove that specific element from array
  if (targetType === "button") {
    organizations.splice(targetId,1);
  };
  // Re-print organizations array
  createCards(organizations, orgCard, '#org-objects-container');
};

// Listen for Button Clicks
const orgButtonEvents = () => {
  const fileName = location.pathname.split('/').slice(-1);
  if (fileName[0] === 'organizations.html') {
    document.querySelector("#new-org-btn").addEventListener("click",toggleOrgForm);
    document.querySelector("form").addEventListener("submit",submitOrgForm);
    document.querySelector("#org-objects-container").addEventListener("click",removeOrg);
  }
};
// MG - End Org Page Functions

// Gabby - projects page
const projectCards = (projects) => {
  return `<div class="card-body">
      <div>
        <h5 class="card-title">${projects.name}</h5>
        <p class="card-text fs-6"> Updated 1 mimute ago </p>
      </div>
      <p class="card-text">${projects.description}</p>
      <p class="card-text" id="dots">...</p>
    </div>
</div>`;
};

const projectsForm = () => {
  let formString = `<form>
  <div class="mb-3">
    <div class='form-text fs-3 new-project'>Create a new project</div>
    <div class='form-text'>Coordinate, track and update all in one place, so projects stay transparent and on schedule</div>
    <hr/>
    <label for="projectsForm" class="form-label mt-2 fw-bold new-project">Project board name</label>
    <input type="text" class="form-control bg-transparent border border-secondary w-50 text-secondary" id="project-board-name" aria-describedby="projectBoardNameHelp" placeholder="Example" required>
  </div>
  <div class="mb-3">
    <label for="projectDescription" class="form-label fw-bold new-project">Description (optional)</label>
    <input type="text" class="form-control bg-transparent border border-secondary pb-5 text-secondary" id="project-description">
  </div>
  <button type="submit" class="btn btn-success">Create project</button>
</form>`;

  printToDom('#project-form', formString);
  document.querySelector('form').addEventListener('submit', projectsFormInfo);
};

// Gabby - updating projects when form is filled in
const projectsFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-board-name').value;
  const description = document.querySelector('#project-description').value;

  const obj = {
    name,
    description,
  };
  projects.push(obj);
  createCards(projects, projectCards, '#project-container');
  //This will have to call onProjectsPage instead of createcards after PR is approved
  document.querySelector('form').reset();
};

// Runs page's functions
const pageInit = () => {
  const fileName = location.pathname.split('/').slice(-1);

  if (fileName[0] === 'repos.html') {
    buildReposPage();
    repoEvents();
  } else if (fileName[0] === '') {
    createCards(pins, pinCard, '#pin-container');
    pinButtonEvent();
  } else if (fileName[0] === 'packages.html') {
    createCards(packages, packageCardString, '#package-container');
    document
      .querySelector('#create-package')
      .addEventListener('click', packageMaker);
    document
      .querySelector('#package-container')
      .addEventListener('click', deletePackage);  
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
  orgButtonEvents();
};

init();
