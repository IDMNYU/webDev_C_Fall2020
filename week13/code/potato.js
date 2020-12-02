console.log("hello JS");
// getting started w/ jQuery
var theButton = $("#myButton").on("click", myFunction);
let status;
let theLat, theLong
let theURL = "https://www.google.com/maps/@"
let theCanvas = document.getElementById("theCanvas");
const theContxt = theCanvas.getContext('2d')
// draw rectangle to canvas
theContxt.fillStyle = 'yellow';
theContxt.fillRect(25, 10, 50,50);
function myFunction() {
  console.log("button click!");
   $("h3").append("<p> yr location:" + theLat +" Latitude" + theLong + " Longitude");
  //  window.open(theURL)
  // $('main').append(theURL)
}
// console.log(navigator.geolocation)
if ("geolocation" in navigator) {
  console.log("connected!")
} else {
  console.log("not connected");
}

navigator.geolocation.getCurrentPosition(function(thePosition){
  console.log(thePosition.coords.latitude, thePosition.coords.longitude)
  theLat = thePosition.coords.latitude;
  theLong = thePosition.coords.longitude;
  theURL = theURL + theLong + "," + theLat
})

if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
  console.log("enumerateDevices() not supported.");
  // return;
}

// LIST cameras + mics
navigator.mediaDevices.enumerateDevices().then(function(devices){
  devices.forEach(function(device){
    console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
  });
}).catch(function(err) {
  conssole.log(err.name + ": " + err.message);
});

var constraints = {
  audio: false,
  video: {
    width: 720,
    height: 360
  }
}

navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
  var theVideo = document.querySelector('video');
  theVideo.srcObject = mediaStream;
  theVideo.onloadedmetadata = function(e){
    theVideo.play();
  };
}).catch(function(err){
  console.log(err.name + ": " + err.message);
})