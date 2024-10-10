const apiKey = "5ca7983ee56652be4db155e66c416c14";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox = document.querySelector('input');
const searchButton = document.querySelector('button');
const weather = document.querySelector(".weather");
if (window.localStorage.getItem("city")){
    weatherCheck(window.localStorage.getItem("city"));
    weather.style.cssText = "display: flex";
}
async function weatherCheck(city) {
    try {
        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
        if (response.ok){
            
            let Data = await response.json();
            document.querySelector(".temp").innerHTML = `${Math.round(Data.main.temp)}°C`;
            document.querySelector(".city").innerHTML = Data.name;
            document.querySelector(".humidity").innerHTML = Data.main.humidity;
            document.querySelector(".weather-icon").src = `images/${Data.weather[0].main}.png`;
            document.querySelector(".wind").innerHTML = Data.wind.speed + "km/h";
            localStorage.setItem("city",city);
        } else {
           throw new Error("Connection Failed");
        }
    } catch (error) {
        console.error(error);
    }
}
searchButton.addEventListener("click", () => {
    weatherCheck(searchBox.value);
    searchBox.value = "";
    weather.style.cssText = "display: flex";
});