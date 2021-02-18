const orgCard = (item, i) => {
  let printFavs = favRepoString(item.topFive);
  return `<div class="card bg-transparent">
            <div class="card-body d-flex flex-row border border-2 border-dark rounded">
              <div>
                <img src=${item.img} alt="${item.name} logo">
              </div>
              <div class="text-center align-self-center px-2">
                <h6 class="card-subtitle" style="color:#58A6FF">${item.name}</h6>
              </div>
              <div class="align-self-center" style="font-size:13px">  
                member and collaborator on ${item.repos} repositories
                <br> ${printFavs}
              </div>
              <button id = "${i}" type="button" class="btn btn-dark btn-sm ml-3 ms-auto" style="color:#C9D1D4">Leave</button>
            </div>    
          </div>`;
};

export default orgCard;
