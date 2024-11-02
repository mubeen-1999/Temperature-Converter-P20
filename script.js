document.getElementById('convertButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result;

    if (isNaN(temperature) || !fromUnit || !toUnit) {
        document.getElementById('result').innerText = "Please enter valid inputs.";
        return;
    }

    // Conversion logic
    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === "Celsius") {
        result = toUnit === "Fahrenheit" ? (temperature * 9/5) + 32 : temperature + 273.15;
    } else if (fromUnit === "Fahrenheit") {
        result = toUnit === "Celsius" ? (temperature - 32) * 5/9 : (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === "Kelvin") {
        result = toUnit === "Celsius" ? temperature - 273.15 : (temperature - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toUnit}`;
});


const elements = document.querySelectorAll('#temperature, #fromUnit, #toUnit');

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener('input', function() {
        const temp = document.getElementById('temperature').value;
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
        document.getElementById('convertButton').disabled = !(temp && fromUnit && toUnit);
    });
}

