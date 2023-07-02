const map = L.map('map', {
    layers: [openStreetMap_DE, nps],
    zoomControl: false
});

nps.on("data:loaded", function(){
    map.fitBounds(nps.getBounds());
});

const basemaps = {
    "OpenStreetMap": openStreetMap_DE
};

const overlays = {
    "National Parks": nps
};