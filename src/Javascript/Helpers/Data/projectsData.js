const projects = [
  {
    name: 'my-goals',
    description: 'No description',
    date: new Date('2021-01-30T03:32:00'),
  },
  {
    name: 'Team Project',
    description: 'goals for first team project',
    date: new Date('2020-12-01T08:00:00'),
  },
  {
    name: 'Personal Project',
    description: 'No description',
    date: new Date('2021-02-02T12:30:00'),
  },
  {
    name: 'Project 4',
    description: 'No description',
    date: new Date('2021-02-04T09:14:00'),
  },
  {
    name: 'NSS-goals',
    description: 'goals to achieve at NSS',
    date: new Date('2021-02-02T10:00:00'),
  },
];

const projectsFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-board-name').value;
  const description = document.querySelector('#project-description').value;
  const date = new Date();

  const obj = {
    name,
    description,
    date,
  };
  projects.push(obj);
  createCards(projects, projectCards, '#project-container');
  document.querySelector('form').reset();
  document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
};
//Gabby stretch goal - sort cards 
const sortProjectCards = (e) => {
  if (e.target.id === 'sort-btn') {
    sortedProjects = projects.sort((a, b) => b.date - a.date);
  };
  createCards(sortedProjects, projectCards, '#project-container');
};

export { projects, projectsFormInfo, sortProjectCards };
