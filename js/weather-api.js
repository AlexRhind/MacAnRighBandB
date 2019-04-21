// JavaScript Document

$(document).ready( function() {
	
	"use strict";

	let api = "http://api.openweathermap.org/data/2.5/weather?q="
	let city = "Kintra,GB"
	let apiKey = "&APPID=714a8c6560cf462618a438c1995bee19"
	let units = "&units=metric"

	const Url = api + city + apiKey + units;
	
		$.ajax({//$.get() and .load() are other ajax methods 
			url: Url, //string to requested page
			type: "GET", //Alias for method
			success: function(results){ //$.ajax event function(data object, text status, XMLHttpRequest object)
				
				console.log(results);
				console.log("results is  " + typeof results);//An object using ajax - no JSON.parse needed
				console.log("weather description is " + results.weather[0].description);
				console.log("main temp is  " + results.main.temp);
				console.log("weather icon is  " + results.weather[0].icon);
				
				const app = document.getElementById("weatherAPI");

				const icon = document.createElement("img");
					icon.src = 'http://openweathermap.org/img/w/' + results.weather[0].icon + '.png';
					icon.className="weatherIcon";

				const temperature = document.createElement("p");
					temperature.className="weatherDescription";
					temperature.textContent = "Temp: ";

				const tempSpan = document.createElement("span");
					tempSpan.className="mainTemp";
					tempSpan.textContent = parseInt(results.main.temp) + "°C"

				const description = document.createElement("p");
					description.className="weatherDescription";
					description.textContent = results.weather[0].description;

					app.appendChild(icon);
					app.appendChild(temperature);
						temperature.appendChild(tempSpan);//child of temp <p>
					app.appendChild(description);
			
			}, //end AJAX event
			error:function(error){//$.ajax event function(XMLHttpRequest object, "null||timeout||error||parseerror", "not Found||Internal server error etc")
				console.log('Error ${error}')
		}
	})
})
