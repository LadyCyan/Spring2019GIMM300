var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot){
    snapshotToArray(snapshot);
    updateLocations();
});
function writeUserLocationData(userTitle, userInfo, userAvailable, lat, lon){
  firebase.database().ref('locationData/' + userTitle).set({
    title: userTitle,
    content:userInfo,
    latitude: lat,
    longitude:lon,
    available: userAvailable

  });
}

function snapshotToArray(snapshot){
    var locationArray = [];
    snapshot.forEach(function(childSnapshot){
        var item = childSnapshot.val();
        locationArray.push(item);

    });
    locationsDataArray = locationArray;
}
