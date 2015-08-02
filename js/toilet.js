var id = $('#map-canvas').data('key');

var locat = [
  ['ห้องน้ำคณะเทคโนโลยีสารสนเทศ มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.652566, 100.493614, 4],
  ['ห้องน้ำอาคารเรียนรวม 1 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651531, 100.493287, 5],
  ['ห้องน้ำอาคารเรียนรวม 2 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651497, 100.493845, 3],
  ['ห้องน้ำอาคารเรียนรวม 3 มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.649913, 100.492006, 2],
  ['อาคารวิศววัฒนะ(ตึกแดง) มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.651821, 100.494963, 1],
  ['อาคารจอดรถ 14 ชั้น มหาวิทยาลัยพระจอมเกล้าธนบุรี', 13.650374, 100.495716, 1],
  ['ใต้ลานภาควิชาฟิสิกส์ มหาวิทยาลัยพระจอมเกล้าธนบุรี',13.652534, 100.494536,2]

];


function initialize() {
	var local = locat[id];
  var myLatlng = new google.maps.LatLng(local[1], local[2]);
  var mapOptions = {
    zoom: 18,
    center: myLatlng,
    disableDefaultUI: true,
    zoomControl: true,

  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);