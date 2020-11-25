$(document).ready(function() {
  //access canvas from HTML
  var theCanvas = document.getElementById("myCanvas");
  var theContext = theCanvas.getContext("2d");

    //access image element from html
    var theImage = document.getElementById("myImage");
    //draw it on canvas
    theContext.drawImage(theImage, 0, 0, 350, 500);
    // create a function that when user clicks on image
    // image pixels become inverted
    theCanvas.addEventListener('mousedown', function(evt) { 
    console.log("touch"); 
        // Get the CanvasPixelArray from the given coordinates and dimensions.
        var theData = theContext.getImageData(0, 0, 350, 500);
        var thePixels = theData.data;

        // Log what data it's returning
        // See what values it's returning - 0-255, so it's rgb
        // console.log(thePixels);
        /* For every pixel in an ImageData object there are
        four pieces of information, the RGBA values:
        R - The color red (from 0-255)
        G - The color green (from 0-255)
        B - The color blue (from 0-255)
        A - The alpha channel (from 0-255; 0 is transparent and 255 is fully visible) */

        // Loop over each pixel and invert the color
        // i += 4 because we have to jump over 4 RGBS values
        for (var i = 0; i < thePixels.length; i += 4) {
            thePixels[i] = 255 - thePixels[i]; // red
            thePixels[i+1] = 255 - thePixels[i+1]; // green
            thePixels[i+2] = 255 - thePixels[i+2]; // blue
        }

        // Draw the ImageData at the given (x,y) coordinates.
        // putImageData is used to put data back
        theContext.putImageData(theData, 0, 0);
    });
  
});