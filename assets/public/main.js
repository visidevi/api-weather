
function randombg() {
  var random = Math.floor(Math.random() * 6) + 0;
  var bigSize = [
    "url('./assets/img/city0.jpg')",
    "url('./assets/img/city1.jpg')",
    "url('./assets/img/city2.jpg')",
    "url('./assets/img/city0.jpg')",
    "url('./assets/img/city1.jpg')"];
  document.getElementById('random').style.backgroundImage = bigSize[random];
}
randombg();
(function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
})();


function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  fetch(`https://api.darksky.net/forecast/10dab22d21d6e22b3182546855456e74/${lat},${long}?units=auto`)
  		.then(function(response) {
    // Turns the the JSON into a JS object
      return response.json();
    })
    .then(function(data) {
      console.log(data);  
      $('#dayAll').append(
      	` <div class="white-text">
      	<h3>Santiago</h3>
      	<canvas id="ico" width="20" height="20"></canvas>
      	<h1>${Math.floor(data.currently.temperature)}°C</h1>
      	
      	<table class="center-aling">
        <thead>
          <tr>
              <th>Temperatura</th>
              <td>Viento</td>
              <td>Humedad</td>
              <td>Indic Uv</td>
              <td>Presión</td>
          </tr>
            <tr>
              <th>${Math.floor(data.currently.temperature)}°</th>
              <td>${data.currently.windSpeed}</td>
              <td>${data.currently.windSpeed}</td>
              <td>${data.currently.uvIndex}</td>
              <td>${data.currently.pressure}</td>
          </tr>
        </thead>
       </table> 
       `
      	);
       const skycons = new Skycons({ 
        'color': 'white',
      });
      skycons.add("ico", `${data.currently.icon}`);
      skycons.play();
      timeW();

      //console.log(data.daily.data)
     
      // for (let i = 7; i < week.length; i++) {
      // 	let dayyy = week[i].time;
      // 	let getDate = new Date(day * 1000);
      // 	//let dayOfW = getDate.split('');
      // 	console.log(JSON.stringify(getDate));
      // 	console.log(Object.keys(JSON.stringify(getDate)));


	     function timeW() {
	     	let days = [
	          "Sunday",
	          "Monday",
	          "Tuesday",
	          "Wednesday",
	          "Thursday",
	          "Friday",
	          "Saturday"
	        ];

	        let week = data.daily.data;
	        console.log(week);
	        for (let i in week) {
	          let date = new Date(week[i].time * 1000);
	          let day = days[date.getDay()];
	          console.log(day);
	          $('#weekAll').append(
	          	` <div class="col s6 white-text">
                                    <table>
                                    <tbody>
                                    <tr>
                                    <td><canvas class="" id="${week[i].icon}" width="10" height="10"></canvas> ${day}</td>
                                    <td><i class="Tiny material-icons" style="font-size: 18px;">arrow_downward</i>
                                    ${Math.floor(week[i].temperatureMin)}°c
                                   <i class="Tiny material-icons" style="font-size: 18px;">arrow_upward</i>
                                    ${Math.floor(week[i].temperatureMax)}°c
                                    </td>
                                    </tr>
                                    </div>`
	          );
	     const skycons = new Skycons({
        'color': 'green',
      });
      skycons.add(`${week[i].icon}`, `${week[i].icon}`);
      skycons.play();

	    }
	  }
    });
};
