const url = "http://www.mocky.io/v2/5bc3b9cc30000012007586b7";

window.addEventListener("load", () => {
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
      generateBlocks(data);
    });
});

const generateBlocks = (data) => {
  const section = document.querySelector(".all-cards");

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

    const btnTerms = document.createElement("button");
    btnTerms.classList.add("bt-terms");
    btnTerms.innerHTML = "Terms & Conditions";
    newDiv.appendChild(btnTerms);

    const btnJoin = document.createElement("button");
    btnJoin.classList.add("btn-join");
    btnJoin.innerHTML = "Join Now";
    newDiv.appendChild(btnJoin);

    section.appendChild(newDiv);
  })
}