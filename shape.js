
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


function drawCircle(){
  context.beginPath();
  context.arc(200, 200, 30, 0, 2 * Math.PI);
  context.fill();

}

function drawTriangle(){

  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(240, 200);
    context.lineTo(200, 160);
    context.lineTo(160, 200);
    context.fill();
  }
}

function drawSquare(){
  var context = canvas.getContext('2d');
  //console.log(true);

  context.fillRect(170, 170, 50, 50);
}



function drawPentagon(){
  var context = canvas.getContext('2d');
  //context.fillStyle = '#f00';
  context.beginPath();
  context.moveTo(200+15, 200+10);
  context.lineTo(170+15,200+10);
  context.lineTo(160+15, 170+10);
  context.lineTo(185+15, 150+10);
  context.lineTo(210+15, 170+10);
  context.closePath();
  context.fill();
  }

  function drawHexagon(){
    var context = canvas.getContext('2d');
    //context.fillStyle = '#f00';
    context.beginPath();
    context.moveTo(210, 215);
    context.lineTo(190,215);
    context.lineTo(177, 195);
    context.lineTo(190, 175);
    context.lineTo(210, 175);
    context.lineTo(223,195);
    context.closePath();
    context.fill();
    }

    function drawHeptagon(){
      var context = canvas.getContext('2d');
      //context.fillStyle = '#f00';
      context.beginPath();
      context.moveTo(210, 215);
      context.lineTo(190,215);
      context.lineTo(176, 200);
      context.lineTo(182, 185);
      context.lineTo(200, 175);
      context.lineTo(217,185);
      context.lineTo(222,200);
      context.closePath();
      context.fill();
      }
