function flyToDegrees(longitude, latitude, elevation, heading, pitch) {
    console.log("Testing");
    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(longitude, latitude, elevation),
        orientation: {
            heading: Cesium.Math.toRadians(heading),
            pitch: Cesium.Math.toRadians(pitch),
        }
    });
}