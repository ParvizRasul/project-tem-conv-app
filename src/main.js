import { celsiusToFahrenheit, fahrenheitToCelsius } from './converter.js';

const form = document.querySelector('#converterForm');
const tempValue = document.getElementById('tempValue');
const tempType = document.getElementById('tempType');
const result = document.getElementById('result');

const C2F = 'c2f';
const F2C = 'f2c';

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const currentTempValue = tempValue.value;
  const conversionType = tempType.value;

  let output;

  if (currentTempValue === '') {
    result.textContent = "Please enter a valid temperature value!";
    return;
  }

  
  if (conversionType === C2F) {
    const fahrenheit = celsiusToFahrenheit(currentTempValue);
    output = `${currentTempValue}°C = ${fahrenheit}°F`;
  } else if (conversionType === F2C) {
    const celsius = fahrenheitToCelsius(currentTempValue);
    output = `${currentTempValue}°F = ${celsius}°C`;
  }

  result.textContent = output;
});
