import createCards from '../../../Javascript/Components/createCards';
import pinCard from '../../../Javascript/Components/pinCard';

const pins = [
  {
    name: "🖥️ affirmation-generator",
    description:
      "This app randomly generates an affirmation statement. Built by React.js.",
    id: "aaa",
  },
  {
    name: "🖥️ github-clone",
    description: "Powered by HTML, CSS, Vanilla Javascript, Bootstrap.",
    id: "bbb",
  },
  {
    name: "🖥️ accessibility-hacks",
    description: "Snippets to enhance app accessibility.",
    id: "ccc",
  },
  {
    name: "🖥️ m0nicas-portfolio",
    description: "Personal portfolio site, deployed through Netlify.",
    id: "ddd",
  },
];

const removePin = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button" && targetId.includes("remove")) {
    const id = targetId.split("-")[1];
    const pinToDelete = pins.find((pin) => pin.id === id);
    const deleteIndex = pins.indexOf(pinToDelete); //we have to do this by index

    pins.splice(deleteIndex, 1);
    createCards(pins, pinCard, "#pin-container");
    resetEventListenersForPins()
  }
};

//Without this function, removePin only removes one item from the array. It looks like it works, but it doesn't. SSOOO we need to reset those event listeners so we can run it again!
const resetEventListenersForPins = () => {
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .removeEventListener("click", (e) => removePin(e))
  );
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
};

const submitPinnedCard = (e) => {
  e.preventDefault();

  const name = document.querySelector("#text-input").value;
  const description = document.querySelector("#pin-description").value;
  const id = 1;

  const newPin = {
    name,
    description,
    id,
  };

  pins.push(newPin);
  createCards(pins, pinCard, "#pin-container");
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
  document.querySelector("form").reset();
};

const pinButtonEvent = () => {
  document
    .querySelector("#pin-form")
    .addEventListener("submit", submitPinnedCard);
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e)) 
  );
};


export { pins, removePin, resetEventListenersForPins, submitPinnedCard, pinButtonEvent };
