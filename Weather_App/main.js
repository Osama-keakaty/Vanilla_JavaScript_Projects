const apiKey = "5ca7983ee56652be4db155e66c416c14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector('input');
const searchButton = document.querySelector('button');
const weather = document.querySelector(".weather");
async function weatherCheck(city) {
    try {
        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
        if (response.ok) {
            let Data = await response.json();
            console.log(Data);
            console.log(Data.main);
            console.log(Data.main.temp);
            console.log(Data.name);
            console.log(Data.weather.main);
            document.querySelector(".temp").innerHTML = `${Math.round(Data.main.temp)}°C`;
            document.querySelector(".city").innerHTML = Data.name;
            document.querySelector(".humidity").innerHTML = Data.main.humidity;
            document.querySelector(".weather-icon").src = `images/${Data.weather[0].main}.png`;
            document.querySelector(".wind").innerHTML = Data.wind.speed + "km/h";
        } else {
            console.log("Error");
        }
    } catch (error) {
        console.log(error);
    }
}
searchButton.addEventListener("click", () => {
    weatherCheck(searchBox.value);
    searchBox.value = "";
    weather.style.cssText = "display: flex";
});