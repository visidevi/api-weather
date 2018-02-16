
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
      	<h2 class="">Santiago</h2>
      	<canvas class="clear-day" width="300"></canvas>
      	<p>Temperatura = ${Math.floor(data.currently.temperature)}°,
      		Viento = ${data.currently.windSpeed},
      		Humedad = ${data.currently.humidity},
      		Indice Uv = ${data.currently.uvIndex},
      		Presión = ${data.currently.pressure} </p>
      		<canvas class="' + skiconsCurrent + '"></canvas>
      		 <a href="" class="btn waves-effect waves-light white black-text pulse">Recargar</a>`
      	);
    });
};