
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
function getLocation() {
    if (navigator.geolocation) {        
        navigator.geolocation.getCurrentPosition(showPosition);
        console.log(getCurrentPosition());
    } else {
        alert('Tu navegador no soporta geolocalizacion');
    }
  
}
function showPosition(position) {
    const coords = `https://api.darksky.net/forecast/10dab22d21d6e22b3182546855456e74/${position.coords.latitude},${position.coords.longitude}?units=auto`;  
    console.log(coords); 
    getWeather(coords);
}
console.log(getLocation());
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
    });
};