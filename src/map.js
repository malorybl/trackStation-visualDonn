// Initialiser la carte centrée sur l'Amérique du Nord
let map = L.map('map', {
    minZoom: 3,
    maxZoom: 7,
    center: [55, -95], // Ajusté pour voir USA & Canada
    zoom: 4
});

// Ajouter une couche de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Stockage des rappeurs par ville
let rappersByCity = {};

// Récupérer les données de l'API et afficher les points sur la carte
fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/rapworld/records?where=country%20in%20(%22USA%22,%20%22Canada%22)&select=name,city,geo_point_2d")
  .then(response => response.json())
  .then(data => {
      data.records.forEach(rapper => {
          let { name, city, geo_point_2d } = rapper.fields; // Utilisation de `fields` pour accéder aux données
          if (geo_point_2d && Array.isArray(geo_point_2d)) {
              let [lat, lon] = geo_point_2d; // Extraire latitude et longitude

              // Grouper les rappeurs par ville
              let coords = `${lat},${lon}`;
              if (!rappersByCity[coords]) {
                  rappersByCity[coords] = { city: city || "Ville inconnue", names: [] };
              }
              rappersByCity[coords].names.push(name || "Nom inconnu");
          }
      });

      // Ajouter les marqueurs sur la carte
      Object.keys(rappersByCity).forEach(coords => {
          let [lat, lon] = coords.split(',').map(Number);
          let rappers = rappersByCity[coords];

          let marker = L.circleMarker([lat, lon], {
              radius: 6,
              color: "red",
              fillColor: "#f03",
              fillOpacity: 0.8
          }).addTo(map);

          // Ajouter une info-bulle au survol de la souris
          marker.bindTooltip(
              `<b>${rappers.city}</b><br>${rappers.names.join(", ")}`,
              { permanent: false, direction: "top" }
          );
      });
  })
  .catch(error => console.error("Erreur lors de la récupération des données :", error));