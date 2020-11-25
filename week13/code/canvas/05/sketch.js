
$(document).ready(function() {
  //access canvas from HTML
  var c = document.getElementById("myCanvas");
  var context = c.getContext("2d");
  
    var x = c.width/2;
    var y = c.height/2;
    var radius=30;
    var direction = 2;
    context.fillStyle = "lightblue";
    
    var draw = function () {
        context.clearRect(0, 0, c.width, c.height);
        context.beginPath();
        context.arc(x,y,radius,0,2*Math.PI);
        context.fill();
    };
    
    // Set how often the function should run
    setInterval(draw, 1000 / 30); // 30 x per second

    c.addEventListener('mousemove', function(evt) {

        // Get the canvas bounding rect
        var canvasRect = c.getBoundingClientRect(); 
        /* say that coordinates should move
        from where it used to be to a new location */
        x = evt.clientX - canvasRect.left;
        y = evt.clientY - canvasRect.top;
    });
});