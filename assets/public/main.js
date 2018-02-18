
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
      	` <div class="white-text ">
      	<h3>Santiago</h3>
      	<canvas id="ico" width="50" height="50"></canvas>
      	<h1>${Math.floor(data.currently.temperature)}°C</h1>
      	
      	<table class="centered responsive-table ">
        <thead>
          <tr>
              <th>Temperatura</th>
              <th>Viento</th>
              <th>Humedad</th>
              <th>Indic Uv</th>
              <th>Presión</th>
          </tr> 
       </thead>
        <tbody>
            <tr>
              <td>${Math.floor(data.currently.temperature)}°</td>
              <td>${data.currently.windSpeed}</td>
              <td>${data.currently.windSpeed}</td>
              <td>${data.currently.uvIndex}</td>
              <td>${data.currently.pressure}</td>
          </tr>
        </tbody>
         <hr>
       </table> 
        <hr>
       `
      	);
       const skycons = new Skycons({ 
        'color': '#fafafa',
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
	        //console.log(week);
	        for (let i in week) {
	          let date = new Date(week[i].time * 1000);
	          let day = days[date.getDay()];
	          //console.log(day);
            const skycons = new Skycons({
            'color': '#fafafa',
          });
          icon = week[i].icon;
          
          
	          $('#weekAll').append(`
              <table class="centered responsive-table ">
              <tbody> 
              <tr>
              
              <th></th>
              <td><canvas id="icon${[i]}" width="20" height="20"></canvas></td>
              <th>${day}</td>
              <td class="white-text"><i class="tiny material-icons white-text">arrow_downward</i>${Math.floor(week[i].temperatureMin)}°c </td>
               <td class="white-text"><i class="tiny material-icons white-text">arrow_upward</i>${Math.floor(week[i].temperatureMax)}°c </td>
          </tr></tbody></table> `


              // <div class="col s4 "></div>
              //       <div class="col s4 "></div>
              //       <div class="col s2 "></div>
              //       <div class="col s2"></div>`
	          );
          skycons.add(`icon${[i]}`, icon );
	    }
  skycons.play();
	  }
    });
};
