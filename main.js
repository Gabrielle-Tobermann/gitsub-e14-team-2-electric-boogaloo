// GABBY - PRINT TO DOM FUNCTION + LOOP FUNCTION 
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

const createCards = (arr, card, id) => {
  let domString = '';

  for (let i=0; i < arr.length; i++) {
    domString += card;
  }
  printToDom(id, domString);

}
