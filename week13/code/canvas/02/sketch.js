$(document).ready(function() {
  //access canvas from HTML
  var theCanvas = document.getElementById("myCanvas");
  var theContext = theCanvas.getContext("2d");
  //say which color should fill in
  theContext.fillStyle = "#00ff00";
  // use fillRect to actually fill it in
  theContext.fillRect(0, 0, 50, theCanvas.height);
});
