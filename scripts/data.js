const nps = new L.geoJson.ajax("res/geodata/nps.geojson", {
    onEachFeature: function (feature, layer) {
        layer.bindPopup(feature.properties.name);
    },
    style: {
        color: '#03682a'
    }
});