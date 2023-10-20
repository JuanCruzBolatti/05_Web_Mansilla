// LeaftletJS Map
var map = L.map('map').setView([-34.7217851, -58.3744177], 16);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map); 
var marker = L.marker([-34.7217851, -58.3744177]).addTo(map);
marker.bindPopup("<b class='leafletb'>Direccion</b><br>Calle 1234").openPopup();