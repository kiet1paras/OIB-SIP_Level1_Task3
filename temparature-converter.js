document.getElementById("convert-btn").addEventListener("click", () => {
   const inputValue = document.getElementById("single-input").value;
   const selectedUnit = document.querySelector('input[name="unit"]:checked')?.value;
   const resultDiv = document.getElementById("result-display");

   if (inputValue === "" || isNaN(inputValue)) {
      resultDiv.textContent = "Please enter a valid number.";
      return;
   }

   const temp = parseFloat(inputValue);
   let resultText = "";

   switch (selectedUnit) {
      case "C":
         resultText = `Fahrenheit: ${(temp * 1.8 + 32).toFixed(2)} °F | Kelvin: ${(temp + 273.15).toFixed(2)} K`;
         break;
      case "F":
         resultText = `Celsius: ${((temp - 32) / 1.8).toFixed(2)} °C | Kelvin: ${(((temp - 32) / 1.8) + 273.15).toFixed(2)} K`;
         break;
      case "K":
         resultText = `Celsius: ${(temp - 273.15).toFixed(2)} °C | Fahrenheit: ${((temp - 273.15) * 1.8 + 32).toFixed(2)} °F`;
         break;
      default:
         resultText = "Please select a unit.";
   }

   resultDiv.textContent = resultText;
});
