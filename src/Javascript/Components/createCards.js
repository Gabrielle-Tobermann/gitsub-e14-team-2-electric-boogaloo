
const createCards = (arr, card, id) => {
  let domString = "";

  for (let [i, item] of arr.entries()) {
    domString += card(item, i);
  }
  printToDom(id, domString);
};

export default createCards;
