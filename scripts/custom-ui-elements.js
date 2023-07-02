L.Control.home = L.Control.extend({
    options: {
        position: 'bottomright',
        infoText: '<img class="home" src="res/img/home.png">',
        infoTitle: 'Startansicht',
    },
    onAdd: function () {
        var controlName = 'home-btn',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
            options = this.options;

        this._homeButton = this._createButton(options.infoText, options.infoTitle,
            controlName, container, this._home);

        return container;
    },
    _home: function () {
        map.flyToBounds(nps.getBounds());
    },
    _createButton: function (html, title, className, container, fn) {
        var link = L.DomUtil.create('a', className, container);
        link.innerHTML = html;
        link.href = '#';
        link.title = title;

        L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);

        return link;
    }
});


const home = new L.Control.home();
home.addTo(map);