const pinCard = (item) => {
  return `<div class="card text-white bg-dark mb-3 pin-card" style="max-width: 20rem;" id="${item.id}">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <div class="card-footer text-center font-weight-bolder justify-content-center" id="pinned">
        <button type="button" class="pin btn-large btn-dark m-1" id="pin-${item.id}">☆</button>
        </div>
        <div class="d-flex flex-wrap mt-auto mx-auto mb-3 justify-content-center" id="pin-buttons">
        <button type="button" class="remove-pin btn btn-danger btn-large m-1" id="remove-${item.id}">Remove pin</button>
        </div>
      </div>
    </div>`;
};

export default pinCard;
