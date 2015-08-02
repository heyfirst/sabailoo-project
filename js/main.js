var map;

var beaches = [
  ['ห้องน้ำคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.652566, 100.493614, 4,'toilet.html'],
  ['ห้องน้ำอาคารเรียนรวม 1 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651531, 100.493287, 5,'toilet.html'],
  ['ห้องน้ำอาคารเรียนรวม 2 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651497, 100.493845, 3,'toilet.html'],
  ['ห้องน้ำอาคารเรียนรวม 3 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.649913, 100.492006, 2,'toilet.html'],
  ['อาคารวิศววัฒนะ(ตึกแดง) มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651821, 100.494963, 1,'toilet.html'],
  ['อาคารจอดรถ 14 ชั้น มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.650374, 100.495716, 1,'toilet.html'],
  ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
  // ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2,'toilet.html'],
];

function initialize() {
  var mapOptions = {
    zoom: 18,
    disableDefaultUI: true,
    zoomControl: true,
    // center: new google.maps.LatLng(-33, 151)
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'คุณอยู่ตรงนี้'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }

  setMarkers(map, beaches);

}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}


function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  
  // Shapes define the clickable region of the icon.
  // The type defines an HTML &lt;area&gt; element 'poly' which
  // traces out a polygon as a series of X,Y points. The final
  // coordinate closes the poly by connecting to the first
  // coordinate.
  var shape = {
      coords: [1, 1, 1, 20, 18, 20, 18 , 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: '../img/location.png',
        shape: shape,
        title: beach[0],
        zIndex: beach[3],
        url: beach[4]
    });
    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = marker.url;
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);

