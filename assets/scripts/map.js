var loc = [ ["Toronto gym - 220A Yonge St" ,43.654252,-79.380689],["Scarborough gym - 300A Borough Dr ",43.775968,-79.258725]];
var map = L.map('map').setView([43.722469, -79.309679], 11);
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; ' + mapLink + ' Contributors',maxZoom: 18,
                }).addTo(map);
for (var i = 0; i < loc.length; i++) {
	marker = new L.marker([loc[i][1],loc[i][2]])
	.bindPopup(loc[i][0])
	.addTo(map);
	if (i==0) {           
		var marker1 = marker
	}
}
marker1.on('mouseover',function() {
	this.openPopup();
	var x = document.getElementsByClassName("gym1");
	x[0].style.backgroundColor = "#ffff66";
  });
marker1.on('mouseout', function(event){
	this.closePopup();
	var x = document.getElementsByClassName("gym1");
    x[0].style.backgroundColor = "white";
  });
marker.on('mouseover',function() {
	this.openPopup();
	var x = document.getElementsByClassName("gym2");
	x[0].style.backgroundColor = "#ffff66";
  });
marker.on('mouseout', function(event){
	this.closePopup();
	var x = document.getElementsByClassName("gym2");
    x[0].style.backgroundColor = "white";
  });