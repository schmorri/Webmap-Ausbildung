const layercontrol = L.control.layers(basemaps, overlays, {
    collapsed: false
}).addTo(map);

L.control.scale({
    maxWidth: 150,
    imperial: false
}).addTo(map);

L.control.zoom({
    position: 'bottomright'
}).addTo(map);

const sidepanelLeft = L.control.sidepanel('mySidepanelLeft', {
    tabsPosition: 'left',
    startTab: 'tab-1'
}).addTo(map);