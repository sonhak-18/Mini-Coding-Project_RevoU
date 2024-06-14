function convertToFahrenheit() {
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value in Celsius");
        return;
    }
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerHTML = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
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
}

function resetForm() {
    document.getElementById("converter-form").reset();
    document.getElementById("result").innerHTML = "";
}

function openTab(tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("tab1").style.display = "block";
});
