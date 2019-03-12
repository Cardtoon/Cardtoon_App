var c = document.getElementById("MainCanvas");
c.width = 800;
c.height = 300;

var canvas = new fabric.Canvas('MainCanvas');

// create a rectangle object
var rect = new fabric.Rect({
  left: 0,
  top: 0,
  fill: 'red',
  width: x,
  height: y
});

// "add" rectangle onto canvas
canvas.add(rect);

var scaleControl = $('scale-control');
  scaleControl.oninput = function() {
    rect.scale(parseFloat(this.value)).setCoords();
    canvas.requestRenderAll();
  };

  //test

  //stylesheet
