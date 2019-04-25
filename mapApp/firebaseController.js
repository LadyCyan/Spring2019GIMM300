var locationsRef = firebase.database().ref('locationData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot){
    snapshotToArray(snapshot);
    updateLocations();
});

function snapshotToArray(snapshot){
    var locationArray = [];
    snapshot.foreach(function(childSnapshot){
        var item = childSnapshot.val();
        locationArray.push(item);

    });
    locationDataArray = locationArray;
}