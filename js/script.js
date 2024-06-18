function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value in Celsius");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    document.getElementById("calculation-box").innerHTML = `Calculation: (${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(2)}`;
}

function convertToCelsius() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Please enter a value in Fahrenheit");
        return;
    }
    let celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("result").innerHTML = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    document.getElementById("calculation-box").innerHTML = `Calculation: (${fahrenheit} - 32) × 5/9 = ${celsius.toFixed(2)}`;
}

function resetForm() {
    document.getElementById("converter-form").reset();
    document.getElementById("result").innerHTML = "";
    document.getElementById("calculation-box").innerHTML = "";
}
