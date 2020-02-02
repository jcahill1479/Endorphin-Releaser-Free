
var canvas = document.getElementById('mainCanvas');





function handleSmallShapeAnimation() {
    SMALLSHAPES.smallShapes.forEach(function(smallShape, index, object) {

        // Move the bullet forward
          var radians = (Math.PI / 180) * smallShape.angle,
              cos = Math.cos(radians),
              sin = Math.sin(radians);
          smallShape.gravitySpeed += SMALLSHAPES.gravity;
          smallShape.x += SMALLSHAPES.baseSpeed * sin;
          smallShape.y +=  SMALLSHAPES.baseSpeed*cos+smallShape.gravitySpeed;
          if (smallShape.x>GAME.canvas.width)
          {
            delete smallShape.x;
          }
          else if (smallShape.x<0)
          {
            delete smallShape.x;
          }
          else if (smallShape.y>GAME.canvas.height)
          {
            delete smallShape.y;
          }
          else if (smallShape.y<0)
          {
            delete smallShape.y;
          }
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
    drawCircle(195,195,25);
    console.log("circle");
  }
  if (n == 3)
  {
    drawTriangle(195,195,25);
    console.log("tri");
  }
  if (n == 4)
  {
    drawSquare(195,195,25);
    console.log("sq");
  }
  if (n==5)
  {
    drawPentagon(195,195,25);
    console.log("pent");
  }
  if (n == 6)
  {
    drawHexagon(195,195,25);
    console.log("hex");
  }
  if (n == 7)
  {
    drawHeptagon(195,195,25);
    console.log("hept");
  }
//drawSquare();


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
}
var i = 0;
function timer()
{
  context.font = "20px Arial";
  //context.fillStyle='black';


  context.fillText(i/100, 10, GAME.canvas.height-10)
  if (i/100 >= 60)
  {
    GAME.started = false;
  }
  if (i%1000 == 0)
  {
    i = i+100;
  }
  //for (i=0; i<60000; i++)
  ///{

  //}
}


var score = 0;

//console.log(n);

context.fillStyle = getRandomColor();

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

    context.fillText("Score " + score, 20, 70);

    RenderNewObject();
    RenderSmallShapes(context);
    //drawHexagon();
    console.log(SHAPES.x);
    // 3 - Draw new items
    //RenderSpaceship(context);
    timer();
    i = i+1.5;
    //console.log(i);


  } else {
    context.clearRect(0, 0, 400, 400);
    context.font = "30px Arial";
    context.fillText("Game Over      Score " + score, 35, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
