import createCards from '../../../Javascript/Components/createCards';
import packageCardString from '../../../Javascript/Components/packageCardString';
 
const packages = [
  {
    name: "Docker",
    description:
      "A software platform used for building applications based on containers — small and lightweight execution environments.",
    iconImgSrc: "packagesIcons/Docker.png",
  },
  {
    name: "Apache Maven",
    description:
      "A default package manager used for the Java programming language and the Java runtime environment.",
    iconImgSrc: "packagesIcons/Apache-Maven.png",
  },
  {
    name: "NuGet",
    description:
      "A free and open source package manager used for the Microsoft development platforms including .NET.",
    iconImgSrc: "packagesIcons/NuGet.png",
  },
  {
    name: "RubyGems",
    description:
      "A standard format for distributing Ruby programs and libraries used for the Ruby programming language.",
    iconImgSrc: "packagesIcons/RubyGems.png",
  },
  {
    name: "npm",
    description:
      "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.",
    iconImgSrc: "packagesIcons/npm.png",
  },
  {
    name: "Containers",
    description:
      "A single place for your team to manage Docker images and decide who can see and access your images.",
    iconImgSrc: "packagesIcons/Containers.png",
  },
];

const packageMaker = (e) => {
  e.preventDefault();

  const name = document.querySelector("#package-name").value;
  const description = document.querySelector("#package-description").value;
  const iconImgSrc = document.querySelector("#package-img-src").value;

  const newPackage = {
    name,
    description,
    iconImgSrc,
  };

  if (!name) {
    alert("Please input name");
  } else {
    packages.push(newPackage);
    createCards(packages, packageCardString, '#package-container');
    document.querySelector('form').reset();
  }
};

const deletePackage = (e) => {
  let targetId = e.target.id;
  let targetType = e.target.type;

  if (targetType === "button") {
    packages.splice(targetId, 1);
  }
  createCards(packages, packageCardString, "#package-container");
};

export { packages, packageMaker, deletePackage };
