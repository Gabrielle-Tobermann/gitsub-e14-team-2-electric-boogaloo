const repoCard = (item) => {
  
  return `<div class="repo-card w-100 bottom-border" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
  </div>`;
};

export default repoCard;  
