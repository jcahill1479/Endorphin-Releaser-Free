
var canvas = document.getElementById('mainCanvas');



function handleSmallShapeAnimation() {
    SMALLSHAPES.smallShapes.forEach(function(smallShape, index, object) {

        // Move the bullet forward
          var radians = (Math.PI / 180) * smallShape.angle,
              cos = Math.cos(radians),
              sin = Math.sin(radians);
          smallShape.x += SMALLSHAPES.baseSpeed * sin;
          smallShape.y +=  SMALLSHAPES.baseSpeed * cos;

          // Check if smallShape is leaving the boundary, if so, switch sides
          /*
          if (smallShape.x > GAME.canvas.width) {
            smallShape.x = 0;
          } else if (smallShape.x < 0) {
            smallShape.x = 600;
          } else if (smallShape.y > GAME.canvas.height) {
            smallShape.y = 0;
          } else if (smallShape.y < 0) {
            smallShape.y = 300;
          }
          */
    });

}



var n = 0;

function randomNum(){
  n = Math.floor(Math.random() * 6) + 2;
}

randomNum();

function RenderNewObject(context) {
  //console.log(true);
  if (n == 2)
  {
    drawCircle();
    console.log("circle");
  }
  if (n == 3)
  {
    drawTriangle();
    console.log("tri");
  }
  if (n == 4)
  {
    drawSquare();
    console.log("sq");
  }
  if (n==5)
  {
    drawPentagon();
    console.log("pent");
  }
  if (n == 6)
  {
    drawHexagon();
    console.log("hex");
  }
  if (n == 7)
  {
    drawHeptagon();
    console.log("hept");
  }
//drawSquare();

}
/**
function HandleNewObjectMovement() {
  SQUARE_COORDINATES.x += 1;
  SQUARE_COORDINATES.y += 1;
  if (SQUARE_COORDINATES.x > GAME.canvas.width) {
    SQUARE_COORDINATES.x = 0;
  } else if (SQUARE_COORDINATES.x < 0) {
    SQUARE_COORDINATES.x = 600;
  } else if (SQUARE_COORDINATES.y > GAME.canvas.height) {
    SQUARE_COORDINATES.y = 0;
  } else if (SQUARE_COORDINATES.y < 0) {
    SQUARE_COORDINATES.y = 600;
  }
}
*/



console.log(n);

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {
    //RenderNewObject();
    // 1 - Reposition the objects
    //handleShipAnimation();
    //HandleNewObjectMovement();
    handleSmallShapeAnimation();
    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 400, 400);

    RenderNewObject();
    RenderSmallShapes(context);

    // 3 - Draw new items
    //RenderSpaceship(context);



  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
