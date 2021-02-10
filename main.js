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
  }
];
// Start arrays
const organizations = [
  {
    img: "images/orgImgs/oi_nss.png",
    name: "nss-evening-cohort-14",
    repos: 30,
  },
  {
    img: "images/orgImgs/oi_org1.png",
    name: "React Ladies",
    repos: 32,
  },
  {
    img: "images/orgImgs/oi_org2.png",
    name: "TN Code Pros",
    repos: 20,
  },
  {
    img: "images/orgImgs/oi_org3.png",
    name: "Fortune 500 Devs",
    repos: 27,
  },
];

const repos = [
  {
    name: "example-repo",
    description: "This is an example of what a repository will look like.",
  },
  {
    name: "create-your-own-repo",
    description: "Use the form below to create repositories of your own.",
  },
];

const pins = [
  {
    name: "affirmation-generator",
    description:
      "This app randomly generates an affirmation statement. Built by React.js.",
  },
  {
    name: "github-clone",
    description: "Powered by HTML, CSS, Vanilla Javascript, Bootstrap.",
  },
  {
    name: "accessibility-hacks",
    description: "Snippets to enhance app accessibility.",
  },
  {
    name: "portfolio",
    description: "Personal portfolio site, deployed through Netlify.",
  },
];

//Stretch:
// Sponsors go on bottom of Profile section
// const sponsors = [
//   {

//   },
// ]
// End arrays

//Holly - pin favorite repo
const card = (item) => {
  return `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;" id="${item.id}">
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

// GABBY - PRINT TO DOM FUNCTION + LOOP FUNCTION
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createCards = (arr, id) => {
  //id of div
  let domString = document.querySelector(id).innerHTML;

  for (let item of arr) {
    domString += card(item);
  }
  printToDom(id, domString);
};
// start my code
// Create Profile Card
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
  <img src="images/profileImgs/pi_location.png" alt="pin drop image" />New York,New
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


// Gabby - projects page 
const projectCards = (projects) => {
  return `<div class="card">
  <h5 class="card-header"></h5>
  <div class="card-body">
    <h5 class="card-title">${projects.name}</h5>
    <p class="card-text">${projects.description}</p>
  </div>
</div>`
};


// end projects page 
const init = () => {
  printToDom("#profile-card", profileString)
  createCards(projects, projectCards, '#project-container');
  createCards(pins, "#pins");
};

init();
