var canvas = document.getElementById('mainCanvas');


   context = canvas.getContext('2d'),


canvas.addEventListener('click', function(event) {
   var xVal = event.pageX,
   yVal = event.pageY;
   console.log(xVal, yVal);

      if (yVal > 170 && yVal < 240 && xVal < 235 && xVal > 180)
      {
         console.log("element clicked");
         //chooseShape();
         context.fillStyle = getRandomColor();
         var n = Math.floor(Math.random() * 8) + 2;
         randomNum();
         x = Math.floor(Math.random() * 11) + 10;
         console.log(x);
         for (var i = 0; i < x; i++) {
             AddSmallShape();
           }
         RenderSmallShapes(context);
         console.log(n);
      }
      else{
        console.log("false");
      }
 }, false);
