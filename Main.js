var c = document.getElementById("MainCanvas");
var square = document.getElementById("createSquare");
c.width = 800;
c.height = 300;

var canvas = new fabric.Canvas('MainCanvas');


square.addEventListener('click', function (e) {
  // "add" rectangle onto canvas
  canvas.add(new fabric.Rect({
    width: 50,
    height: 50,
    left: 50,
    top: 50,
    fill: 'rgb(255,0,0)'
  }));

  canvas.item(0).set({
     borderColor: 'black',
     cornerColor: 'black',
     cornerSize: 10,
     transparentCorners: false,
     cornerStyle: 'circle'
   });
});



 document.addEventListener('keydown', function (e) {
     if(e.code == "Backspace" || e.code == "Delete"){
       canvas.remove(canvas.getActiveObject());
     }
}, false);
