
var SMALLSHAPES = {
  level : 1,
  activeCount : 3,
  smallShapes : [],
  maxDirectionAngle : 360,
  spawnDistance : {
    xMin : 50,
    xMax : 100,
    yMin : 50,
    yMax : 100
  },
  baseSpeed : 3,
  gravity : 0.05,
  pixelScaleBySize : 5
};


function AddSmallShape(size) {
  size = 3;
  // Generate smallShape location
  var locationXY = GetNewSmallShapeLocation();
  var direction = GetNewSmallShapeDirection();
  var gravity;
  // Add smallShape
  SMALLSHAPES.smallShapes.push(
    {
      x : locationXY[0],
      y : locationXY[1],
      angle : direction,
      size : size,
      remove : false,
      gravitySpeed : 0
    }
  );
}

/** GetNewSmallShapeLocation
 *
 *  Generates a new smallShape location and returns it in array form [x,y]
 *  This returns an smallShape a certain distance from the spaceship
 */
function GetNewSmallShapeLocation() {
  return [190, 190];
}


/** GetNewSmallShapeDirection
 *
 *  Create new smallShape direction which is between 0-360 degrees
 */
function GetNewSmallShapeDirection() {
  return Math.floor(Math.random() * Math.floor(SMALLSHAPES.maxDirectionAngle));
}

function RenderSmallShapes(context) {
  // This function is run for each smallShape
  SMALLSHAPES.smallShapes.forEach(
    function(smallShape, index, object) {
        context.moveTo(smallShape.x, smallShape.y);
        //context.fillStyle = getSecondRandomColor();
        context.lineWidth = 2;

        if (n == 2)
        {
          drawCircle(smallShape.x, smallShape.y, 10);
        }
        else if (n==3){
          drawTriangle(smallShape.x, smallShape.y, 10);
        }
        else if (n==4){
          drawSquare(smallShape.x, smallShape.y, 10);
        }
        else if (n==5){
          drawPentagon(smallShape.x, smallShape.y, 10);
        }
        else if (n==6){
          drawHexagon(smallShape.x, smallShape.y, 10);
        }
        else if (n==7){
          drawHeptagon(smallShape.x, smallShape.y, 10);
        }
        /**
        context.fillRect(
          smallShape.x,
          smallShape.y,
          smallShape.size * SMALLSHAPES.pixelScaleBySize,
          smallShape.size * SMALLSHAPES.pixelScaleBySize
        );
        */




  });
}
