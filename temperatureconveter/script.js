function convertTemperature() {
    var temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    var unitSelect = document.getElementById('unitSelect');
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultElement = document.getElementById('result');

    if (isNaN(temperatureInput)) {
        resultElement.innerText = 'Please enter a valid number.';
        return;
    }
    var convertedTemperature;
    var resultUnit;
    if (selectedUnit === 'celsius') {
        convertedTemperature = temperatureInput;
        resultUnit = 'Celsius';
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultUnit = 'Fahrenheit';
    } else if (selectedUnit === 'kelvin') {
        convertedTemperature = temperatureInput + 273.15;
        resultUnit = 'Kelvin';
    }
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
}
