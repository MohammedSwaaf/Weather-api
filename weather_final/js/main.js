/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather() {
    var zibCode = document.getElementById('zip').value;
    if (zibCode === '')
    {
        zibCode="1020";
    }
    var CP = "http://api.wunderground.com/api/3399f281599bca4b/conditions/q/"+zibCode+".json";
    var FP = "http://api.wunderground.com/api/3399f281599bca4b/forecast/q/"+zibCode+".json";

    // GET THE CONDITIONS
    weatherConditions.open('GET', CP , true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);

    // GET THE FORCAST
    weatherForecast.open('Get', FP, true);
    weatherForecast.responseType = 'text';
    weatherForecast.send(null);
}



weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById("location").innerHTML = cObj.current_observation.display_location.full;
        document.getElementById("weather").innerText = cObj.current_observation.weather;
        document.getElementById("temperature").innerText = cObj.current_observation.temp_f;

    } //end if
}; //end function



weatherForecast.onload = function() {
    if (weatherForecast.status === 200){
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById("desc").innerText = fObj.forecast.txt_forecast.forecastday[0].fcttext;

        document.getElementById("r1c1").innerText = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById("r1c3").innerText = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit+"*";
        document.getElementById("r1c4").innerText = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit+"*";
        var img = fObj.forecast.simpleforecast.forecastday[1].icon_url;
        document.getElementById('r1c2').src = img;

        document.getElementById("r2c1").innerText = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
        document.getElementById("r2c3").innerText = fObj.forecast.simpleforecast.forecastday[2].high.fahrenheit+"*";
        document.getElementById("r2c4").innerText = fObj.forecast.simpleforecast.forecastday[2].low.fahrenheit+"*";
        var img = fObj.forecast.simpleforecast.forecastday[2].icon_url;
        document.getElementById('r2c2').src = img;

        document.getElementById("r3c1").innerText = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
        document.getElementById("r3c3").innerText = fObj.forecast.simpleforecast.forecastday[3].high.fahrenheit+"*";
        document.getElementById("r3c4").innerText = fObj.forecast.simpleforecast.forecastday[3].low.fahrenheit+"*";
        var img = fObj.forecast.simpleforecast.forecastday[3].icon_url;
        document.getElementById('r3c2').src = img;
    } //end if
}; //end function

loadWeather();










