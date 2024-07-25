function calculatePerKg(price, weight) {
  let priceNum = parseFloat(price.replace(/[^0-9.]/g, ""));
  let weightNum = parseFloat(weight.replace(/[^0-9.]/g, ""));

  if (weight.includes("kg")) {
    weightNum *= 1000; // convert kg to grams
  }

  let perKgRate = (priceNum / weightNum) * 1000;
  return perKgRate.toFixed(2);
}

function displayPerKgRate() {
  let items = document.querySelectorAll(".grocery-item"); // Change this selector to match your website

  items.forEach(item => {
    let price = item.querySelector(".price").innerText; // Change this selector to match your website
    let weight = item.querySelector(".weight").innerText; // Change this selector to match your website

    let perKgRate = calculatePerKg(price, weight);

    let perKgElement = document.createElement("div");
    perKgElement.className = "per-kg-rate";
    perKgElement.innerText = `Per Kg: ₹${perKgRate}`;
    
    item.appendChild(perKgElement);
  });
}

window.onload = displayPerKgRate;
