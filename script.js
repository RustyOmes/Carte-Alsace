// Initialiser la carte
var map = L.map('map').setView([48.580002, 7.750000], 10); // Coordonnées pour centrer la carte sur l'Alsace

// Ajouter une couche de tuiles (tiles) OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter des points d'intérêt (exemples)
var pointsOfInterest = [
    {
        name: "Cathédrale Notre-Dame de Strasbourg",
        lat: 48.5810,
        lon: 7.7500,
        description: "Une cathédrale gothique renommée."
    },
    {
        name: "Château du Haut-Koenigsbourg",
        lat: 48.2494,
        lon: 7.3444,
        description: "Un château fort médiéval."
    }
];

pointsOfInterest.forEach(function(point) {
    L.marker([point.lat, point.lon]).addTo(map)
        .bindPopup("<b>" + point.name + "</b><br>" + point.description);
});

var pointsOfInterest = [
    {
        name: "Cathédrale Notre-Dame de Strasbourg",
        lat: 48.5810,
        lon: 7.7500,
        description: "Une cathédrale gothique renommée."
    },
    {
        name: "Château du Haut-Koenigsbourg",
        lat: 48.2494,
        lon: 7.3444,
        description: "Un château fort médiéval."
    },
    // Ajoute d'autres points ici
    {
        name: "Musée Unterlinden",
        lat: 48.0800,
        lon: 7.3580,
        description: "Un musée d'art à Colmar."
    }
];
