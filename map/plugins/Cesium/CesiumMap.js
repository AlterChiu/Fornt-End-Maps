


 //This is your access token from: https://cesium.com/ion/tokens
 Cesium.Ion.defaultAccessToken =
 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0OTBiMDliNi1hNTBmLTQyOTctOGE1Zi1jMmIzZTI2NWYxNGYiLCJpZCI6NDczMjUsImlhdCI6MTYxNzA2ODAzNn0.S5VfNcWrA9yHKkmD1PUcwry6YbVPI8aEUZhKPFuqcjo';


export class CreateCesiumMap{

  constructor(contentID){
    this.contentID = contentID;
    this.viewer;

    // controller
    
  }




}


 // Initialize the Cesium Viewer in the HTML element with the "cesiumContainer" ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
 terrainProvider: Cesium.createWorldTerrain(),

 // 右上方 baseMapbutton
 baseLayerPicker: false,

 // 右上方 baseMapbutton
 projectionPicker: false,

 // 右上方問號button
 navigationHelpButton: false,

 // 右上方房子button
 homeButton: false,

 // 右下方全螢幕button
 fullscreenButton: false,
});
// Add Cesium OSM Buildings, a global 3D buildings layer.
https: //i3s.nlsc.gov.tw/LOD1/i3s/rest/services/nlsc/SceneServer/layers/I3S服務LOD1代碼
 var buildingTileset = viewer.scene.primitives.add(
   new Cesium.Cesium3DTileset({
     url: 'https://3dtiles.nlsc.gov.tw/LOD1/tiles3d/臺北市近似模型/tileset.json'
   })
 );
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
 destination: Cesium.Cartesian3.fromDegrees(121, 24, 1200000)
});


$(".cesium-viewer-bottom").css("display", "none");
$(".cesium-viewer-timelineContainer").css("display", "none");
$(".cesium-viewer-animationContainer").css("display", "none");
$(".cesium-sceneModePicker-wrapper").css("display", "none");





// get current position
var cartographic = new Cesium.Cartographic();
var camera = viewer.scene.camera;
var ellipsoid = viewer.scene.mapProjection.ellipsoid;


// trigger while the camera stopped moving
viewer.camera.moveEnd.addEventListener(function () {
 ellipsoid.cartesianToCartographic(camera.positionWC, cartographic);
 const lon = Cesium.Math.toDegrees(cartographic.longitude).toFixed(3);
 const lat =  Cesium.Math.toDegrees(cartographic.latitude).toFixed(3);
 const height = cartographic.height;
 console.log("lon " + lon);
 console.log("lat " + lat);
 console.log("height " + height);
});


function setViewBoundary(viewer , ){

}