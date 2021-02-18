const projectCards = (item) => {
  return `<div class="card-body">
      <div>
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text fs-6">${item.date}</p>
      </div>
      <p class="card-text">${item.description}</p>
      <p class="card-text" id="dots">...</p>
    </div>
</div>`;
};

export default projectCards;
