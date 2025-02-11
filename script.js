const container = document.getElementById("container");
const values = ["5%", "10%", "15%", "25%", "50%", "75%"];

for (let i = 0; i < values.length; i++) {
  let card = document.createElement("div");
  card.innerText = values[i];
  card.classList.add("card1");
  card.addEventListener("click", function () {
    UpdateTipAmount(parseFloat(values[i])); // Convert "10%" to 10
  });
  container.appendChild(card);
}

const Amount = document.querySelector(".amount");
const customtip = document.querySelector(".customTip");
const numOfpeople = document.querySelector(".numOfpeople");
const tipAmountDisplay = document.getElementById("Tip");
const totalBillDisplay = document.getElementById("total");
const eachPersonBillDisplay = document.getElementById("each-person");

function Totalbill(OrderdAmount, TipPercentage) {
  return OrderdAmount + (OrderdAmount * TipPercentage) / 100;
}

function UpdateTipAmount(selectedTip = null) {
  let billAmount = parseFloat(Amount.value.replace("₹", "").trim());
  let tipPercentage = selectedTip
    ? selectedTip
    : parseFloat(customtip.value) || 0;
  let numPeople = parseInt(numOfpeople.value) || 1;

  if (isNaN(billAmount) || billAmount <= 0) {
    alert("Please enter a valid bill amount.");
    return;
  }

  let tipAmount = (billAmount * tipPercentage) / 100;
  let totalBill = Totalbill(Amount, tipPercentage);
  let eachPersonBill = totalBill / numPeople;

  tipAmountDisplay.innerText = `Tip Amount: ₹ ${tipAmount.toFixed(2)}`;
  totalBillDisplay.innerText = `Total Bill: ₹ ${totalBill.toFixed(2)}`;
  eachPersonBillDisplay.innerText = `Each Person: ₹ ${eachPersonBill.toFixed(
    2
  )}`;
}

// Event listeners for custom tip and number of people input
customtip.addEventListener("input", () => UpdateTipAmount());
numOfpeople.addEventListener("input", () => UpdateTipAmount());
Amount.addEventListener("input", () => UpdateTipAmount());
