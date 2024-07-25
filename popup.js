document.getElementById("calculate").addEventListener("click", () => {
  let price = parseFloat(document.getElementById("price").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let unit = document.getElementById("unit").value;

  if (isNaN(price) || isNaN(weight) || weight === 0) {
    document.getElementById("result").innerText = "Please enter valid numbers.";
    return;
  }

  if (unit === "kg") {
    weight *= 1000; // convert kg to grams
  }

  let perKgRate = (price / weight) * 1000;
  document.getElementById("result").innerText = `Per Kg Rate: ₹${perKgRate.toFixed(2)}`;
});
