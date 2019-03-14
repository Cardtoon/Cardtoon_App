var c = document.getElementById("MainCanvas");
var square = document.getElementById("createSquare");
var rectangle = document.getElementById("createRectangle");
var circle = document.getElementById("createCircle");
c.width = 800;
c.height = 500;

var canvas = new fabric.Canvas('MainCanvas');

//Create Square
square.addEventListener('click', function (e) {
  // "add" square onto canvas
  canvas.add(new fabric.Rect({
    width: 100,
    height: 100,
    left: 100,
    top: 100,
    fill: 'rgb(255,0,0)'
  }));
  fabric.Object.prototype.set({
    cornerStrokeColor: 'black'
  });
});

// create rectangle
rectangle.addEventListener('click', function (e) {
  // "add" rectangle onto canvas
  canvas.add(new fabric.Rect({
    width: 300,
    height: 100,
    left: 100,
    top: 100,
    fill: 'rgb(0,255,0)'
  }));
  fabric.Object.prototype.set({
    cornerStrokeColor: 'black'
  });
});

// create Circle
circle.addEventListener('click', function (e) {
  // "add" rectangle onto canvas
  canvas.add(new fabric.Circle({
    radius: 75,
    left: 100,
    top: 100,
    fill: 'rgb(0,0,255)'
  }));
  fabric.Object.prototype.set({
    cornerStrokeColor: 'black'
  });
});

fabric.Object.prototype.customiseCornerIcons({
    settings: {
        borderColor: 'black',
        cornerSize: 12,
        cornerShape: 'circle',
        cornerBackgroundColor: 'white',
        cornerPadding: 10,
    },
    tl: {
      action: 'rotate',
      cursor: 'cow.png'
    },
    tr: {
        //icon: ''
    },
    bl: {
        //icon: ''
    },
    br: {
        //icon: ''
    },
    mb: {
        //icon: ''
    },
    // only is hasRotatingPoint is not set to false
    mtr: {
        //icon: ''
    },
}, function() {
    canvas.renderAll();
} );

// delete function
 document.addEventListener('keydown', function (e) {
     if(e.code == "Backspace" || e.code == "Delete"){
    var activeGroup = canvas.getActiveObjects();
    if (activeGroup) {
            activeGroup.forEach(function(object) {
            canvas.remove(object);
            });
            canvas.discardActiveObject()
        }
   }
}, false);
