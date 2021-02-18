import createCards from '../../../Javascript/Components/createCards';
import repoCard from '../../../Javascript/Components/repoCard';

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

const favoriteRepos = [];

const buildReposPage = () => {
  createCards(repos, repoCard, "#reposContainer");
};

const repoFormSubmit = (e) => {
  e.preventDefault();

  const repoName = document.querySelector("#repoName").value;
  const repoDescription = document.querySelector("#repoDescription").value;

  document.querySelector("#repoName").value = "";
  document.querySelector("#repoDescription").value = "";

  const newRepo = {
    name: repoName,
    description: repoDescription,
  };

  repos.push(newRepo);
  buildReposPage();
};

const repoEvents = () => {
  document
    .querySelector("#repoForm")
    .addEventListener("submit", repoFormSubmit);
};

export { repos, favoriteRepos, buildReposPage, repoFormSubmit, repoEvents };
