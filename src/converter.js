//  - (°C → °F): `F = (C * 9/5) + 32`
//   - (°F → °C): `C = (F - 32) * 5/9`

// Convert Celsius to Fahrenheit
export function celsiusToFahrenheit(celsius) {
    const c = Number(celsius);
    return (c * 9/5) + 32;
}

// Convert Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
    const f = Number(fahrenheit); 
    return Math.round((f - 32) * 5 / 9);
}
