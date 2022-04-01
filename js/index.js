const url = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7";
let globalData;
const section = document.querySelector(".all-cards");

window.addEventListener("load", () => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data.reverse());
      generateBlocks(data);
      globalData = data;
    });

  const allPromos = document.querySelector(".all-promos");
  allPromos.addEventListener("click", () => {
    while (section.firstChild) {
      section.removeChild(section.lastChild);
    }
    generateBlocks(globalData);
  });

  const newCustomersFilter = document.querySelector(".new-customers");
  newCustomersFilter.addEventListener("click", () => {
    filterBtns(globalData);
  });
});

const generateBlocks = (data) => {

  data.map(d => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("promotions");

    const newImg = document.createElement("img");
    newImg.setAttribute("src", "https://via.placeholder.com/500x300");
    newDiv.appendChild(newImg);

    const newHeading = document.createElement("h2");
    newHeading.classList.add("heading");
    newHeading.innerHTML = d.name;
    newDiv.appendChild(newHeading);

    const newTxt = document.createElement("p");
    newTxt.classList.add("desc-txt");
    newTxt.innerHTML = d.description;
    newDiv.appendChild(newTxt);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("btn-container");
    newDiv.appendChild(buttonsDiv);

    const btnTerms = document.createElement("button");
    btnTerms.classList.add("bt-terms");
    btnTerms.innerHTML = "Terms & Conditions";
    buttonsDiv.appendChild(btnTerms);


    const btnJoin = document.createElement("button");
    btnJoin.classList.add("btn-join");
    btnJoin.innerHTML = "Join Now";
    buttonsDiv.appendChild(btnJoin);

    section.appendChild(newDiv);

  })
}

let newCustomers = [];

const filterBtns = () => {
  let section = document.querySelector(".all-cards");

  while (section.firstChild) {
    section.removeChild(section.lastChild);
  }

  newCustomers = globalData.filter(d => {
    if (d.onlyNewCustomers === true) {
      return d.id;
    }
  });
  console.log(newCustomers);

  newCustomers.forEach(n => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("promotions");

    const newImg = document.createElement("img");
    newImg.setAttribute("src", "https://via.placeholder.com/500x300");
    newDiv.appendChild(newImg);

    const newHeading = document.createElement("h2");
    newHeading.classList.add("heading");
    newHeading.innerHTML = n.name;
    newDiv.appendChild(newHeading);

    const newTxt = document.createElement("p");
    newTxt.classList.add("desc-txt");
    newTxt.innerHTML = n.description;
    newDiv.appendChild(newTxt);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("btn-container");
    newDiv.appendChild(buttonsDiv);

    const btnTerms = document.createElement("button");
    btnTerms.classList.add("bt-terms");
    btnTerms.innerHTML = "Terms & Conditions";
    buttonsDiv.appendChild(btnTerms);


    const btnJoin = document.createElement("button");
    btnJoin.classList.add("btn-join");
    btnJoin.innerHTML = "Join Now";
    buttonsDiv.appendChild(btnJoin);

    section.appendChild(newDiv);
  });

  newCustomers = [];
}