const organizations = [
  {
    img: "images/orgImgs/oi_nss.png",
    name: "nss-evening-cohort-14",
    repos: 30,
    topFive: ['productCards','petAdoption','sortingHat','gitSub','instaFam'],
  },
  {
    img: "images/orgImgs/oi_org1.png",
    name: "React Ladies",
    repos: 32,
    topFive: ['searchEngine','dataMapper','weatherApp','snowMap','gpsLocator'],
  },
  {
    img: "images/orgImgs/oi_org2.png",
    name: "TN Code Pros",
    repos: 20,
    topFive: ['trafficMap','liveMusicCalendar','restaurantRater','nhlStatsKeeper','barRaterApp'],
  },
  {
    img: "images/orgImgs/oi_org3.png",
    name: "Fortune 500 Devs",
    repos: 27,
    topFive: ['stockModel','facebookUserStats','tiktokAPI','blackRockFunds','appleOptimizer'],
  },
];

const favRepoString = (arr) => {
  let string = "Highlighted Repos:   ";
  for (i = 0; i < arr.length; i++) {
    string += `(${i+1})${arr[i]} `;
  }
  return string;
};

const toggleOrgForm = (e) => {
  const formStatus = document.querySelector("#org-form-container");

  if (formStatus.style.display == "none") {
    formStatus.style.display = "block";
  } else if (formStatus.style.display == "block") {
    formStatus.style.display = "none";
  }
};

const submitOrgForm = (e) => {
  // Prevent page refresh from form submission
  e.preventDefault();
  // Grab form name value
  const formName = document.querySelector("#org-text-input").value;
  // Create img array
  const imgArr = [
    "images/orgImgs/oi_nss.png",
    "images/orgImgs/oi_org1.png",
    "images/orgImgs/oi_org2.png",
    "images/orgImgs/oi_org3.png",
  ];
  // Generate random repos between 35 and 20
  const randomRepos = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
  // Create new object properties
  const img = imgArr[Math.floor(Math.random() * imgArr.length)];
  const name = formName;
  const repos = randomRepos;
  // Create generic top-five repos
  const topFive = ['favRepo1','favRepo2','favRepo3','favRepo4','favRepo5'];
  // Create new object
  const obj = {
    img,
    name,
    repos,
    topFive,
  };
  // Push object into organizations array
  organizations.push(obj);
  // Rebuild the DOM
  createCards(organizations, orgCard, "#org-objects-container");
  // Reset the form fields
  document.querySelector("form").reset();
};

const removeOrg = (e) => {
  // Capture type and Id of button click
  const targetType = e.target.type;
  const targetId = e.target.id;
  // Remove that specific element from array
  if (targetType === "button") {
    organizations.splice(targetId, 1);
  }
  // Re-print organizations array
  createCards(organizations, orgCard, "#org-objects-container");
};

export { organizations, favRepoString, toggleOrgForm, submitOrgForm, removeOrg };
