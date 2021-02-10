// Start arrays
const organizations = [
  {
    img:"images/orgImgs/oi_nss.png",
    name:"nss-evening-cohort-14",
    repos:30,
  },
  {
    img:"images/orgImgs/oi_org1.png",
    name:"React Ladies",
    repos:32,
  },
  {
    img:"images/orgImgs/oi_org2.png",
    name:"TN Code Pros",
    repos:20,
  },
  {
    img:"images/orgImgs/oi_org3.png",
    name:"Fortune 500 Devs",
    repos:27,
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

//Stretch:
// Sponsors go on bottom of Profile section
// const sponsors = [
//   {

//   },
// ]
// End arrays

// GABBY - PRINT TO DOM FUNCTION + LOOP FUNCTION 
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const createCards = (arr, card, id) => {
  let domString = '';

  for (let item of arr) {
  domString += card(item);

  }
  printToDom(id, domString);
};


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
  <!-- Print Images of Sponsors Object Here -->`
  
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

const pageInit = () => {
  const fileName = location.pathname.split('/').slice(-1);

  if (fileName[0] === 'repos.html') {
    buildReposPage();
  }
};

const init = () => {
  printToDom('#profile-card', profileString);
  pageInit();
};

init();
