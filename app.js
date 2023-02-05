import data from "./data.js"

const getElement = (element) => document.querySelector(element);

const cardsContainer = getElement(".card-container");
const pricingSwitch = getElement("#pricing")

//Reset checkbox
window.addEventListener("DOMContentLoaded", function () {
    pricingSwitch.checked = "true";
  });

//Render component cards 
const cards = data.map((item, index) => {
    const {plan, monthly, storage, users, sendMem} = item;
    let middleCard = index === 1 ? "middle-card" : "side-card";

    return `<div class="card ${middleCard}">
        <h2>${plan}</h2>
        <p class="currency d-flex">&dollar;<span class="price">${monthly}</span></p>
        <hr>
        <p>${storage} Storage</p>
        <hr>
        <p>${users} Users Allowed</p>
        <hr>
        <p>Send up to ${sendMem}</p>
        <hr>
        <button>Learn More</button>
    </div> `
}).join("");

cardsContainer.innerHTML = cards;

//Select card prices
const prices = [...cardsContainer.querySelectorAll(".price")]

//Add event
pricingSwitch.addEventListener("click", () => {
    let stateOfToggle = pricingSwitch.checked;
    checkPrice(stateOfToggle)
})

//Check the state of checkbox and display the correct price
const checkPrice = (state) => {
    prices.map((item, index) => {
        item.textContent = state ? data[index].monthly : data[index].annually
    })
}
