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
    },
    {
        name: "Musée Unterlinden",
        lat: 48.0800,
        lon: 7.3580,
        description: "Un musée d'art à Colmar."
    },
    {
        name: "La Petite France",
        lat: 48.5796,
        lon: 7.7392,
        description: "Un quartier historique de Strasbourg."
    },
    {
        name: "Mont Sainte-Odile",
        lat: 48.4421,
        lon: 7.4045,
        description: "Un lieu de pèlerinage avec vue panoramique."
    },
    {
        name: "Route des Vins d'Alsace",
        lat: 48.1667,
        lon: 7.3333,
        description: "Un itinéraire touristique à travers les vignobles alsaciens."
    },
    {
        name: "Musée Lalique",
        lat: 48.8726,
        lon: 7.2311,
        description: "Un musée dédié aux créations en cristal de René Lalique."
    },
    {
        name: "Château de Fleckenstein",
        lat: 49.0400,
        lon: 7.7503,
        description: "Un château médiéval dans le parc naturel des Vosges du Nord."
    },
    {
        name: "Écomusée d'Alsace",
        lat: 47.8620,
        lon: 7.2853,
        description: "Un musée en plein air présentant la vie rurale alsacienne."
    },
    {
        name: "Parc de l'Orangerie",
        lat: 48.5861,
        lon: 7.7721,
        description: "Un parc public à Strasbourg."
    },
    {
        name: "Château de Kaysersberg",
        lat: 48.1372,
        lon: 7.2644,
        description: "Un château en ruine avec une vue sur la vallée."
    }
];

pointsOfInterest.forEach(function(point) {
    L.marker([point.lat, point.lon]).addTo(map)
        .bindPopup("<b>" + point.name + "</b><br>" + point.description);
});
