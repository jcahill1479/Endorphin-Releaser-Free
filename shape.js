
function getRandomColor(){
  var red = Math.floor(Math.random()* 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  return "rgb("+red+","+green+"," +blue+" )";
}
function getSecondRandomColor(){
  var red = Math.floor(Math.random()* 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);

  return "rgb("+red+","+green+"," +blue+" )";
}


function drawCircle(x,y,size){
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();

}

function drawTriangle(x,y,size){

  var context = canvas.getContext('2d');
  var numberOfSides = 3,
  size = size,
  Xcenter = x,
  Ycenter = y;

  context.beginPath();
  context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

//context.strokeStyle = "#000000";
//context.lineWidth = 1;
context.fill();
}

function drawSquare(x,y,size){
  var context = canvas.getContext('2d');
  var numberOfSides = 4,
  size = size,
  Xcenter = x,
  Ycenter = y;

  context.beginPath();
  context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

//context.strokeStyle = "#000000";
//context.lineWidth = 1;
context.fill();
}



function drawPentagon(x,y,size){
  var context = canvas.getContext('2d');
  var numberOfSides = 5,
  size = size,
  Xcenter = x,
  Ycenter = y;

  context.beginPath();
  context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

for (var i = 1; i <= numberOfSides;i += 1) {
    context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
}

//context.strokeStyle = "#000000";
//context.lineWidth = 1;
context.fill();
  }

  function drawHexagon(x,y,size){
    var context = canvas.getContext('2d');
    var numberOfSides = 6,
    size = size,
    Xcenter = x,
    Ycenter = y;

    context.beginPath();
    context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  //context.strokeStyle = "#000000";
  //context.lineWidth = 1;
  context.fill();
    //context.fillStyle = '#f00';
    /**
    context.beginPath();
    context.moveTo(210, 215);
    context.lineTo(190,215);
    context.lineTo(177, 195);
    context.lineTo(190, 175);
    context.lineTo(210, 175);
    context.lineTo(223,195);
    context.closePath();
    context.fill();
    */
    }

    console.log(SHAPES.x);
    function drawHeptagon(x,y,size){
      var context = canvas.getContext('2d');
      //context.fillStyle = '#f00';
      //var context = canvas.getContext('2d');
      var numberOfSides = 7,
      size = size,
      Xcenter = x,
      Ycenter = y;

      context.beginPath();
      context.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

    for (var i = 1; i <= numberOfSides;i += 1) {
        context.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
    }

    //context.strokeStyle = "#000000";
    //context.lineWidth = 1;
    context.fill();
      }
