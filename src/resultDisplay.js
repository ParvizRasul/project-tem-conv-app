import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converter";

const button = document.getElementById('btn');
const form = document.getElementById('converterForm');


button.addEventListener('click', (e) => {
    e.preventDefault();

    const tempValue = parseFloat(document.getElementById('tempValue').value);
    const tempType = document.getElementById('tempType').value;
    let result;


    if (isNaN(tempValue)) {
        document.getElementById('result').textContent = "Please enter a valid number!";
        return;
    }

    if (!tempType) {
        document.getElementById('result').textContent = "Please select a conversion type!";
        return;
    }

    if (tempType === "c2f") {
        result = `${tempValue}°C = ${celsiusToFahrenheit(tempValue)}°F`;
    } else if (tempType === "f2c") {
        result = `${tempValue}°F = ${fahrenheitToCelsius(tempValue)}°C`;
    } else {
        result = "Invalid conversion type selected.";
    }

    document.getElementById('result').textContent = result;
});
