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

// Array of package objects
const packages = [
  {
   name: "Docker",
   description: "A software platform used for building applications based on containers — small and lightweight execution environments.",
   iconImgSrc: "packagesIcons/Docker.png",
   id: 0,
  },
  {
   name: "Apache Maven",
   description: "A default package manager used for the Java programming language and the Java runtime environment.",
   iconImgSrc: "packagesIcons/Apache-Maven.png",
   id: 1,
  },
  {
   name: "NuGet",
   description: "A free and open source package manager used for the Microsoft development platforms including .NET.",
   iconImgSrc: "packagesIcons/NuGet.png",
   id: 2,
  },
  {
   name: "RubyGems",
   description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
   iconImgSrc: "packagesIcons/RubyGems.png",
   id: 3,
  },
  {
   name: "npm",
   description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
   iconImgSrc: "packagesIcons/npm.png",
   id: 4,
  },
  {
   name: "Containers",
   description: "A single place for your team to manage Docker images and decide who can see and access your images.",
   iconImgSrc: "packagesIcons/Containers.png", 
   id: 5,
   },
];

// HTML string of Package cards to be printed to DOM
const packageCardString = (item) => { 
  return `<div class="card border-secondary mb-3 bg-transparent" style="max-width: 18rem;" id="${item.id}">
            <div class="card-body text-secondary">
              <img src="${item.iconImgSrc}">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
              <button type="button" class="btn btn-secondary">Learn More</button>
              <button type="button" class="btn btn-danger" id="${item.id}">Delete</button>
            </div>
          </div>`
};

// Stretch: Delete Packages **** NOT FUNCTIONING YET*****
// const deletePackage = (e) => {
//   let targetId = e.target.id;
//   let targetType = e.target.type;
  
//   console.log(targetId);
  
//   if (targetType === "button") {
//       packages.splice(targetId, 1);
//     } else {
//       createCards(packages, packageCardString, "#package-container"); 
//     }
//   createCards(packages, packageCardString, "#package-container"); 
// }

// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint; 
}

// Create card function
const createCards = (arr, card, id) => {
  let domString = '';

  for (let item of arr) {
  domString += card(item);

  }
  printToDom(id, domString);
}

// HTML string for printing profile sidebar via printToDom function
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

// Functions triggered by mouse events 
const buttonEvents = () => {
  // Event listener for delete packages button
  document.querySelector("#package-container").addEventListener("click", deletePackage)
}
  
// Init function
const init = () => {
  printToDom("#profile-card", profileString);
  createCards(packages, packageCardString, "#package-container");
  buttonEvents();
}

init();
