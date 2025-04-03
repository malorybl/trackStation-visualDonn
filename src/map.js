// Initialisation de la carte
const map = L.map("map", {
    minZoom: 3,
    maxZoom: 7,
    center: [39.8283, -98.5795], // Centre géographique des USA
    zoom: 4
  });
  
  // Fond de carte en noir et blanc

  L.tileLayer("https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; Stadia Maps, OpenMapTiles, OpenStreetMap contributors'
  }).addTo(map);
  
  // Charger le fichier JSON des rappeurs
  fetch("/data/rappers.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(rapper => {
        const { name, city, latitude, longitude } = rapper;
  
        // Créer un marqueur cercle
        const marker = L.circleMarker([latitude, longitude], {
          radius: 8,
          color: "purple",
          fillColor: "purle",
          fillOpacity: 0.8
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
  