      // Array bitore tempaserh weather data rakha
const weatherData = [
    { district: "Dhaka", temperature: 32, condition: "Sunny", image: "images/sunny.png" },
    { district: "Sylhet", temperature: 27, condition: "Cloudy", image: "images/cloudy.png" },
    { district: "Khulna", temperature: 30, condition: "Rainy", image: "images/rainy.png" }
];


function showWeather() {
    const selectedDistrict = document.getElementById("district").value;
    const error = document.getElementById("error");
    const image = document.getElementById("weather-img");
    const temp = document.getElementById("temp");

    // Reset
    error.textContent = "";
    image.style.display = "none";
    temp.style.display = "none";

    if (selectedDistrict === "") {
        error.textContent = "⚠ Please select a district!";
        return;
    }

    // Find data
    const result = weatherData.find(item => item.district === selectedDistrict);

    if (result) {
        image.src = result.image;
        image.style.display = "block";


        temp.textContent = "Temperature: " + result.temperature + "°C";
        temp.style.display = "block";
    }
}
