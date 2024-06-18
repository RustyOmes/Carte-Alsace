body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    margin: 20px;
}

#map {
    width: 80%;
    max-width: 1000px;
    height: 600px;
    margin-bottom: 20px;
}
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
