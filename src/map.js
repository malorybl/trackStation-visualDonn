// Initialisation de la carte
const map = L.map("map", {
    minZoom: 3,
    maxZoom: 9,
    center: [39.8283, -98.5795], // Centre géographique des USA
    zoom: 4
});

// Fond de carte en noir et blanc
L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; Stadia Maps, OpenMapTiles, OpenStreetMap contributors'
}).addTo(map);

// Charger le fichier JSON des rappeurs
fetch("/data/rappers.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const offsetMap = {}; // Pour gérer les doublons de coordonnées

        data.forEach(rapper => {
            const { name, city, latitude, longitude } = rapper;

            // Vérification des coordonnées
            if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
                console.warn(`Coordonnées invalides pour ${name} (${city})`);
                return; // Ignore cette entrée
            }

            // Gestion des doublons de coordonnées
            const key = `${latitude},${longitude}`;
            if (!offsetMap[key]) {
                offsetMap[key] = 0;
            } else {
                offsetMap[key] += 0.0001; // Applique un léger décalage
            }

            const adjustedLat = latitude + offsetMap[key];
            const adjustedLon = longitude + offsetMap[key];

            // Créer un marqueur cercle
            const marker = L.circleMarker([adjustedLat, adjustedLon], {
                radius: 8,
                color: "purple",
                fillColor: "purple",
                fillOpacity: 0.7
            }).addTo(map);

            // Ajouter le tooltip (affiché au survol)
            marker.bindTooltip(
                `<strong>${name}</strong><br>${city}`,
                {
                    permanent: false,
                    direction: "top",
                    offset: [0, -10]
                }
            );
        });
    })
    .catch(error => {
        console.error("Erreur lors du chargement des données des rappeurs :", error);
    });