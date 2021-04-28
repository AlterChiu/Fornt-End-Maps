export class CreateMap {
  // create map
  constructor(containerID) {
    this.map = L.map(containerID);
    this.layer = {};
  }

  // setting mapCenter
  setCenter(lat, lon, zoom) {
    this.map.setView([lon, lat], zoom);
  }

  // base map
  //=================================================================================================
  addStreetLayer(maxZoom = 18) {
    this.layer["BASEMAP_STREETLAYER"] = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
        maxZoom: maxZoom,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    );

    this.layer["BASEMAP_STREETLAYER"].addTo(this.map);
  }

  addOutdoorLayer(maxZoom = 18) {
    this.layer["BASEMAP_OUTDOOR"] = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA", {
        maxZoom: maxZoom,
        id: "mapbox/outdoors-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    );

    this.layer["BASEMAP_OUTDOOR"].addTo(this.map);
  }

  addSatelliteLayer(maxZoom = 18) {
    this.layer["BASEMAP_SATELLITE"] = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
        maxZoom: maxZoom,
        id: "mapbox/satellite-streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    );

    this.layer["BASEMAP_SATELLITE"].addTo(this.map);
  }

  addMBTilesLayer(layerName, mbtileAddress, maxZoom = 18) {
    this.layer[layerName] = L.tileLayer
      .mbTiles(mbtileAddress, {
        minZoom: 0,
        maxZoom: maxZoom,
      })
      .addTo(this.map);

    this.layer[layerName].on('databaseloaded', function (ev) {
      console.info('MBTiles DB loaded', ev);
    });
    this.layer[layerName].on('databaseerror', function (ev) {
      console.info('MBTiles DB error', ev);
    });

  }

  addTestWMS() {
    var source = L.wms.source(
      "http://ows.terrestris.de/osm/service",
      {
          "format": "image/png",
          "transparent": "true",
          "attribution": "<a href='http://ows.terrestris.de/'>terrestris</a>",
          "info_format": "text/html",
          "tiled": false
      }        
  );


    this.layer["TESTWMS"] =source.getLayer("TOPO-WMS").addTo(this.map);
  }

  addMarker(x, y) {
    var marker = L.marker([y, x]).addTo(this.map);
  }

  getMap(){
    return this.map;
  }

  //===========================================================================================

  //sync
  syncMap(CreateMap) {
    this.map.sync(CreateMap.map);
  }
}