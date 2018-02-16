
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
      $('#temp-container').append(
      	` <div class="white-text">
      	<h2>Santiago</h2>
      	<canvas id="ico" width="300"></canvas>
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
        <tbody>
          <tr>
            <td>Viento</td>
            <td>${data.currently.windSpeed}</td>
          </tr>
          <tr>
            <td>Humedad</td>
            <td>${data.currently.humidity}</td>
          </tr>
          <tr>
          	<td>Indic Uv</td>
          	<td>${data.currently.uvIndex}</td>
 		</tr>
            <td>Presión</td>
            <td>${data.currently.pressure}</td>
          </tr>
        </tbody>
       </table>`
      	);
       const skycons = new Skycons({ 
        'color': '#f9fbe7',
      });
      skycons.add("ico", `${data.currently.icon}`);
      skycons.play();
    });
};