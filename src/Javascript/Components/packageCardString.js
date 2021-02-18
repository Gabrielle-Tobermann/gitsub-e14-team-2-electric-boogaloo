const packageCardString = (item, i) => {
  return `<div class="card border-secondary m-2 bg-transparent" style="width: 20rem; height: 18rem;" id="${i}">
            <div class="card-body text-secondary">
              <img src="${item.iconImgSrc}" style="width: 3rem; height: 3rem;">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
            </div>
            <div class="d-flex flex-wrap mt-auto mx-auto mb-3" id="package-buttons">
                <button type="button" class="btn btn-secondary m-1">Learn More</button>
                <button type="button" class="btn btn-danger m-1" id="${i}">Delete</button>
            </div>
          </div>`;
};

export default packageCardString;
