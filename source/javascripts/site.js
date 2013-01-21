var map = L.map('map').setView([36.050, -80.010], 11);
L.tileLayer('http://{s}.tile.cloudmade.com/727e306130b84f73be86e972a5d5914f/997/256/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
      maxZoom: 18
}).addTo(map);
//var marker = L.marker([36.067, -80.013]).addTo(map);
var polygon = L.polygon([
												//High Point
												[35.981, -79.996],
												//Winston Salem
												[36.085, -80.253],
												//Greensboro
												[36.058, -79.791]
]).addTo(map);
//marker.bindPopup("The Triad").openPopup();
