import * as map from "../map/plugins/leaflet/LeafletMap.js";

var mainMap = new map.CreateMap("mainMap");
mainMap.setCenter(121, 25, 7);
mainMap.addMBTilesLayer(0, "./map/localFile/MBTiles/TaiwanEMap6.mbtiles", 20);
mainMap.addMarker(120.267271,23.275433)


var tifMap = new map.CreateMap("tifMap");
tifMap.setCenter(121, 25, 7);
tifMap.addTestWMS();

var demMap = new map.CreateMap("demTif");
demMap.setCenter(121, 25, 7);
demMap.addSatelliteLayer(20);




mainMap.syncMap(tifMap);
mainMap.syncMap(demMap);

var leafletMap = mainMap.getMap();
leafletMap.setZoom(4);

leafletMap.on("zoomend" , function(){
    $(".zoom-label").text("zoomLevel:" +leafletMap.getZoom() );
    console.log(leafletMap.getZoom());
})


